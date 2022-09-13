Vue.component('single-note', {
  template: '#single-note',
  props: ['allNotes'],
  data: function() {
    return {
      // Search Key
      searchKey: this.getParam('s'),
      // Temporary IDs
      currentID: -2,
      editId: -1,
      idToCopy: -1,
      
      // Transitions
      opened: false,
      
      // Confirm Delete
      confrim: '',
      
      // Edit Mode
      edit: false,
      
      // Expand
      idToExpand: -1,
      expanded: false,
    }
  },
  methods: {
    // To-Do Storage
    todoFetch: function () {
      var notes = JSON.parse(localStorage.getItem('notes') || '[]');
      //console.log(notes);
      return notes;
    },
    todoSave: function(notes) {
      localStorage.setItem('notes', JSON.stringify(notes));
    },
    modifiedText: function(id) {
      var detectLinks = /((https?:\/\/)(\S+))/g;
      var detectLinksWWW = /(((www\.))(\S+))/g;
      var detecthash = /#(\S+)/g;
      if (this.allNotes[id].text.match(detectLinks) || this.allNotes[id].text.match(detecthash)) {
        return this.allNotes[id].text.replace(detectLinks, '<a href="$1" target="_black">$1</a>').replace(detectLinksWWW, '<a href="http://$1" target="_black">$1</a>').replace(detecthash, '<a href=?s=$1>#$1</a>');
      } else {
        return this.allNotes[id].text;
      }
      
    },
    copyLink: function(id) {
      var copiedNote = this.allNotes[id];
      
      var theNote = JSON.stringify(copiedNote);
      theNote = encodeURIComponent(theNote);
      
      var theLink = location.href.replace('index.html', '').replace(location.search, '') + 'share.html?note=' + theNote;
      this.idToCopy = id;
      
      setTimeout(function(){
        this.idToCopy = -1;
      }.bind(this), 1200);
      
      function copyToClipboard(text){
        var dummy = document.createElement("input");
        document.body.appendChild(dummy);
        dummy.setAttribute('value', text);
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);
      }
      
      //alert(theLink);
      copyToClipboard(theLink);
    },
    
    // Toggle The Effect
    toggleTransition: function(id) {
      if (id >= 0) {
        this.currentID = id;
      } else if (id == -1) {
        this.currentID = -1;
      }
      
      if (this.opened == false) {
        this.opened = true;
      } else {
        this.currentID = -2;
        this.opened = false;
      }
    },
    // Note Processes
    deleteNote: function(id) {
      this.confirm = confirm("Are You Sure You Want To Delete It ?");
      if (this.confirm) {
        this.allNotes.splice(id, 1);
        this.todoSave(this.allNotes);
      }
    },
    changeColor: function(id, color) {
      this.allNotes[id].color = color;
      this.todoSave(this.allNotes);
      this.currentID = -2;
      this.opened = false;
    },
    editNote: function(i) {
      this.edit = true;
      this.editId = i;
    },
    updateNote: function(id, note) {
      note.date = this.noteDate;
      if (note.text.length > 106) {
        note.long = true;
      } else {
        note.long = false;
      }
      this.allNotes[id] = note;
      this.todoSave(this.allNotes);
      this.editId = -1;
      this.edit = false;
    },
    expandNote: function(id) {
      if (this.expanded == false) {
        this.idToExpand = id;
        this.expanded = true;
      } else {
        this.expanded = false;
        this.idToExpand = -1;
      }
    },
    finishTask: function(id) {
      if (this.allNotes[id].completed == false) {
        this.allNotes[id].completed = true;
      } else {
        this.allNotes[id].completed = false;
      }
      this.todoSave(this.allNotes);
    },
    // Define a function to get link parameter
    getParam: function (query) {
      var param = {};
      var link = window.location.search;
      link = link.replace('?', '');
      var divide = link.split('&').forEach(function(variable){
        var half = variable.split('=');
        param[half[0]] = half[1];
      });
      
      if (param[query]) {
        return param[query];
      } else {
        return '';
      }
    }
  }
})
Vue.component('shared-note', {
  template:'#shared-note',
  computed: {
    sharedNote: function() {
      // Detect Links
      var detectLinks = /((https?:\/\/)(\S+))/g;
      var detectLinksWWW = /(((www\.))(\S+))/g;
      
      if (this.getParam('note')) {
        var shared = JSON.parse(decodeURIComponent(this.getParam('note')));
        shared.text = shared.text.replace(detectLinks, '<a href="$1" target="_black">$1</a>').replace(detectLinksWWW, '<a href="http://$1" target="_black">$1</a>');
        return shared;
      } else {
        window.location.href = 'index.html';
      }
    }
  },
  methods: {
    // Define a function to get link parameter
    getParam: function (query) {
      var param = {};
      var link = window.location.search;
      link = link.replace('?', '');
      var divide = link.split('&').forEach(function(variable){
        var half = variable.split('=');
        param[half[0]] = half[1];
      });
      
      if (param[query]) {
        return param[query];
      } else {
        return '';
      }
    }
  }
})
Vue.component('sticky-notes', {
  template: '#sticky-notes',
  data: function () {
    return {
      theNotes: this.todoFetch(),
      // The Note Props
      noteTitle: '',
      noteColor: 'white',
      noteText: '',
      
      // Transitions
      opened: false,
      
      // Temporary IDs
      currentID: -2,
      editId: -1,
      idToCopy: -1,
    }
  },
  computed: {
    // Define The Date
    todayDate: function() {
      var d = new Date();
      var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      var today = d.getDate() + ' ' + months[d.getMonth()] + ', ' + d.getFullYear();
      
      return today;
    },
    
    // Check if the note is longer than 106 letters
    longNote: function() {
      if (this.noteText.length > 106) {
        return true;
      } else {
        return false;
      }
    },
    
    // Collect Note Data
    newNote: function() {
      return {
        id: (this.theNotes.length+1),
        title: this.noteTitle,
        date: this.todayDate,
        text: this.noteText,
        color: this.noteColor,
        long: this.longNote,
        completed: false
      }
    }
  },
  methods: {
    // Toggle The Effect
    toggleTransition: function(id) {
      if (id >= 0) {
        this.currentID = id;
      } else if (id == -1) {
        this.currentID = -1;
      }
      
      if (this.opened == false) {
        this.opened = true;
      } else {
        this.currentID = -2;
        this.opened = false;
      }
    },
    // To-Do Storage
    todoFetch: function () {
      var notes = JSON.parse(localStorage.getItem('notes') || '[]');
      //console.log(notes);
      return notes;
    },
    todoSave: function(notes) {
      //console.log(JSON.stringify(notes));
      localStorage.setItem('notes', JSON.stringify(notes));
    },
    insertNote: function () {
      if (this.noteTitle !== '' && this.noteText !== '') {
        this.theNotes.push(this.newNote);
        this.todoSave(this.theNotes);
        
        // Remove!
        this.noteTitle = '';
        this.noteText = '';
        this.noteColor = '#fff';
      }
    }
  }
})

// Define a function to get link parameter
function getParam(query) {
  var param = {};
  var link = window.location.search;
  link = link.replace('?', '');
  var divide = link.split('&').forEach(function(variable){
    var half = variable.split('=');
    param[half[0]] = half[1];
  });
  
  if (param[query]) {
    return param[query];
  } else {
    return '';
  }
}


var addNote = new Vue({
  data: {
    isHashtag: getParam('s')
  }
}).$mount('#app');