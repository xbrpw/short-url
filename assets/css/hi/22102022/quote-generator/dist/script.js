// APP
const vue = new Vue({
  el: '#app',
  data: {
    apiURL: 'https://api.forismatic.com/api/1.0/',
    apiParams: '?method=getQuote&lang=en&format=jsonp&jsonp=?',
    isfetching: false,

    quoteBlock: '',
    quoteAuthor: '' },

  methods: {
    processQuote(data) {
      this.quoteBlock = data.quoteText;
      this.quoteAuthor = data.quoteAuthor || 'Unknown Author';
      this.quoteAnim();
    },

    fetchQuote(data) {
      let self = this;
      $.getJSON(this.apiURL + this.apiParams, data => {
        self.processQuote(data);
        self.isfetching = false;
      });
    },

    newQuote() {
      if (this.isfetching) return;
      this.isfetching = true;

      // ANIM: quoteHide()
      const quoteHide = anime.timeline();
      quoteHide.
      add({
        targets: ['figure', 'button'],
        easing: 'easeOutSine',
        translateY: 100,
        duration: 1250,
        opacity: 0 });


      setTimeout(this.fetchQuote, 1250);
    },

    quoteAnim() {
      // ANIM: quoteShow()
      const quoteShow = anime.timeline();
      quoteShow.
      add({
        targets: 'figure',
        easing: 'easeOutExpo',
        duration: 1000,
        translateY: [-200, 0],
        opacity: 1 }).

      add({
        targets: 'button',
        easing: 'easeOutQuint',
        delay: 2000,
        duration: 2000,
        translateY: [-50, 0],
        opacity: 1,
        offset: '-=900' });


      // ANIM: quoteSlideIn()
      const quoteSlideIn = anime.timeline();

      quoteSlideIn.
      add({
        targets: '.quote__before',
        easing: 'easeOutExpo',
        delay: 500,
        duration: 5000,
        opacity: [0, 1],
        translateX: [-200, 0] }).

      add({
        targets: '.quote__after',
        easing: 'easeOutExpo',
        duration: 5000,
        opacity: [0, 1],
        translateY: [100, 0],
        offset: '-=5000' });


      // ANIM: quoteAuthorIn()
      const quoteAuthorIn = anime.timeline();

      quoteAuthorIn.
      add({
        targets: '.caption__line',
        easing: 'easeOutSine',
        translateX: [-100, 0],
        delay: 1000,
        duration: 1000 }).

      add({
        targets: 'figcaption p',
        easing: 'easeOutSine',
        translateY: [100, 0],
        duration: 1000,
        offset: '-=500' });

    } },


  computed: {
    splitQuote() {
      return this.quoteBlock.replace(/([^\s]+)/g, "<span class='word'>$&</span>");
    } },


  watch: {
    splitQuote() {
      // ANIM: quoteWordIn()
      const wordDuration = (el, i, l) => {
        let j = i === 0 ? 1 : i + 1; // I do this b/c weird bug with i = 0
        let length = $(el).text().length;
        return 750 * j - length * l;
      };

      const wordDelay = (el, i, l) => {
        let length = $(el).text().length;
        return 200 * i - length * l / 2;
      };

      $('blockquote').css('opacity', 0);
      setTimeout(() => {
        $('blockquote').css('opacity', 1);
        anime({
          targets: '.word',
          easing: 'easeOutQuart',
          opacity: [0, 1],
          translateY: [25, 0],
          duration: wordDuration,
          delay: wordDelay });
      }, 300);
    } },


  mounted() {
    this.newQuote();
  } });