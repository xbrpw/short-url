new Vue({
  el: '#list-complete-demo',
  data: {
    items: [
      { id: 1, tags: ['all', 'tag1'] },
      { id: 2, tags: ['all', 'tag2'] },
      { id: 3, tags: ['all', 'tag2'] },
      { id: 4, tags: ['all', 'tag1'] },
      { id: 5, tags: ['all', 'tag1'] },
      { id: 6, tags: ['all', 'tag2'] },
      { id: 7, tags: ['all', 'tag1'] },
      { id: 8, tags: ['all', 'tag2'] },
      { id: 9, tags: ['all', 'tag2'] }
    ],
    currentTag: 'all'
  },
  computed: {
    filteredItems: function() {
      var filter = this.currentTag;
      return this.items.filter(function(item) {
          return item.tags.indexOf(filter) !== -1;
      });
    }
  },
  methods: {
    shuffle: function () {
      this.items = _.shuffle(this.items)
    },
    filter: function(tag) {
      this.currentTag = tag;
    }
  }
})