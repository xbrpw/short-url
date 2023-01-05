;
(function(window, undefined) {

    'use strict';

    var AudioPlayer = (function() {

        // Player vars
        var
            player = document.getElementById('ap'),
            playBtn,
            prevBtn,
            nextBtn,
            plBtn,
            repeatBtn,
            volumeBtn,
            progressBar,
            preloadBar,
            curTime,
            durTime,
            trackTitle,
            audio,
            index = 0,
            playList,
            volumeBar,
            volumeLength,
            repeating = false,
            seeking = false,
            rightClick = false,
            apActive = false,
            // playlist vars
            pl,
            plLi,
            // settings
            settings = {
                volume: .1,
                autoPlay: true,
                notification: false,
                playList: []
            };

        function init(options) {

            if (!('classList' in document.documentElement)) {
                return false;
            }

            if (apActive || player === null) {
                return;
            }

            settings = extend(settings, options);

            // get player elements
            playBtn = player.querySelector('.ap-toggle-btn');
            prevBtn = player.querySelector('.ap-prev-btn');
            nextBtn = player.querySelector('.ap-next-btn');
            repeatBtn = player.querySelector('.ap-repeat-btn');
            volumeBtn = player.querySelector('.ap-volume-btn');
            plBtn = player.querySelector('.ap-playlist-btn');
            curTime = player.querySelector('.ap-time--current');
            durTime = player.querySelector('.ap-time--duration');
            trackTitle = player.querySelector('.ap-title');
            progressBar = player.querySelector('.ap-bar');
            preloadBar = player.querySelector('.ap-preload-bar');
            volumeBar = player.querySelector('.ap-volume-bar');

            playList = settings.playList;

            playBtn.addEventListener('click', playToggle, false);
            volumeBtn.addEventListener('click', volumeToggle, false);
            repeatBtn.addEventListener('click', repeatToggle, false);

            progressBar.parentNode.parentNode.addEventListener('mousedown', handlerBar, false);
            progressBar.parentNode.parentNode.addEventListener('mousemove', seek, false);
            document.documentElement.addEventListener('mouseup', seekingFalse, false);

            volumeBar.parentNode.parentNode.addEventListener('mousedown', handlerVol, false);
            volumeBar.parentNode.parentNode.addEventListener('mousemove', setVolume);
            document.documentElement.addEventListener('mouseup', seekingFalse, false);

            prevBtn.addEventListener('click', prev, false);
            nextBtn.addEventListener('click', next, false);


            apActive = true;

            // Create playlist
            renderPL();
            plBtn.addEventListener('click', plToggle, false);

            // Create audio object
            audio = new Audio();
            audio.volume = settings.volume;



            if (isEmptyList()) {
                empty();
                return;
            }

            audio.src = playList[index].file;
            audio.preload = 'auto';
            trackTitle.innerHTML = playList[index].title;
            volumeBar.style.height = audio.volume * 100 + '%';
            volumeLength = volumeBar.css('height');

            audio.addEventListener('error', error, false);
            audio.addEventListener('timeupdate', update, false);
            audio.addEventListener('ended', doEnd, false);

            if (settings.autoPlay) {
                audio.play();
                playBtn.classList.add('playing');
                plLi[index].classList.add('pl-current');
            }
        }

        /**
         *  PlayList methods
         */
        function renderPL() {
            var html = [];
            var tpl =
                '<li data-track="{count}">' +
                '<div class="pl-number">' +
                '<div class="pl-count">' +
                '<i class="fa fa-download"></i>' +
                '</div>' +
                '<div class="pl-playing">' +
                '<div class="eq">' +
                '<div class="eq-bar"></div>' +
                '<div class="eq-bar"></div>' +
                '<div class="eq-bar"></div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="pl-title">{title}</div>' +

                '</li>';

            playList.forEach(function(item, i) {
                html.push(
                    tpl.replace('{count}', i).replace('{title}', item.title)
                );
            });

            pl = create('div', {
                'className': 'pl-container hide',
                'id': 'pl',
                'innerHTML': !isEmptyList() ? '<ul class="pl-list">' + html.join('') + '</ul>' : '<div class="pl-empty">PlayList esta vacia</div>'
            });

            player.parentNode.insertBefore(pl, player.nextSibling);

            plLi = pl.querySelectorAll('li');

            pl.addEventListener('click', listHandler, false);
        }

        function listHandler(evt) {
            evt.preventDefault();
            if (evt.target.className === 'pl-title') {
                var current = parseInt(evt.target.parentNode.getAttribute('data-track'), 10);
                index = current;
                play();
                plActive();
            } else {
                var target = evt.target;
                while (target.className !== pl.className) {
                    if (target.className === 'pl-remove') {
                        var isDel = parseInt(target.parentNode.getAttribute('data-track'), 10);

                        playList.splice(isDel, 1);
                        target.parentNode.parentNode.removeChild(target.parentNode);

                        plLi = pl.querySelectorAll('li');

                        [].forEach.call(plLi, function(el, i) {
                            el.setAttribute('data-track', i);
                        });

                        if (!audio.paused) {

                            if (isDel === index) {
                                play();
                            }

                        } else {
                            if (isEmptyList()) {
                                empty();
                            } else {
                                // audio.currentTime = 0;
                                audio.src = playList[index].file;
                                document.title = trackTitle.innerHTML = playList[index].title;
                                progressBar.style.width = 0;
                            }
                        }
                        if (isDel < index) {
                            index--;
                        }

                        return;
                    }
                    target = target.parentNode;
                }

            }
        }

        function plActive() {
            if (audio.paused) {
                plLi[index].classList.remove('pl-current');
                return;
            }
            var current = index;
            for (var i = 0, len = plLi.length; len > i; i++) {
                plLi[i].classList.remove('pl-current');
            }
            plLi[current].classList.add('pl-current');
        }


        /**
         *  Player methods
         */
        function error() {
            !isEmptyList() && next();
        }

        function play() {

            index = (index > playList.length - 1) ? 0 : index;
            if (index < 0) index = playList.length - 1;

            if (isEmptyList()) {
                empty();
                return;
            }

            audio.src = playList[index].file;
            audio.preload = 'auto';
            document.title = trackTitle.innerHTML = playList[index].title;
            audio.play();
            notify(playList[index].title, {
                icon: playList[index].icon,
                body: 'Now playing',
                tag: 'music-player'
            });
            playBtn.classList.add('playing');
            plActive();
        }

        function prev() {
            index = index - 1;
            play();
        }

        function next() {
            index = index + 1;
            play();
        }

        function isEmptyList() {
            return playList.length === 0;
        }

        function empty() {
            audio.pause();
            audio.src = '';
            trackTitle.innerHTML = 'queue is empty';
            curTime.innerHTML = '--';
            durTime.innerHTML = '--';
            progressBar.style.width = 0;
            preloadBar.style.width = 0;
            playBtn.classList.remove('playing');
            pl.innerHTML = '<div class="pl-empty">PlayList esta vacia</div>';
        }

        function playToggle() {
            if (isEmptyList()) {
                return;
            }
            if (audio.paused) {
                audio.play();
                notify(playList[index].title, {
                    icon: playList[index].icon,
                    body: 'Now playing'
                });
                this.classList.add('playing');
            } else {
                audio.pause();
                this.classList.remove('playing');
            }
            plActive();
        }

        function volumeToggle() {
            if (audio.muted) {
                if (parseInt(volumeLength, 10) === 0) {
                    volumeBar.style.height = '100%';
                    audio.volume = 1;
                } else {
                    volumeBar.style.height = volumeLength;
                }
                audio.muted = false;
                this.classList.remove('muted');
            } else {
                audio.muted = true;
                volumeBar.style.height = 0;
                this.classList.add('muted');
            }
        }

        function repeatToggle() {
            var repeat = this.classList;
            if (repeat.contains('ap-active')) {
                repeating = false;
                repeat.remove('ap-active');
            } else {
                repeating = true;
                repeat.add('ap-active');
            }
        }

        function plToggle() {
            this.classList.toggle('ap-active');
            pl.classList.toggle('hide');
        }

        function update() {
            if (audio.readyState === 0) return;

            var barlength = Math.round(audio.currentTime * (100 / audio.duration));
            progressBar.style.width = barlength + '%';

            var
                curMins = Math.floor(audio.currentTime / 60),
                curSecs = Math.floor(audio.currentTime - curMins * 60),
                mins = Math.floor(audio.duration / 60),
                secs = Math.floor(audio.duration - mins * 60);
            (curSecs < 10) && (curSecs = '0' + curSecs);
            (secs < 10) && (secs = '0' + secs);

            curTime.innerHTML = curMins + ':' + curSecs;
            durTime.innerHTML = mins + ':' + secs;

            var buffered = audio.buffered;
            if (buffered.length) {
                var loaded = Math.round(100 * buffered.end(0) / audio.duration);
                preloadBar.style.width = loaded + '%';
            }
        }

        function doEnd() {
            if (index === playList.length - 1) {
                if (!repeating) {
                    audio.pause();
                    plActive();
                    playBtn.classList.remove('playing');
                    return;
                } else {
                    index = 0;
                    play();
                }
            } else {
                index = (index === playList.length - 1) ? 0 : index + 1;
                play();
            }
        }

        function moveBar(evt, el, dir) {
            var value;
            if (dir === 'horizontal') {
                value = Math.round(((evt.clientX - el.offset().left) + window.pageXOffset) * 100 / el.parentNode.offsetWidth);
                el.style.width = value + '%';
                return value;
            } else {
                var offset = (el.offset().top + el.offsetHeight) - window.pageYOffset;
                value = Math.round((offset - evt.clientY));
                if (value > 100) value = 100;
                if (value < 0) value = 0;
                volumeBar.style.height = value + '%';
                return value;
            }
        }

        function handlerBar(evt) {
            rightClick = (evt.which === 3) ? true : false;
            seeking = true;
            seek(evt);
        }

        function handlerVol(evt) {
            rightClick = (evt.which === 3) ? true : false;
            seeking = true;
            setVolume(evt);
        }

        function seek(evt) {
            if (seeking && rightClick === false && audio.readyState !== 0) {
                var value = moveBar(evt, progressBar, 'horizontal');
                audio.currentTime = audio.duration * (value / 100);
            }
        }

        function seekingFalse() {
            seeking = false;
        }

        function setVolume(evt) {
            volumeLength = volumeBar.css('height');
            if (seeking && rightClick === false) {
                var value = moveBar(evt, volumeBar.parentNode, 'vertical') / 100;
                if (value <= 0) {
                    audio.volume = 0;
                    volumeBtn.classList.add('muted');
                } else {
                    if (audio.muted) audio.muted = false;
                    audio.volume = value;
                    volumeBtn.classList.remove('muted');
                }
            }
        }

        function notify(title, attr) {
            if (!settings.notification) {
                return;
            }
            if (window.Notification === undefined) {
                return;
            }
            window.Notification.requestPermission(function(access) {
                if (access === 'granted') {
                    var notice = new Notification(title.substr(0, 110), attr);
                    notice.onshow = function() {
                            setTimeout(function() {
                                notice.close();
                            }, 5000);
                        }
                        // notice.onclose = function() {
                        //   if(noticeTimer) {
                        //     clearTimeout(noticeTimer);
                        //   }
                        // }
                }
            })
        }

        /* Destroy method. Clear All */
        function destroy() {
            if (!apActive) return;

            playBtn.removeEventListener('click', playToggle, false);
            volumeBtn.removeEventListener('click', volumeToggle, false);
            repeatBtn.removeEventListener('click', repeatToggle, false);
            plBtn.removeEventListener('click', plToggle, false);

            progressBar.parentNode.parentNode.removeEventListener('mousedown', handlerBar, false);
            progressBar.parentNode.parentNode.removeEventListener('mousemove', seek, false);
            document.documentElement.removeEventListener('mouseup', seekingFalse, false);

            volumeBar.parentNode.parentNode.removeEventListener('mousedown', handlerVol, false);
            volumeBar.parentNode.parentNode.removeEventListener('mousemove', setVolume);
            document.documentElement.removeEventListener('mouseup', seekingFalse, false);

            prevBtn.removeEventListener('click', prev, false);
            nextBtn.removeEventListener('click', next, false);

            audio.removeEventListener('error', error, false);
            audio.removeEventListener('timeupdate', update, false);
            audio.removeEventListener('ended', doEnd, false);
            player.parentNode.removeChild(player);

            // Playlist
            pl.removeEventListener('click', listHandler, false);
            pl.parentNode.removeChild(pl);

            audio.pause();
            apActive = false;
        }


        /**
         *  Helpers
         */
        function extend(defaults, options) {
            for (var name in options) {
                if (defaults.hasOwnProperty(name)) {
                    defaults[name] = options[name];
                }
            }
            return defaults;
        }

        function create(el, attr) {
            var element = document.createElement(el);
            if (attr) {
                for (var name in attr) {
                    if (element[name] !== undefined) {
                        element[name] = attr[name];
                    }
                }
            }
            return element;
        }

        Element.prototype.offset = function() {
            var el = this.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            return {
                top: el.top + scrollTop,
                left: el.left + scrollLeft
            };
        };

        Element.prototype.css = function(attr) {
            if (typeof attr === 'string') {
                return getComputedStyle(this, '')[attr];
            } else if (typeof attr === 'object') {
                for (var name in attr) {
                    if (this.style[name] !== undefined) {
                        this.style[name] = attr[name];
                    }
                }
            }
        };


        /**
         *  Public methods
         */
        return {
            init: init,
            destroy: destroy
        };

    })();

    window.AP = AudioPlayer;

})(window);


