/*
*	Sample tag
*	<header id="rand-images">
*        Random
*      Backgrounds
*	</header>
*
*
*/
var randomImages = (function(){
  'use strict';
  return{
    init: function(){
      this.events();// init events
    },
    events: function(){
      /* random images snippet*/
      var images = [
        'https://www.luisangelmaciel.one/img/modelos%2016.webp',
        'https://www.luisangelmaciel.one/img/modelos%2017.webp',
        'https://www.luisangelmaciel.one/img/modelos%2018.webp',
        'https://www.luisangelmaciel.one/img/og-image.png'
      ];
      // create style tag in head
      var s = document.createElement('style');
      // add id
      s.id = 'random-Img';
      // type css
      s.type = 'text/css';
      // append in head
      document.head.appendChild(s);
      // math random
      var r = images[Math.floor(Math.random() * images.length)];
      // add into style
      s.textContent = '#rand-images{background:url('+r+') no-repeat center center fixed #eee;background-size:cover;-moz-background-size:cover;}';
    }
  };
})();
// Ready for the war
randomImages.init();