const html = `<p class="codepen" data-height="400" data-theme-id="default" data-default-tab="css,result" data-user="pehaa" data-slug-hash="zbvbwd" style="height: 400px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Tangram Memory Game">
  <span>See the Pen <a href="https://codepen.io/pehaa/pen/zbvbwd">
  Tangram Memory Game</a> by Paulina Hetman (<a href="https://codepen.io/pehaa">@pehaa</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></` + `script>`;

const App = () => {
  /* we need to append the CodePen script only once  */
  let codePenScriptIsAppended = false;

  const options = {
    replace: node => {
      console.log(node);
      if (
      node.name === 'script' &&
      node.attribs &&
      node.attribs.src === 'https://static.codepen.io/assets/embed/ei.js')
      {
        if (!codePenScriptIsAppended) {
          const script = document.createElement('script');
          script.src = node.attribs.src;
          script.setAttribute('async', "");
          document.head.appendChild(script);
          codePenScriptIsAppended = true;
        }
        return /*#__PURE__*/React.createElement(React.Fragment, null);
      }
    } };

  return /*#__PURE__*/(
    React.createElement("div", { className: "App" }, /*#__PURE__*/
    React.createElement("section", null, /*#__PURE__*/
    React.createElement("h1", null, "Embed a pen with React and html-react-parser"), /*#__PURE__*/
    React.createElement("div", null,
    HTMLReactParser(html, options)))));




};

const rootElement = document.getElementById("app");
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), rootElement);