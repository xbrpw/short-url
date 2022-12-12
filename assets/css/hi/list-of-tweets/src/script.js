const tweets = [
  {
    id: 1,
    name: 'James',
    handle: '@james',
    img: 'https://www.shareicon.net/data/128x128/2016/09/01/822711_user_512x512.png',
    tweet: 'Puppy kitty ipsum dolor sit good dog tigger good boy furry teeth purr lazy cat run fast fish critters string.',
    user_type: 'public'
  },
  {
    id: 2,
    name: 'Jessica',
    handle: '@jessica',
    img: 'https://www.shareicon.net/data/128x128/2016/09/01/822739_user_512x512.png',
    tweet: 'Wag Tail tuxedo run bedding head chew food purr drool kisses carrier chirp toy ID tag slobbery smooshy.',
    user_type: 'public',
  },
  {
    id: 3,
    name: 'Heather',
    handle: '@heather',
    img: 'https://www.shareicon.net/data/128x128/2016/09/01/822761_user_512x512.png',
    tweet: 'Rover maine coon cat speak harness whiskers mouse.',
    user_type: 'public',
  },
  {
    id: 4,
    name: 'Arthur',
    handle: '@arthur',
    img: 'https://www.shareicon.net/data/128x128/2016/09/01/822745_user_512x512.png',
    tweet: 'Toys stay finch polydactyl stay barky bark pet supplies food Buddy chirp Spike nap stick dog house throw.Tail collar leash Rover meow catch Scooby snacks.',
    user_type: 'friend',
  },
  {
    id: 5,
    name: 'Francesca',
    handle: '@francesca',
    img: 'https://www.shareicon.net/data/128x128/2016/09/01/822715_user_512x512.png',
    tweet: 'Kitty bark string shake litter box toys polydactyl yawn polydactyl scratcher water dog stay cage nest slobber chirp water.',
    user_type: 'friend',
  },
  {
    id: 6,
    name: 'Tina',
    handle: '@tina',
    img: 'https://www.shareicon.net/data/128x128/2016/09/01/822726_user_512x512.png',
    tweet: 'Birds fur collar fluffy collar parakeet barky dog house run sit Buddy purr. Bird wag tail small animals groom vitamins Tigger.',
    user_type: 'friend',
  }
]

Vue.component('tweet-component', {
  template:  `
    <div class="tweet">
      <div class="box">
        <article class="media">
          <div class="media-left">
            <figure class="image">
              <img :src="tweet.img">
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p><strong>{{tweet.name}}</strong> <small>{{tweet.handle}}</small></p>
              <p>{{tweet.tweet}}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
    `,
  props: {
    tweet: Object
  }
});

new Vue({
  el: '#app',
  data: {
    tweets,
    user_type: 'all',
  },
  methods: {
    update_source: function(user_type){
				this.user_type = user_type;
        console.log(user_type);
			}
  }
});