/*
* Prototype  for webkit node app experiment
* Author Moncho Varela ( Nakome );
* Website nakome.com
*/

(function () {

  var weeklyCalendar = function () {

    'use strict';

    return {
      run: function () {
        win();
        init(); //Start
      } };




    // minimize ,maximize demo
    function win() {
      var win_minimize = qS('#minimize'),
      win_maximize = qS('#maximize'),
      win_close = qS('#close');

      win_minimize.addEventListener('click', function (e) {
        e.preventDefault();
        alert('The window is Minimize');
      });
      win_maximize.addEventListener('click', function (e) {
        e.preventDefault();
        alert('The window is Minimize');
      });
      win_close.addEventListener('click', function (e) {
        e.preventDefault();
        alert('The window is Close');
      });
    }



    // init fn
    function init() {
      clock(); // init clock
      // get all textareas id
      for (var i = 1; i < 56; i++) {
        var key = '#id_' + i;
        set(key);
      }
      // show isNow class 10 seconds
      assign();
      var second = 1000;
      setInterval(function () {
        clock(); // init clock update for demo
        assign();
      }, second * 10);

    }

    // short querySelector
    function qS(element) {
      return document.querySelector(element);
    }

    // assign day an hour
    function assign() {
      // array days
      var days = ['sun', 'mon', 'tu', 'we', 'thu', 'fri', 'sat'],
      // get date
      time = new Date(),
      // get num hour
      h = time.getHours(),
      // get day
      n = days[time.getDay()],
      // all elements with data-hour x
      now = document.querySelector('[data-hour="' + h + '"]'),
      // all elements width data-now x - day
      dayNow = document.querySelector('[data-now="' + h + '-' + n + '"]');
      // if now 
      if (now) {
        if (now.classList.contains('isNow')) {
          dayNow.firstChild.classList.remove('isNow');
          now.classList.remove('isNow');
        } else {
          now.classList.add('isNow');
          dayNow.firstChild.classList.add('isNow');
        }
      }
    }

    // show data and on keyup save text of id 
    function set(key) {
      var el = document.querySelector(key);
      el.innerText = localStorage.getItem(el.id);
      el.addEventListener('keyup', function () {
        localStorage.setItem(this.id, this.value);
      }, false);
    }

    //http://stackoverflow.com/questions/18415952/javascript-time-display-am-pm-from-computer-quick-tweak
    function clock() {
      var t = new Date(),
      h = t.getHours(),
      m = t.getMinutes(),
      s = t.getSeconds();
      m = ck(m);
      s = ck(s);
      var hd = h;
      document.getElementById('time').innerHTML = (hd = 0 ? "12" : hd > 12 ? hd - 12 : hd) + ":" + m + ":" + s + " " + (h < 12 ? "AM" : "PM");
      var it = setTimeout(function () {
        clock();
      }, 500);
    }

    function ck(i) {
      if (i < 10) {
        i = "0" + i;
      };
      return i;
    }
  }();

  window.addEventListener('load', weeklyCalendar.run);

})();