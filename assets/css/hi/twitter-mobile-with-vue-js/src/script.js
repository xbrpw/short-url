const tweets = [
   {
    name: 'Jaden Smith',
    userImage: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/jaden_twitter_profile.jpg',
    handle: '@officialjaden',
    verified: true,
    timeLapsed: '5m',
    description: `I'm The Youngest In The Board Meeting Like Bruce Wayne.`,
    likes: 1256,
    upVoted: false
   },
   {
    name: 'Drizzy',
    userImage: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/drizzy_twitter.png',
    handle: '@Drake',
    verified: true,
    timeLapsed: '15m',
    description: `With your phone out, gotta hit them angles. With your phone out, snappin' like you Fabo. And you showin' off, but it's alright. #NiceForWhat`,
    tweetImage: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/nice_for_what.jpeg',
    likes: 4586,
    upVoted: false
   },
   {
    name: 'Hassan Djirdeh',
    userImage: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/me-formal.jpg',
    handle: '@djirdehh',
    timeLapsed: '1h',
    description: 'That feeling when summer is right around the corner ☀️. #TorontoSkyline',
    tweetImage: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/toronto_skyline.jpg',
    likes: 36,
    upVoted: false
   },
   {
    name: 'Pup',
    userImage: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/pug_personal.jpg',
    handle: '@pupp',
    timeLapsed: '2h',
    description: 'Mood...',
    tweetImage: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/puppers.jpg',
    likes: 22,
    upVoted: false
   },
   {
    name: 'HDJ',
    userImage: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/me_3.jpg',
    handle: '@socleansofreshh',
    timeLapsed: '1h',
    description: 'When the bassline drops... you know what to do.',
    likes: 59,
    upVoted: false
   },
]

Vue.component('tweet-component', {
  template:
  `
    <div class="tweet">
      <article class="media">
          <figure class="media-left">
            <p class="image is-64x64">
              <img class="user-image" :src="tweet.userImage">
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>{{tweet.name}}</strong>
                <img class="verified-icon"
                     src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/twitter_verified.png"
                     v-if="tweet.verified" />
                <small>{{tweet.handle}}</small>
                <small class="time-lapsed">{{tweet.timeLapsed}}</small>
                <br>
                <span class="description" v-html="computedDescription"></span>
              </p>
            </div>
            <div v-if="tweet.tweetImage" class="tweet-image">
              <img :src="tweet.tweetImage" />
            </div>
            <nav class="level is-mobile">
              <div class="level-left">
                <a class="level-item">
                  <span class="icon is-small"><i class="far fa-comment"></i></span>
                </a>
                <a class="level-item">
                  <span class="icon is-small"><i class="fas fa-retweet"></i></span>
                </a>
                <a class="level-item heart" @click="like">
                  <span class="icon is-small">
                    <i class="far fa-heart"
                       :class="{'fas': this.tweet.upVoted}"></i>
                  </span>
                  <p :class="{'bold': this.tweet.upVoted}">
                    {{new Intl.NumberFormat().format(tweet.likes)}}
                  <p>
                </a>
              </div>
            </nav>
          </div>
        </article>
    </div>
  `,
  props: ['tweet'],
  computed: {
    computedDescription() {
      return this.tweet.description.split(' ').map((word) => {
        if (word[0] === '@' || word[0] === '#') {
          word = `<span class="highlighted">${word}</span>`;
        }
        return word;
      }).join(' ');
    }
  },
  methods: {
    like() {
      this.tweet.upVoted ? this.tweet.likes-- : this.tweet.likes++;
      this.tweet.upVoted = !this.tweet.upVoted;
    }
  }
});

new Vue({
  el: "#app",
  data: {
    tweets,
    image: '',
    description: '',
    step: null,
    showDetails: false,
    fileInput: ''
  },
  created() {
    setTimeout(() => {
      this.step = 1;
    }, 1000);
  },
  methods: {
    fileUpload(e) {
      const files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.image = files[0];
      this.createImage();
    },
    createImage() {
      const image = new Image();
      const reader = new FileReader();

      reader.onload = e => {
        this.image = e.target.result;
        this.step = 2;
      };
      reader.readAsDataURL(this.image);
    },
    uploadRandomImage() {
      const randomImages = [
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/twitter_mobile.png',
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/cn-tower.jpg',
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/prism-goggles-at-concert.jpg',
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/working-at-night.jpg',
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/busy-beach.jpg',
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/grand-canyon.jpg',
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/carnival-lights-at-dusk.jpg'
      ];
      
      this.image = randomImages[Math.floor(Math.random() * randomImages.length)];
      this.step = 2;
    },
    goToHome() {
      this.image = '';
      this.description = '';
      this.step = 1;
      
      this.$nextTick(() => {
        const feed = document.getElementById('feed');
        if (feed) feed.scrollTop = 0;
      });
    },
    shareTweet() {
      const tweet = {
        name: 'CodePen.IO',
        userImage: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/codepen_logo.png',
        handle: '@CodePen',
        timeLapsed: '1m',
        tweetImage: this.image,
        description: this.description,
        likes: 0,
        upVoted: false,
      }
      
      this.tweets.unshift(tweet);
      this.goToHome();
    }
  }
});
