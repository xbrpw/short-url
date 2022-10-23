function _extends() {_extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};return _extends.apply(this, arguments);}import React, {
useEffect,
useRef,
useState,
useCallback } from
"https://cdn.skypack.dev/react";

import ReactDOM from "https://cdn.skypack.dev/react-dom";

// Hai!
// This is definitely not the most pretty solution
// but it's the one I could come up with that offers
// the least amount of state variables and also
// that gives your freedom to control the transition with css
// It's a lil clunky right now but I think with some tweaks
// to the easings this will look much better
function Article({
  period,
  title,
  company,
  location,
  children,
  transition,
  ...props })
{
  // open/close
  const [state, setState] = useState(false);
  // required dom nodes
  const articleRef = useRef();
  const drawerRef = useRef();

  // this one is simple, it fires after we animate in
  // so we make sure that our container is responsive
  const animateDrawerDone = useCallback(() => {
    const drawer = drawerRef.current;

    console.log("done");

    drawer.style.height = "auto";

    // clean up
    drawer.removeEventListener("transitionend", animateDrawerDone);
  }, []);

  const animateDrawerIn = useCallback(() => {
    const article = articleRef.current;
    const drawer = drawerRef.current;

    console.log("in");

    // neat trick here
    // we set it to auto so we can get the height
    drawer.style.height = "auto";
    const height = drawer.offsetHeight;

    // and then revert back to 0
    // the user doesn't see a flash of styles as
    // the browser will only render the screen
    // at the end of the cycle and that will contain the last value
    // in this case 0
    drawer.style.height = 0;

    // we need this to tick on the next browser render
    // so we add a miniscule timeout to send it to the
    // last position on the call stack
    setTimeout(() => {
      console.log({ height });
      drawer.style.height = `${height}px`;
    }, 10);

    // for the responsive fallback
    drawer.addEventListener("transitionend", animateDrawerDone);

    // clean up
    article.removeEventListener("transitionend", animateDrawerIn);
  }, [animateDrawerDone]);

  const animateDrawerReset = useCallback(() => {
    const drawer = drawerRef.current;
    const height = drawer.offsetHeight;

    // clean up
    drawer.removeEventListener("transitionend", animateDrawerDone);

    // we need to add the height here because as you know
    // the browser won't transition from auto to px
    drawer.style.height = `${height}px`;

    console.log({ height });

    // same trick as above
    setTimeout(() => {
      console.log("zero");
      drawer.style.height = 0;
    }, 10);
  }, [animateDrawerDone]);

  // toggle your state and you can also trigger other things
  function toggle() {
    setState(cur => !cur);
  }

  // This will react to the change in your state
  // based on the coming value we will respond to
  // the css animation
  useEffect(() => {
    const article = articleRef.current;

    // when we are opening we only animate the height
    // after the parent width has completed its transition
    if (state) article.addEventListener("transitionend", animateDrawerIn);else
    {
      // this is to make sure there are no left overs
      article.removeEventListener("transitionend", animateDrawerIn);

      // resets our drawer
      animateDrawerReset();
    }
  }, [state, animateDrawerIn, animateDrawerDone, animateDrawerReset]);

  return /*#__PURE__*/(
    React.createElement("article", _extends({
      ref: articleRef,
      className: `article ${state ? "is-open" : ""}` },
    props), /*#__PURE__*/

    React.createElement("header", { className: "article__header", onClick: toggle }, /*#__PURE__*/
    React.createElement("h5", null, period), /*#__PURE__*/
    React.createElement("h2", null, title), /*#__PURE__*/
    React.createElement("p", null, company), /*#__PURE__*/
    React.createElement("p", null, location)), /*#__PURE__*/

    React.createElement("section", { className: "article__section", "aria-hidden": !state }, /*#__PURE__*/
    React.createElement("div", { ref: drawerRef, class: "article__drawer" },
    children))));




}

function App() {
  return /*#__PURE__*/(
    React.createElement(Article, {
      period: "2016 - 2021",
      title: "Sr. Frontend Dev. & UI/UX Designer",
      company: "easyname GmbH",
      location: "Vienna, Austria" }, /*#__PURE__*/

    React.createElement("p", null, "Working with the people at easyname was pivotal for me. I entered the company at a time where neither frontend development, nor design was considered an integral part. I was brought in also with the intention to improve on this. I had the great privilege of joining a diverse team handpicked by Stephanie Anderson. The team kept growing and kept being expanded by extraordinary individuals."), /*#__PURE__*/








    React.createElement("p", null, "I had the great privilege of joining a diverse team handpicked by Stephanie Anderson. The team kept growing and kept being expanded by extraordinary individuals."), /*#__PURE__*/




    React.createElement("h3", null, "Some Highlights"), /*#__PURE__*/
    React.createElement("ul", null, /*#__PURE__*/
    React.createElement("li", null, "Created VPS Product Landingage"), /*#__PURE__*/
    React.createElement("li", null, "Engineered the UX of new Products & Features"), /*#__PURE__*/
    React.createElement("li", null, "Refactored ~90% of the CSS"), /*#__PURE__*/
    React.createElement("li", null, "Redesigned & Refactored the Domaincheck UI/UX"), /*#__PURE__*/
    React.createElement("li", null, "Designed new Product / Feature UI/UX"), /*#__PURE__*/
    React.createElement("li", null, "Created a Color System"), /*#__PURE__*/
    React.createElement("li", null, "Removed Bootstrap"), /*#__PURE__*/
    React.createElement("li", null, "Created a Styleguide"), /*#__PURE__*/
    React.createElement("li", null, "Unified & Evolved the visual Brand"))));



}

ReactDOM.render( /*#__PURE__*/
React.createElement(React.StrictMode, null, /*#__PURE__*/
React.createElement(App, null)),

document.getElementById("ninos-awesome-app"));