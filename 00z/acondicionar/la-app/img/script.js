const config = {
  apiKey: "AIzaSyAPP9Js01jxtkbuQ054dwEjUCFxiWZ-qUA",
  authDomain: "comments2-d8467.firebaseapp.com",
  databaseURL: "https://comments2-d8467.firebaseio.com",
  projectId: "comments2-d8467",
  storageBucket: "comments2-d8467.appspot.com",
  messagingSenderId: "758696721485" };

firebase.initializeApp(config);

new Vue({
  el: '#app',
  data: {
    username: '',
    comment: '',
    comments: [] },

  methods: {
    handleSubmit() {
      const user = {
        username: this.escapeHTML(this.username),
        comment: this.escapeHTML(this.comment),
        time: this.formatTime(),
        likedCount: 0 };


      const db = firebase.database().ref('comments');
      db.push(user);

      this.username = '';
      this.comment = '';
    },
    escapeHTML(html) {// [1]
      const div = document.createElement('div');
      div.textContent = html;
      return div.innerHTML;
    },
    formatTime() {
      const options = {
        month: '2-digit',
        day: '2-digit',
        year: '2-digit',
        hour: '2-digit',
        minute: '2-digit' };

      let now = new Date().toLocaleString('en-US', options);
      return now;
    } },

  beforeMount() {// [2]
    const db = firebase.database().ref('comments');
    const MAX_COUNT = 9;

    db.on('value', snapshot => {
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
  },
  mounted() {
    const db = firebase.database().ref('comments');

    db.on('value', snapshot => {
      const comments = snapshot.val();
      const arr = [];
      for (const comment in comments) {
        arr.push({
          username: comments[comment].username,
          comment: comments[comment].comment,
          time: comments[comment].time });

      };

      this.comments = arr.reverse();
    });
  } });


// ==========================================================
// [1] Thank you to Andreas Borgen for this bit:
//     https://codepen.io/Sphinxxxx/pen/wjzRKO?editors=0010
// [2] Thank you SO:
//     https://stackoverflow.com/questions/33887696/how-
//     to-delete-all-but-most-recent-x-children-in-a-
//     firebase-node
// ==========================================================