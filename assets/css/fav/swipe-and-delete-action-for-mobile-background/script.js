import React, { useState } from "https://cdn.skypack.dev/react@17.0.1";
import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

/*******************************/
/********** CONSTANTS **********/
/*******************************/

const SWIPE_THRESHOLD = 50;
const SWIPE_OPEN = 120;
const SWIPE_OPEN_LIMIT = 200;

/*******************************/
/********** FUNCTIONS **********/
/*******************************/

function getMoveValue(holdX, clientX) {
  let moveValue = holdX - clientX;

  if (Math.abs(moveValue) < SWIPE_THRESHOLD) {
    return;
  }

  if (moveValue < 0) {
    moveValue += SWIPE_THRESHOLD;
  } else
  {
    moveValue -= SWIPE_THRESHOLD;
  }

  return moveValue;
}

function getHoldValue(moveValue) {
  if (Math.abs(moveValue) > SWIPE_OPEN - SWIPE_THRESHOLD) {
    let holdValue = SWIPE_OPEN;

    if (moveValue > 0) {
      holdValue *= -1;
    }

    return holdValue;
  } else
  {
    return 0;
  }
}

/********************************/
/********** COMPONENTS **********/
/********************************/

function NavBar() {
  const [menuClassName, setMenuClassName] = useState("");
  const [searchClassName, setSearchClassName] = useState("search");
  const [searchValue, setSearchValue] = useState("");
  const [menuBoxClassName, setMenuBoxClassName] = useState("menu-box");

  return /*#__PURE__*/(
    React.createElement("div", { className: "navbar" }, /*#__PURE__*/
    React.createElement("div", { className: "navbar-wrapper" }, /*#__PURE__*/
    React.createElement("div", { className: "menu" }, /*#__PURE__*/
    React.createElement("a", {
      href: "#",
      className: menuClassName,
      onClick: evt => {
        evt.preventDefault();
        if (menuClassName === "") {
          setMenuClassName("menu-active");
          setMenuBoxClassName("menu-box menu-box-active");
        } else
        {
          setMenuClassName("");
          setMenuBoxClassName("menu-box");
        }
      } }, /*#__PURE__*/
    React.createElement("span", null), /*#__PURE__*/
    React.createElement("span", null), /*#__PURE__*/
    React.createElement("span", null))), /*#__PURE__*/


    React.createElement("div", { className: searchClassName }, /*#__PURE__*/
    React.createElement("input", {
      type: "search",
      value: searchValue,
      onFocus: () => {
        setSearchClassName("search search-active");
      },
      onBlur: () => {
        if (searchValue === "") {
          setSearchClassName("search");
        }
      },
      onChange: evt => {
        setSearchValue(evt.target.value);
      } }), /*#__PURE__*/

    React.createElement("a", {
      href: "#",
      onClick: evt => {
        evt.preventDefault();
        setSearchValue("");
        setSearchClassName("search");
      } }), /*#__PURE__*/

    React.createElement("a", {
      href: "#",
      onClick: evt => {
        evt.preventDefault();
        setSearchValue("");
        setSearchClassName("search");
      } }))), /*#__PURE__*/



    React.createElement("div", { className: menuBoxClassName }, /*#__PURE__*/
    React.createElement("a", { href: "#" }, /*#__PURE__*/React.createElement("i", { className: "fas fa-home" }), " Home"), /*#__PURE__*/
    React.createElement("a", { href: "#" }, /*#__PURE__*/React.createElement("i", { className: "fas fa-user" }), " Profile"), /*#__PURE__*/
    React.createElement("a", { href: "#" }, /*#__PURE__*/React.createElement("i", { className: "fas fa-bell" }), " Notification"), /*#__PURE__*/
    React.createElement("a", { href: "#" }, /*#__PURE__*/React.createElement("i", { className: "fas fa-envelope" }), " Message"))));



}

