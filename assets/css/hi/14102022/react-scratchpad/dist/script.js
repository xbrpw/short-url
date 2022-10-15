function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const rootElement = document.getElementById('root');

class NameForm extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "state",


    {
      error: this.props.getErrorMessage('') });_defineProperty(this, "handleSubmit",


    event => {
      event.preventDefault();
      const value = event.target.elements.username.value;
      const error = this.props.getErrorMessage(value);
      if (error) {
        alert(`error: ${error}`);
      } else {
        alert(`success: ${value}`);
      }
    });_defineProperty(this, "handleChange",

    event => {
      const { value } = event.target;
      this.setState({
        error: this.props.getErrorMessage(value) });

    });}

  render() {
    const { error } = this.state;
    return /*#__PURE__*/(
      React.createElement("form", { onSubmit: this.handleSubmit }, /*#__PURE__*/
      React.createElement("label", null, /*#__PURE__*/
      React.createElement("span", null, "Name:"), /*#__PURE__*/
      React.createElement("input", { name: "username", onChange: this.handleChange })),

      error ? /*#__PURE__*/React.createElement("div", { style: { color: 'red' } }, error) : null, /*#__PURE__*/
      React.createElement("button", { disabled: Boolean(error) }, "Submit")));


  }}


const element = /*#__PURE__*/
React.createElement(NameForm, { getErrorMessage: value => {
    if (value.length < 3) {
      return `Value must be at least 3 characters but it is only ${value.length}`;
    }
    if (!value.includes('s')) {
      return `Value does not include "s" but it should`;
    }
    return null;
  } });


ReactDOM.render(
element,
document.getElementById('root'));