// test image for web notifications
var iconImage = '⮋';

AP.init({
    playList: [
        { 'icon': iconImage, 'title': ' Go Go Power Rangers', 'file': 'https://luisangelmaciel.github.io/pokerangers/ringtone/Go-Go-Power-Rangers.mp3' },
        { 'icon': iconImage, 'title': ' Pikachu', 'file': 'https://luisangelmaciel.github.io/pokerangers/ringtone/pikachu.mp3' },
        { 'icon': iconImage, 'title': ' Comunicador de los Power Rangers', 'file': 'https://luisangelmaciel.github.io/pokerangers/ringtone/Comunicador-de-los-Power-Rangers.mp3' },
        { 'icon': iconImage, 'title': ' Llamada', 'file': 'https://luisangelmaciel.github.io/pokerangers/ringtone/Llamada.mp3' },
        { 'icon': iconImage, 'title': ' Mighty Morphin Power Rangers', 'file': 'https://luisangelmaciel.github.io/pokerangers/ringtone/Mighty-Morphin-Power-Rangers.mp3' },
        { 'icon': iconImage, 'title': ' Pokeball Abriendose', 'file': 'https://luisangelmaciel.github.io/pokerangers/ringtone/Pokeball-Abriendose.mp3' },
        { 'icon': iconImage, 'title': ' Putty Power Rangers', 'file': 'https://luisangelmaciel.github.io/pokerangers/ringtone/Putty-Power-Rangers.mp3' },
        { 'icon': iconImage, 'title': ' Dragonzord call versión piano', 'file': 'https://luisangelmaciel.github.io/pokerangers/ringtone/Dragonzord-en-piano.mp3' },
        { 'icon': iconImage, 'title': ' Pokémon Opening Atrapalos Ya -  Instrumental  con Coros Pikachu', 'file': 'https://luisangelmaciel.github.io/pokerangers/ringtone/Opening-Atrapalos-Ya-Instrumental-con-Coros.mp3' },
        { 'icon': iconImage, 'title': ' Pokeball Capturando', 'file': 'https://luisangelmaciel.github.io/pokerangers/ringtone/Pokeball-Capturando.mp3' },
        { 'icon': iconImage, 'title': ' Dragon Ranger Burai Zyusouken', 'file': 'https://luisangelmaciel.github.io/pokerangers/ringtone/Dragon-Ranger-Burai-Zyusouken.mp3' },

        { 'icon': iconImage, 'title': ' Go go Power Ranger - largo  -  Instrumental  con Coros Pikachu', 'file': 'https://luisangelmaciel.github.io/pokerangers/ringtone/go-go.m4a' },
        { 'icon': iconImage, 'title': ' Comunicador - corto', 'file': 'https://luisangelmaciel.github.io/pokerangers/ringtone/comunicador.m4a' },
        { 'icon': iconImage, 'title': ' Pikachu una vez', 'file': 'https://luisangelmaciel.github.io/pokerangers/ringtone/pickachu-tierno.m4a' },
        { 'icon': iconImage, 'title': 'Go Go Power Rangers', 'file': 'https://luisangelmaciel.github.io/pokerangers/ringtone/Go-Go-Power-Rangers.mp3 '},
        { 'icon': iconImage, 'title': 'Abcdefu', 'file': 'https://www.xbr.pw/mp3/Abcdefu%20en%20español%20Karla%20Vásquez%20Video%20Visual.mp3 '},
        { 'icon': iconImage, 'title': 'Quizás', 'file': 'https://www.xbr.pw/mp3/Agoney%20Quizás.mp3 '},
        { 'icon': iconImage, 'title': 'En el coche', 'file': 'https://www.xbr.pw/mp3/Aitana%20En%20El%20Coche.mp3 '},
        { 'icon': iconImage, 'title': 'Quieres', 'file': 'https://www.xbr.pw/mp3/Aitana%20Emilia%20Ptazeta%20Quieres%20Video%20Oficial.mp3 '},
        { 'icon': iconImage, 'title': 'En el coche', 'file': 'https://www.xbr.pw/mp3/Aitana%20En%20El%20Coche%20instrumental%20Aitana.mp3 '},
        { 'icon': iconImage, 'title': 'Million Dollar Baby', 'file': 'https://www.xbr.pw/mp3/Ava%20Max%20Million%20Dollar%20Baby%20David%20Penn%20Remix%20Official%20Audio.mp3 '},
        { 'icon': iconImage, 'title': 'Million Dollar Baby', 'file': 'https://www.xbr.pw/mp3/Ava%20max%20Million%20Dollar%20Baby%20Feat%20Ariana%20Grande%20Nicki%20Minaj%20.mp3 '},
        { 'icon': iconImage, 'title': 'Million Dollar Baby', 'file': 'https://www.xbr.pw/mp3/Ava%20Max%20Million%20Dollar%20Baby%20Instrumental.mp3 '},
        { 'icon': iconImage, 'title': 'Million Dollar Baby', 'file': 'https://www.xbr.pw/mp3/Ava%20Max%20Million%20Dollar%20Baby%20MarkBeat%20Remix.mp3 '},
        { 'icon': iconImage, 'title': 'Million Dollar Baby', 'file': 'https://www.xbr.pw/mp3/Ava%20Max%20Million%20Dollar%20Baby.mp3 '},
        { 'icon': iconImage, 'title': 'Billboard Hot 100', 'file': 'https://www.xbr.pw/mp3/Billboard%20Hot%20100.mp3 '},
        { 'icon': iconImage, 'title': 'I Really Like You', 'file': 'https://www.xbr.pw/mp3/Carly%20Rae%20Jepsen%20I%20Really%20Like%20You.mp3 '},
        { 'icon': iconImage, 'title': 'Friend De Semana', 'file': 'https://www.xbr.pw/mp3/Danna%20Paola%20Luísa%20Sonza%20Aitana%20Friend%20De%20Semana.mp3 '},
        { 'icon': iconImage, 'title': 'Cool for the Summer', 'file': 'https://www.xbr.pw/mp3/Demi%20Lovato%20Cool%20for%20the%20Summer%20Official%20Video.mp3 '},
        { 'icon': iconImage, 'title': 'Demo Audio 2', 'file': 'https://www.xbr.pw/mp3/Demo%20Audio%202.mp3 '},
        { 'icon': iconImage, 'title': 'Dreams', 'file': 'https://www.xbr.pw/mp3/dreams.mp3 '},
        { 'icon': iconImage, 'title': 'Greatest Hits', 'file': 'https://www.xbr.pw/mp3/DuaLipa%20Greatest%20Hits%202022.mp3 '},
        { 'icon': iconImage, 'title': 'Shadow Ring ', 'file': 'https://www.xbr.pw/mp3/Eevee%20Ringtone%20SMS%20Ringtone%20Alarm%20Ringtone%20(%20Shadow%20Ring%20).m4a '},
        { 'icon': iconImage, 'title': 'Shadow Ring ', 'file': 'https://www.xbr.pw/mp3/Eevee-%20Ringtone.m4a '},
        { 'icon': iconImage, 'title': 'Evolution', 'file': 'https://www.xbr.pw/mp3/evolution.mp3 '},
        { 'icon': iconImage, 'title': 'Perfect World', 'file': 'https://www.xbr.pw/mp3/Gossip%20Perfect%20World%20Video.mp3 '},
        { 'icon': iconImage, 'title': 'GotJoy', 'file': 'https://www.xbr.pw/mp3/GotJoy.mp3 '},
        { 'icon': iconImage, 'title': 'La Bachata', 'file': 'https://www.xbr.pw/mp3/La%20Bachata%20Manuel%20Turizo%20Bad%20Bunny%20Becky%20G%20KAROL%20G%20LetraLyrics.mp3 '},
        { 'icon': iconImage, 'title': 'Lovely Day', 'file': 'https://www.xbr.pw/mp3/Lovely%20Day.wav '},
        { 'icon': iconImage, 'title': 'Momentum', 'file': 'https://www.xbr.pw/mp3/Momentum.mp3 '},
        { 'icon': iconImage, 'title': 'Natural', 'file': 'https://www.xbr.pw/mp3/Paty%20Cantú%20Juhn%20Natural.mp3 '},
        { 'icon': iconImage, 'title': 'Physical Dua Lipa', 'file': 'https://www.xbr.pw/mp3/Physical%20Dua%20Lipa%20Violin%20Cover%20by%20Alan%20Milan.mp3 '},
        { 'icon': iconImage, 'title': 'Pop en español 2022', 'file': 'https://www.xbr.pw/mp3/pop-es-2022.mp3 '},
        { 'icon': iconImage, 'title': 'Malamente', 'file': 'https://www.xbr.pw/mp3/ROSALÍA%20MALAMENTE%20Cap1%20Augurio.mp3 '},
        { 'icon': iconImage, 'title': 'La fama', 'file': 'https://www.xbr.pw/mp3/ROSALÍA%20x%20The%20Weeknd%20LA%20FAMA%20LetraLyrics.mp3 '},
        { 'icon': iconImage, 'title': 'Get The Party Started', 'file': 'https://www.xbr.pw/mp3/Shirley%20Bassey%20Get%20The%20Party%20Started%20Official%20Video.mp3 '},
        { 'icon': iconImage, 'title': 'Unstoppable', 'file': 'https://www.xbr.pw/mp3/Sia%20Unstoppable%20Lyrics%20Adele%20John%20Legend%20Christina%20Perri%20.mp3 '},
        { 'icon': iconImage, 'title': 'SpeechLab', 'file': 'https://www.xbr.pw/mp3/SpeechLab_13-09-22_13-48-48-823.wav '},
        { 'icon': iconImage, 'title': 'The Motto', 'file': 'https://www.xbr.pw/mp3/Tiësto%20Ava%20Max%20The%20Motto%20Official%20Music%20Video.mp3 '},
        { 'icon': iconImage, 'title': 'No Se Me Ve Tan Mal NSMVTM', 'file': 'https://www.xbr.pw/mp3/Ventino%20No%20Se%20Me%20Ve%20Tan%20Mal%20NSMVTM%20Video%20Oficial.mp3 '},
        { 'icon': iconImage, 'title': 'Vo', 'file': 'https://www.xbr.pw/mp3/vocodes_60e6c63b-89ec-4b99-9e14-a3750bd502d3.wav '},
        { 'icon': iconImage, 'title': 'Vo', 'file': 'https://www.xbr.pw/mp3/vocodes_9096af88-636b-4291-9734-7d247031b1f2.wav '},
        { 'icon': iconImage, 'title': 'Télefono', 'file': 'https://www.xbr.pw/mp3/instrumental/Aitana%20Teléfono%20AG%20Ameca%20Instrumental%20Remake.mp3 '}



    ]
});