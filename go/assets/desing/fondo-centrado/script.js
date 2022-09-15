function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const config = {
  apiKey: "AIzaSyBUNJfWoMRc7Vs8Ml5Q-ZLkXj-zD6fgtW0",
  authDomain: "radiant-torch-3037.firebaseapp.com",
  databaseURL: "https://radiant-torch-3037.firebaseio.com",
  projectId: "radiant-torch-3037",
  storageBucket: "radiant-torch-3037.appspot.com",
  messagingSenderId: "419105606981" };

firebase.initializeApp(config);

const App = () => /*#__PURE__*/
React.createElement("div", { className: "comments" }, /*#__PURE__*/
React.createElement("h2", null, "Comments"), /*#__PURE__*/
React.createElement(CommentForm, null), /*#__PURE__*/
React.createElement(CommentList, null), /*#__PURE__*/
React.createElement("footer", null, "React Hooks edition",
" ", /*#__PURE__*/
React.createElement("a", { target: "blank", href: "https://codepen.io/joshbivens/pen/aMjxVx" }, "here"),

" ", "\u2022 Vue edition",
" ", /*#__PURE__*/
React.createElement("a", { target: "blank", href: "https://codepen.io/joshbivens/pen/pYVBpG" }, "here"),

" ", "| \xA9 2019 by",
" ", /*#__PURE__*/
React.createElement("a", { target: "blank", href: "https://github.com/joshbivens" }, "Josh Bivens")));






class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      comment: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  formatTime() {
    const options = {
      month: "2-digit",
      day: "2-digit",
      year: "2-digit",
      hour: "2-digit",
      minute: "2-digit" };

    let now = new Date().toLocaleString("en-US", options);
    return now;
  }

  escapeHTML(html) {
    // [1]
    const div = document.createElement("div");
    div.textContent = html;
    return div.innerHTML;
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = {
      username: this.escapeHTML(this.state.username),
      comment: this.escapeHTML(this.state.comment),
      time: this.formatTime() };


    const db = firebase.database().ref("comments");
    db.push(user);

    this.setState({
      username: "",
      comment: "" });

  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value });

  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "comments-form" }, /*#__PURE__*/
      React.createElement("form", { onSubmit: this.handleSubmit }, /*#__PURE__*/
      React.createElement("ul", null, /*#__PURE__*/
      React.createElement("li", null, /*#__PURE__*/
      React.createElement("input", {
        name: "username",
        type: "text",
        placeholder: "Name",
        value: this.state.username,
        onChange: this.handleChange,
        required: true })), /*#__PURE__*/


      React.createElement("li", null, /*#__PURE__*/
      React.createElement("textarea", {
        name: "comment",
        placeholder: "Comment",
        value: this.state.comment,
        onChange: this.handleChange,
        required: true })), /*#__PURE__*/


      React.createElement("li", null, /*#__PURE__*/
      React.createElement("input", { type: "submit", value: "Post" }))))));





  }}


class CommentList extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    { comments: [] });}
  componentWillMount() {// [2]
    const db = firebase.database().ref("comments");
    const MAX_COUNT = 9;
    db.on("value", snapshot => {
      if (snapshot.numChildren() > MAX_COUNT) {
        let childCount = 0;
        let updates = {};
        snapshot.forEach(child => {
          if (++childCount < snapshot.numChildren() - MAX_COUNT) {
            updates[child.key] = null;
          }
        });
        db.update(updates);
      }
    });
  }
  componentDidMount() {
    const db = firebase.database().ref("comments");

    db.on("value", snapshot => {
      const comments = snapshot.val();
      const arr = [];
      for (const comment in comments) {
        arr.push({
          username: comments[comment].username,
          comment: comments[comment].comment,
          time: comments[comment].time });

      }

      this.setState({
        comments: arr.reverse() });

    });
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "comments-list" },
      this.state.comments.map((comment) => /*#__PURE__*/
      React.createElement(Comment, {
        username: comment.username,
        comment: comment.comment,
        time: comment.time }))));




  }}


const Comment = ({ username, comment, time }) => /*#__PURE__*/
React.createElement("div", { className: "comment" }, /*#__PURE__*/
React.createElement("h4", null, username, " says"), /*#__PURE__*/
React.createElement("p", { className: "timestamp" }, time), /*#__PURE__*/
React.createElement("p", null, comment));



const mountNode = document.getElementById("app");
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), mountNode);

/*
[1] Thank you to Andreas Borgen for this bit:
    https://codepen.io/Sphinxxxx/pen/wjzRKO?editors=0010
[2] Thank you SO:
    https://stackoverflow.com/questions/33887696/how-
    to-delete-all-but-most-recent-x-children-in-a-
    firebase-node
*/