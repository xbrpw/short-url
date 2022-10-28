/*
 *	Sample tag
 *	<header id="rand-images">
 *        Random
 *      Backgrounds
 *	</header>
 *
 *
 */
var randomImages = (function() {
    'use strict';
    return {
        init: function() {
            this.events(); // init events
        },
        events: function() {
            /* random images snippet*/
            var images = [
                'https://tinyurl.com/moalryp',
                'https://tinyurl.com/ovh8jdz',
                'https://tinyurl.com/lezrd4y',
                'https://tinyurl.com/krmp6cz'
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
            s.textContent = '#rand-images{background:url(' + r + ') no-repeat center center fixed #eee;background-size:cover;-moz-background-size:cover;}';
        }
    };
})();
// Ready for the war
randomImages.init();