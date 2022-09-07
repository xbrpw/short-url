$(document).ready(function() {

    window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
        window.setTimeout(callback, 1000 / 60);
    };

    var settings = {
        slideSpeed: 800,
        rate: 100,
        life: .1,
        distance: 1.2,
        rotate: 240,
        angle: 240,
        speed: 50,
        speedSec: 10,
        size: 1,
        sizeSec: .4,
        colorStart: [0, 0, 0, 1],
        colorEnd: [0, 0, 0, 0]
    };

    var Particle = function(x, y, angle, speed, life, size, colorStart, colorStep) {

        this.pos = {
            x: x || 0,
            y: y || 0
        };
        this.speed = speed || 5;
        this.life = life || 1;
        this.size = size || 2;
        this.lived = 0;

        var radians = angle * Math.PI / 180;

        this.vel = {
            x: Math.cos(radians) * speed,
            y: -Math.sin(radians) * speed
        };

        this.color = colorStart;
        this.colorStep = colorStep;
    };

    var Emitter = function(x, y, settings) {
        this.pos = {
            x: x,
            y: y
        };
        this.settings = settings;
        this.emission_delay = 1000 / settings.rate;
        this.last_update = 0;
        this.last_emission = 0;
        this.particles = [];
    };

    Emitter.prototype.update = function(ctx) {

        if(!this.last_update) {
            this.last_update = Date.now();
            return;
        }

        var time = Date.now();
        var dt = time - this.last_update;

        this.last_emission += dt;
        this.last_update = time;

        if(this.last_emission > this.emission_delay) {
            var i = Math.floor(this.last_emission / this.emission_delay);
            this.last_emission -= i * this.emission_delay;
            while (i--) {
                var colorStart = this.settings.colorStart;
                var colorEnd = this.settings.colorEnd;
                var life = this.settings.life + Math.random() * this.settings.distance;
                var colorStep = [
                    (colorEnd[0] - colorStart[0]) / life,
                    (colorEnd[1] - colorStart[1]) / life,
                    (colorEnd[2] - colorStart[2]) / life,
                    (colorEnd[3] - colorStart[3]) / life
                ];
                this.particles.push(
                    new Particle(0, 0, this.settings.rotate + Math.random() * this.settings.angle, this.settings.speed + Math.random() * this.settings.speedSec, life, this.settings.size + Math.random() * this.settings.sizeSec, colorStart.slice(), colorStep)
                );
            }
        }

        dt /= 1000;

        var i = this.particles.length;

        while (i--) {

            var particle = this.particles[i];

            if(particle.dead) {
                this.particles.splice(i, 1);
                continue;
            }

            particle.lived += dt;

            if (particle.lived >= particle.life) {
                particle.dead = true;
                continue;
            }

            particle.pos.x += particle.vel.x * dt;
            particle.pos.y += particle.vel.y * dt;

            particle.color[0] += particle.colorStep[0] * dt;
            particle.color[1] += particle.colorStep[1] * dt;
            particle.color[2] += particle.colorStep[2] * dt;
            particle.color[3] += particle.colorStep[3] * dt;

            ctx.fillStyle = 'rgba(' + Math.round(particle.color[0]) + ',' + Math.round(particle.color[1]) + ',' + Math.round(particle.color[2]) + ',' + particle.color[3] + ')';

            var x = this.pos.x + particle.pos.x;
            var y = this.pos.y + particle.pos.y;

            ctx.beginPath();
            ctx.arc(x, y, particle.size, 0, Math.PI * 2);
            ctx.fill();

        }

    };

    function loop(ctx, emitter) {
        ctx.clearRect(0, 0, 200, 200);
        emitter.update(ctx);
        requestAnimFrame(function() {
            loop(ctx, emitter);
        });
    }

    $.fn.slideFadeToggle  = function(speed, easing, callback) {
        return this.animate({opacity: 'toggle', height: 'toggle'}, speed, easing, callback);
    };

    $('.deleteList li .delete').on('click', function(e) {

        var self = $(this);
        var li = self.parent();
        var span = $('<span />');

        span.text(li.children('.item').text());

        li.children('.item').html(span);

        self.addClass('active');

        setTimeout(function() {

            var canvas = $('<canvas />');

            li.children('.item').append(canvas);

            canvas = canvas[0];

            var ctx = canvas.getContext('2d');

            canvas.width = 200;
            canvas.height = 200;

            var emitter = new Emitter(canvas.width / 2, canvas.height / 2, settings);

            loop(ctx, emitter);

            li.children('.item').addClass('slide');
            li.children('.item').children('span').animate({
                width: 0
            }, settings.slideSpeed, function() {
                li.children('.item').addClass('hide');
                setTimeout(function() {
                    li.slideFadeToggle(300, function() {
                        li.remove();
                    });
                }, 300);
            });

        }, 100);

    });

});