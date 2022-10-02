;(function () {
    'use strict';
    const app = angular.module('Pomodoro',['ngMaterial', 'ngAnimate']);

    app.config(function($mdThemingProvider) {
        //config Angular Material theme
        $mdThemingProvider.theme('default')
            .primaryPalette('green')
    });

    app.controller('PomodoroMain', function(TimerFunc) {
        var self = this;

        self.toggleContent = function(showContent) {
            self.displayContent = showContent;
        };

        self.timer = {
            isPause: true,
            isSession: true,
            sessionLength: 22,
            breakLength: 5,
            outTime: 0,
            state: 'Session'
        };

        self.timer.outTime = self.timer.sessionLength * 60;

        self.startTimer = function() {
            TimerFunc.startTimer(self.timer);
        };
        self.stopTimer = function() {
            TimerFunc.stopTimer(self.timer);
        };
        self.resetTimer = function() {
            TimerFunc.resetTimer(self.timer);
        };
        self.save = function() {
            TimerFunc.save(self.timer);
        };
    });

    app.filter('minuteFilter', function () {
        return function (seconds) {
            if (seconds) {
                return Math.floor(seconds / 60);
            }
            return '00';
        }
    });

    app.filter('secondFilter', function () {
        return function (time) {
            let seconds = Math.round(time % 60);
            if (time) {
                return (seconds < 10) ? ('0' + seconds) : seconds;
            }
            if(Math.round(time % 60) < 10) {
                return '0' + seconds;
            }
            return '00';
        }
    });
    /**
     * play mp3 alarm when timer is counted
     */
    app.service('Audio', function () {
        let sound = new buzz.sound("http://www.orangefreesounds.com/wp-content/uploads/2014/10/Family-feud-buzzer", {
            formats: ["mp3"],
            preload: true
        });
        this.playAlarmSound = function(){
            sound.play();
        }
    });
    /**
     * timer logic service, store methods for start,stop, end reset timer
     * $interval - implements seconds counting
     */
    app.service('TimerFunc', function($interval, Audio) {
        let secondTimer;
        let lastCountValue = 0;
        let countValue = 0;
        /**
         * choose what value timer counting. Session, break or memory time(if we stoped timer and the start)
         * @param isSession bool
         * @param sessionLength int
         * @param breakLength int
         * @param lastCountValue int
         * @returns {*}
         */
        function chooseValue(isSession, sessionLength, breakLength,  lastCountValue) {
            if(lastCountValue) {
                return lastCountValue;
            }
            if(isSession) {
                return sessionLength * 60;
            }
            return breakLength * 60;
        }
        /**
         * reset all timer values to default
         * @param timer object
         */
        function resetTimer (timer) {
            timer.isPause = true;
            $interval.cancel(secondTimer);
            lastCountValue = 0;
            timer.outTime = chooseValue(timer.isSession, timer.sessionLength, timer.breakLength, lastCountValue);
        }

        this.startTimer = function(timer){
            //check if already started
            if(!timer.isPause) {
                return
            }
            timer.isPause = false;
            //chose counting value
            countValue =  chooseValue(timer.isSession, timer.sessionLength, timer.breakLength, lastCountValue);
            //create new $interval object for calling function each 1s.
            secondTimer = $interval(function(){
                --countValue;
                // if counted, chose another value for counting, and change state
                if(countValue == 0) {
                    timer.isSession = !timer.isSession;
                    countValue = chooseValue(timer.isSession, timer.sessionLength, timer.breakLength, lastCountValue);
                    timer.state = 'Break';
                    if (timer.isSession) {
                        timer.state = 'Session';
                    }
                    Audio.playAlarmSound();
                }
                timer.outTime = countValue;
            }, 1000);

        };
        /**
         * stop method save counting value in memory, and canceling $interval
         * @param timer object
         */
        this.stopTimer = function(timer){
            timer.isPause = true;
            $interval.cancel(secondTimer);
            lastCountValue = countValue;
        };

        this.resetTimer = resetTimer;
        this.save = resetTimer;
    });

    app.directive('pomodoroClock', function() {
        return {
            restrict: 'E',
            scope: {},
            template: `<md-card>
        <md-toolbar class="md-primary">
            <div class="md-toolbar-tools">
                <h2>
                    <span>Pomodoro Clock</span>
                </h2>
                <span flex=""></span>
                <md-button class="md-icon-button" aria-label="More" ng-click="pomodoroCtrl.toggleContent(!pomodoroCtrl.displayContent)">
                    <i class='fa fa-ellipsis-v fa-2x'></i>
                </md-button>
            </div>
        </md-toolbar>
        <md-card-header class='md-head' layout="column" class='box-one' ng-hide="!pomodoroCtrl.displayContent">


            <md-slider-container layout='row'>
                <h3 flex='20'>Session</h3>
                <md-slider flex="" ng-model="pomodoroCtrl.timer.sessionLength" min="1" max="55" aria-label="red" id="blue-slider" class="md-primary">
                </md-slider>
                <md-input-container>
                    <input flex='' ng-model="pomodoroCtrl.timer.sessionLength"  aria-label="blue" aria-controls="blue-slider" type="text">
                </md-input-container>
            </md-slider-container>

            <md-slider-container layout='row'>
                <h3 flex='20' class="class='md-display-1'">Break</h3>
                <md-slider flex="" ng-model="pomodoroCtrl.timer.breakLength" min="1" max="20" aria-label="green" id="green-slider" class="md-primary">
                </md-slider>
                <md-input-container>
                    <input flex='' ng-model="pomodoroCtrl.timer.breakLength"  aria-label="blue" aria-controls="blue-slider" type="text">
                </md-input-container>
            </md-slider-container>
            <md-button flex='' class= 'md-raised md-primary'  ng-click="pomodoroCtrl.save()">Save</md-button>
            <md-divider></md-divider>
        </md-card-header>

        <md-card-content layout='column' layout-align='start center'>
            <h3 class="md-display-1">{{pomodoroCtrl.timer.state}}</h3>
            <h3 class="md-display-2">{{pomodoroCtrl.timer.outTime | minuteFilter}} : {{pomodoroCtrl.timer.outTime | secondFilter}}</h3>
        </md-card-content>

        <md-divider></md-divider>

        <md-card-content layout='row'  layout-align="space-around stretch">
            <md-button flex='25' class= 'md-raised md-primary' ng-click="pomodoroCtrl.startTimer()">Start</md-button>
            <md-button flex='25' class= 'md-raised md-primary' ng-click="pomodoroCtrl.stopTimer()">Stop</md-button>
            <md-button flex='25' class= 'md-raised md-warn'  ng-click="pomodoroCtrl.resetTimer()">Reset</md-button>
        </md-card-content>
    </md-card>`,
            controller: 'PomodoroMain',
            controllerAs: 'pomodoroCtrl'
        }
    })
})();