function ListItem(props) {
  const [holdX, setHoldX] = useState(null);
  const [moveValue, setMoveValue] = useState(null);
  const [translateX, setTranslateX] = useState("0px");
  const [hiding, setHiding] = useState(false);
  const [hidden, setHidden] = useState(false);

  const index = props.index;

  function setHooks(hold, move, translate) {
    setHoldX(hold);
    setMoveValue(move);
    setTranslateX(`${translate}px`);
  }

  function hideItem(evt) {
    evt.preventDefault();

    setHooks(null, null, 0);

    setTimeout(() => {
      setHiding(true);
    }, 128);
  }

  function listItemCommand() {
    let itemLeft = null;
    let itemRight = null;

    const translateXTemp = parseInt(translateX.replace(/px/g, ""));

    if (translateXTemp < 0) {
      itemRight = /*#__PURE__*/
      React.createElement("a", { href: "#", className: "item-command-right", onClick: hideItem }, /*#__PURE__*/
      React.createElement("i", { className: "far fa-trash-alt" }));


    } else
    if (translateXTemp > 0) {
      itemLeft = /*#__PURE__*/
      React.createElement("a", { href: "#", className: "item-command-left", onClick: hideItem }, /*#__PURE__*/
      React.createElement("i", { className: "far fa-trash-alt" }));


    }

    return /*#__PURE__*/(
      React.createElement("div", { className: "item-command" },
      itemLeft,
      itemRight));


  }

  let className = "list-item";

  if (hiding === true) {
    className += " list-item-hiding";
  } else
  if (hidden === true) {
    return null;
  }

  return /*#__PURE__*/(
    React.createElement("div", {
      className: className,
      style: {
        "--translate-x": translateX },

      onTransitionEnd: evt => {
        if (evt.target.className === className && evt.propertyName === "opacity") {
          setTimeout(() => {
            setHiding(false);
            setHidden(true);
          }, 128);
        }
      } },

    listItemCommand(), /*#__PURE__*/
    React.createElement("div", {
      className: "item-container",
      onMouseDown: evt => {
        setHoldX(evt.clientX);
      },
      onMouseMove: evt => {
        if (holdX === null) {
          return;
        }

        evt.preventDefault();

        let moveValueTemp = getMoveValue(holdX, evt.clientX);

        setMoveValue(moveValueTemp);

        if (Math.abs(moveValue) <= SWIPE_OPEN_LIMIT) {
          setTranslateX(`${moveValue * -1}px`);
        }
      },
      onMouseUp: evt => {
        let holdValue = getHoldValue(moveValue);

        setHooks(null, null, holdValue);
      },
      onMouseLeave: evt => {
        if (holdX === null) {
          return;
        }

        let holdValue = getHoldValue(moveValue);

        setHooks(null, null, holdValue);
      },
      onTouchStart: evt => {
        for (let i = 0; i < evt.touches.length; i++) {
          setHoldX(evt.touches[i].clientX);
        }
      },
      onTouchMove: evt => {
        if (holdX === null) {
          return;
        }

        for (let i = 0; i < evt.touches.length; i++) {
          let moveValueTemp = getMoveValue(holdX, evt.touches[i].clientX);

          setMoveValue(moveValueTemp);

          if (Math.abs(moveValue) <= SWIPE_OPEN_LIMIT) {
            setTranslateX(`${moveValue * -1}px`);
          }
        }
      },
      onTouchEnd: evt => {
        let holdValue = getHoldValue(moveValue);

        setHooks(null, null, holdValue);
      },
      onTouchCancel: evt => {
        let holdValue = getHoldValue(moveValue);

        setHooks(null, null, holdValue);
      } }, /*#__PURE__*/

    React.createElement("div", { className: "icon-container" }, /*#__PURE__*/
    React.createElement("div", { className: "image" })), /*#__PURE__*/

    React.createElement("div", { className: "text-container" }, /*#__PURE__*/
    React.createElement("div", { className: "title-container" },
    index, ". Swipe me to left or right"), /*#__PURE__*/

    React.createElement("div", { className: "details-container" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")))));






}

function Content() {
  const listItems = [];
  for (let i = 0; i < 10; i++) {
    listItems.push( /*#__PURE__*/React.createElement(ListItem, { index: i }));
  }
  return /*#__PURE__*/(
    React.createElement("div", { className: "list" },
    listItems));


}

function Tabs() {
  const [activeLink, setActiveLink] = useState("home");
  const linkMap = [{
    title: "home",
    icon: "fas fa-home" },
  {
    title: "profile",
    icon: "fas fa-user" },
  {
    title: "notification",
    icon: "fas fa-bell" },
  {
    title: "message",
    icon: "fas fa-envelope" }];

  let links = [];
  for (const link of linkMap) {
    let className = "tab-link";
    if (link.title === activeLink) {
      className += " tab-link-active";
    }
    links.push( /*#__PURE__*/
    React.createElement("li", { className: className }, /*#__PURE__*/
    React.createElement("a", {
      href: "#",
      onClick: evt => {
        evt.preventDefault();
        setActiveLink(link.title);
      } }, /*#__PURE__*/

    React.createElement("i", { className: link.icon }))));



  }
  return /*#__PURE__*/(
    React.createElement("ul", { className: "tabs" },
    links));


}

/*******************************/
/********** RENDERING **********/
/*******************************/

ReactDOM.render( /*#__PURE__*/React.createElement(NavBar, null), document.querySelector("#NavBar"));
ReactDOM.render( /*#__PURE__*/React.createElement(Content, null), document.querySelector("#Content"));
ReactDOM.render( /*#__PURE__*/React.createElement(Tabs, null), document.querySelector("#Tabs"));