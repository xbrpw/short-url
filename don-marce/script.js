const globals = {
    audio: true
}

// Audio
buttonClick = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/Buttonclick.mp3');
featured = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/featured.mp3');
slideSlow = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/slideSlow.mp3');
wrong = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/Wrong.mp3');
bg = new Audio('perfect.mp3');

wrong.volume = 0.2;
// ## Create a function to play our sounds
function playSound(sound) {
    if (globals.audio) {

        sound.play(); // Play sound
    }
}

function playAudio(sound) {

    sound.loop = true;
    sound.volume = 0.7;
    sound.play(); // Play sound

}

$(document).ready(function() {
    setTimeout(function() {
        $('button').animate({ 'opacity': 1 });
    }, 2000)

})

$('.loader').click(function() {
    $('.main_inner__loading').addClass('loaded');
    playAudio(bg);
})

audioSwitch = 0;
sfxSwitch = 0;

$('.options_sf').click(function() {
    if (sfxSwitch == 0) {
        globals.audio = false
        sfxSwitch = 1;
        $(this).css('opacity', '0.4')
    } else {
        globals.audio = true
        sfxSwitch = 0;
        $(this).css('opacity', '1')
    }
});
$('.options_bg').click(function() {
    console.log('test')
    if (audioSwitch == 0) {
        $(bg).animate({ volume: 0 }, 600);
        audioSwitch = 1;
        $(this).css('opacity', '0.4')
    } else {
        $(bg).animate({ volume: 0.7 }, 600);
        audioSwitch = 0;
        $(this).css('opacity', '1')
    }
})

// Quiz options
const sceneDelay = 870; // Scene delay in ms

// Elements
const answers = $('.main_inner__answers');
const answer = answers.find('.answer');
const circle = $('.main_inner__circle');

// Quiz progress
var progress = 1; // Change this to your scene number

// Transition check
var transitioning = false;

// End circle scale
const circleScale = 10;

// Our main array. You must add your details to this.
const scenes = [{
    name: 'akuaku', // Must mirror class name
    author: 'João Santos', // Your name
    codepenprofile: 'jotavejv', // Your Codepen profile link
    twitterprofile: '_jotavejv', // Your Codepen profile link
    answer: 'Crash Bandicoot', // The correct game, we can obfuscate this later if we want to hide answers
    backgroundColor: 'rgb(67, 34, 56)', // Page background color for your scene
    hint: 'UKA UKA is FREEEEE!'
}, {
    name: 'kirby', // Must mirror class name
    author: 'Katherine Kato', // Your name
    codepenprofile: 'kathykato', // Your Codepen profile link
    twitterprofile: 'kato_katherine', // Your Codepen profile link
    answer: 'Kirby', // The correct game, we can obfuscate this later if we want to hide answers
    backgroundColor: 'rgb(218, 68, 103)', // Page background color for your scene
    hint: 'A Nintendo classic'
}, {
    name: 'hexipal', // Must mirror class name
    author: 'Kristopher Van Sant', // Your name
    codepenprofile: 'KristopherVanSant', // Your Codepen profile link
    twitterprofile: 'KristopherVanSant', // Your Codepen profile link
    answer: 'Broken Age', // The correct game, we can obfuscate this later if we want to hide answers
    backgroundColor: '#ea894f', // Page background color for your scene
    hint: 'An animated puzzle adventure'
}, {
    name: 'moogle', // Must mirror class name
    author: 'Jasmine Wright', // Your name
    codepenprofile: 'jnwright', // Your Codepen profile link
    twitterprofile: 'salsaverde', // Your Codepen profile link
    answer: 'Final Fantasy', // The correct game, we can obfuscate this later if we want to hide answers
    backgroundColor: '#3fde9d', // Page background color for your scene
    hint: 'Kupo!'
}, {
    name: 'mario', // Must mirror class name
    author: 'Klara Miffili', // Your name
    codepenprofile: 'miffili', // Your Codepen profile link
    twitterprofile: 'KlaraMiffili', // Your Codepen profile link
    answer: 'Mario Brothers', // The correct game, we can obfuscate this later if we want to hide answers
    backgroundColor: '#fb741e', // Page background color for your scene
    hint: 'Letsa gooooooo!'
}, {
    name: 'buster', // Must mirror class name
    author: 'Jamie Coulter', // Your name
    codepenprofile: 'jcoulterdesign', // Your Codepen profile link
    twitterprofile: 'jamiecoulter89', // Your Codepen profile link
    answer: 'Final Fantsy 7', // The correct game, we can obfuscate this later if we want to hide answers
    backgroundColor: '#4d352f', // Page background color for your scene
    hint: '1997 JRPG for PS1!'
}]

// List of random video games that our JS can pull from, feel free to add your own
const videoGames = [
    'Pong',
    'Zork',
    'Space Invaders',
    'Asteroids',
    'Pac-Man',
    'Defender',
    'Donkey Kong',
    'Frogger',
    'Galaga',
    'Joust',
    'Ms. Pac-Man',
    'Pitfall!',
    'Tetris',
    'Gauntlet',
    'Super Mario Bros.',
    'The Legend of Zelda',
    'Contra',
    'Double Dragon',
    'Grand Theft Auto',
    'Half-Life 2',
    'Katamari Damacy',
    'Metal Gear Solid 3',
    'World of Warcraft',
    'Civilization IV',
    'Devil May Cry 3',
    'God of War',
    'Guitar Hero',
    'Resident Evil 4',
    'Shadow of the Colossus',
    'Tom Clancys Splinter Cell',
    'The Elder Scrolls IV',
    'Gears of War',
    'Ōkami',
    'Spiderman',
    'Tomb Raider',
    'Wii Sports',
    'BioShock',
    'Call of Duty 4: Modern Warfare'
]

// Start by assigning colors and other props to the scene
function setUp() {

    // Lets start by setting the correct colors for our scene
    $('body').css('background', scenes[progress - 1].backgroundColor);
    circle.css('background', scenes[progress].backgroundColor);
    circle.find('.circles').css('background', scenes[progress].backgroundColor);

    // Then fade our first scene in
    $(`.scene:nth-of-type(${progress})`).fadeIn();

    // Loop through the array and add a breadcrum for each
    for (let i in scenes) {
        $('.main_inner__breadcrumbs').append('<div class="breadcrumb"></div>');
    }

    // Set first to active
    $('.breadcrumb:first').addClass('active');

    // Calculate width of breadcrumbs
    let width = ($('.breadcrumb').length - 1) * 34;
    $('.main_inner__breadcrumbs').css('width', width);
}

// Set up initial scene
setUp();

// Initialise scene
function initScene(scene) {

    // Get the next scene from our array
    let nextScene = $('.scene.' + scenes[progress - 1].name);

    // Bring the next scene in
    setTimeout(function() {
        nextScene.fadeIn();
        nextScene.css('bottom', '-400px');
    }, 500);

    // Change info
    $('.main_inner__info span').text(scenes[progress - 1].author);
    $('.main_inner__info .codepen').attr('href', `https://www.codepen.io/${scenes[progress - 1].codepenprofile}`);
    $('.main_inner__info .twitter').attr('href', `https://www.twitter.com/${scenes[progress - 1].twitterprofile}`);

    // Change the hint
    $('.main_inner__title .hint').slideUp(function() {
        $('.main_inner__title .hint').text(scenes[progress - 1].hint);
    });

    // Bring the info in
    setTimeout(function() {
        $('.main_inner__info').css('bottom', '40px');
        $('.main_inner__info').css('opacity', '1');
    }, 700);

    // Clear any data on the answers
    answer.removeData();

    // Let assign the correct answer to one of the available answers

    // Pick a random number between 0 and 2
    let correctAnswer = Math.floor(Math.random() * 3);
    let correctAnswerEl = $(answer[correctAnswer]);

    // Set the text of the answer element
    correctAnswerEl.text(scenes[scene - 1].answer);
    correctAnswerEl.data('correct', true);

    // Select the other answers and if no data set against it, pick a random game
    answer.each(function() {
        let el = $(this);
        if (!el.data('correct')) {

            // Pick a random number between 0 and VG array length
            let rand = Math.floor(Math.random() * (videoGames.length - 1));
            $(this).text(videoGames[rand]);
        }
    });
}

// Check answer
function checkAnswer(el) {
    // If clicked answer has data stored
    if (el.data('correct'))
        return 'correct';
}

$(answer).mouseenter(function() {
    playSound(buttonClick);
});

// Bind answers to check, this should really be passed to another function but meh...
$(answer).click(function() {

    // Lets first scroll to the top of the page incase its mobile
    $("html, body").animate({ scrollTop: 0 }, "fast");

    // Start a transition
    if (!transitioning) {
        transitioning = true; // Check if not mid transition
        if (checkAnswer($(this))) {

            // Play sound
            playSound(featured);

            // Add breadcrumb class
            $('.breadcrumb.active').addClass('correct');

            // Add class to button
            $(this).addClass('correct');

            // Set up feedback message
            $('.main_inner__feedback').removeClass('wrong');
            $('.main_inner__feedback').text('Correct').addClass('correct');
            $('.main_inner__feedback').css('transform', 'translateY(-50%) scale(1) rotate(0deg)');
        } else {
            // Add breadcrumb class
            $('.breadcrumb.active').addClass('wrong');

            playSound(wrong);

            // Add class to button
            $(this).addClass('wrong');

            // Set up feedback message
            $('.main_inner__feedback').removeClass('correct');
            $('.main_inner__feedback').text('Wrong').addClass('wrong');
            $('.main_inner__feedback').css('transform', 'translateY(-50%) scale(1) rotate(0deg)');
        }

        // Move breadcrumb
        $('.breadcrumb.active').removeClass('active').next().addClass('active');

        let currentScene = $('.scene.' + scenes[progress - 1].name);
        console.log(progress)

        currentScene.css('opacity', '0');
        console.log(currentScene)

        $('.main_inner__info').css('bottom', '-50px');
        $('.main_inner__info').css('opacity', '0');

        // Increase our progress in the quiz
        progress++;

        // End screen 
        if (progress == $('.scene').length + 1) {
            $('.main_inner__modalOverlay, .main_inner__modal, .main_inner__modalContent').show();
            $('p.score').html('You got ' + $('.breadcrumb.correct').length + ' out of 5 correct!')
        }

        // Some crazy animations. I've gone a bit nuts on using set timeouts, should really be using delays in CSS
        // So we start by setting the scale of our circle and moving the scene out, CSS transitions does the rest
        setTimeout(function() {
            circle.css('transform', `translateY(-50%) scale(${circleScale})`);
            answer.css('left', '100px')
            answer.css('opacity', '0')
        }, 230);

        // Then after the transition is complete we set the background to the next color in our array
        // Then set the scale of the circle back to 0 (removing any transitions)
        setTimeout(function() {
            $('body').css('background', scenes[progress - 1].backgroundColor);
            circle.css({ 'transform': `translateY(-50%) scale(0)` });
            circle.css({ 'transition-duration': '0ms' })

            // Get some colors based on new bg
            let newHue = LightenDarkenColor(scenes[progress - 1].backgroundColor, 30);
            let newHueInfo = LightenDarkenColor(scenes[progress - 1].backgroundColor, -20);

            // Alter the hue of certain texts to match new bg color
            $('.main_inner__title a').css('color', newHue);
            $('.main_inner__info p').css('color', newHueInfo);
            $('.main_inner__info span').css('color', newHueInfo);



            $('.main_inner__feedback').css('transform', 'translateY(-50%) scale(0) rotate(20deg)');
        }, sceneDelay);

        // Then bring the circle back in and color it to the next bg in the array
        setTimeout(function() {
            answer.removeClass('correct');
            answer.removeClass('wrong');
            if (window.innerWidth > 1000) {
                circle.css({ 'transform': `translateY(-50%) scale(1)` });
            } else {
                circle.css({ 'transform': `translateY(calc(-50% - 110px)) scale(0.6)` });
            }
            circle.css({ 'transition-duration': '500ms' });
            circle.css('background', scenes[progress].backgroundColor);
            circle.find('.circles').css('background', scenes[progress].backgroundColor);
            answer.css('left', '0');
            answer.css('opacity', '1');

            // Set timeout to transition to next scene
            playSound(slideSlow);

            initScene(progress);
            transitioning = false;
        }, sceneDelay + 100);
    }
});

// Show hint
$('.main_inner__title a').click(function() {
    $(this).next().slideToggle();
    return false;
});

// Handle key presses
$(document).keypress(function(event) {
    if (event.charCode == 49) {
        answer[0].click();
    }
    if (event.charCode == 50) {
        answer[1].click();
    }
    if (event.charCode == 51) {
        answer[2].click();
    }
});

// Returns a lightened or darkened version of the passed hex
// Taken from CSS tricks
function LightenDarkenColor(col, amt) {
    var usePound = false;
    if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
    }
    var num = parseInt(col, 16);
    var r = (num >> 16) + amt;
    if (r > 255) r = 255;
    else if (r < 0) r = 0;
    var b = ((num >> 8) & 0x00FF) + amt;
    if (b > 255) b = 255;
    else if (b < 0) b = 0;
    var g = (num & 0x0000FF) + amt;
    if (g > 255) g = 255;
    else if (g < 0) g = 0;
    return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
}

// Initialise the quiz
function initQuiz() {
    initScene(progress);
}


class Grain {
    constructor(el) {
        /**
         * Options
         * Increase the pattern size if visible pattern
         */
        this.patternSize = 150;
        this.patternScaleX = 1;
        this.patternScaleY = 1;
        this.patternRefreshInterval = 3; // 8
        this.patternAlpha = 12; // int between 0 and 255,

        /**
         * Create canvas
         */
        this.canvas = el;
        this.ctx = this.canvas.getContext('2d');
        this.ctx.scale(this.patternScaleX, this.patternScaleY);

        /**
         * Create a canvas that will be used to generate grain and used as a
         * pattern on the main canvas.
         */
        this.patternCanvas = document.createElement('canvas');
        this.patternCanvas.width = this.patternSize;
        this.patternCanvas.height = this.patternSize;
        this.patternCtx = this.patternCanvas.getContext('2d');
        this.patternData = this.patternCtx.createImageData(this.patternSize, this.patternSize);
        this.patternPixelDataLength = this.patternSize * this.patternSize * 4; // rgba = 4

        /**
         * Prebind prototype function, so later its easier to user
         */
        this.resize = this.resize.bind(this);
        this.loop = this.loop.bind(this);

        this.frame = 0;

        window.addEventListener('resize', this.resize);
        this.resize();

        window.requestAnimationFrame(this.loop);
    }

    resize() {
        this.canvas.width = window.innerWidth * devicePixelRatio;
        this.canvas.height = window.innerHeight * devicePixelRatio;
    }

    update() {
        const { patternPixelDataLength, patternData, patternAlpha, patternCtx } = this;

        // put a random shade of gray into every pixel of the pattern
        for (let i = 0; i < patternPixelDataLength; i += 4) {
            // const value = (Math.random() * 255) | 0;
            const value = Math.random() * 255;

            patternData.data[i] = value;
            patternData.data[i + 1] = value;
            patternData.data[i + 2] = value;
            patternData.data[i + 3] = patternAlpha;
        }

        patternCtx.putImageData(patternData, 0, 0);
    }

    draw() {
        const { ctx, patternCanvas, canvas, viewHeight } = this;
        const { width, height } = canvas;

        // clear canvas
        ctx.clearRect(0, 0, width, height);

        // fill the canvas using the pattern
        ctx.fillStyle = ctx.createPattern(patternCanvas, 'repeat');
        ctx.fillRect(0, 0, width, height);
    }

    loop() {
        // only update grain every n frames
        const shouldDraw = ++this.frame % this.patternRefreshInterval === 0;
        if (shouldDraw) {
            this.update();
            this.draw();
        }

        window.requestAnimationFrame(this.loop);
    }
}

function twShare(url, title, winWidth, winHeight) {
    const winTop = 100;
    const winLeft = 100;
    window.open(`https://twitter.com/intent/tweet?text=${title}`, 'sharer', `top=${winTop},left=${winLeft},toolbar=0,status=0,width=${winWidth},height=${winHeight}`);
}

pen_id = $('._pen_id').text();

$('body').on('click', '.share', () => {
    twShare(`https://codepen.io/jcoulterdesign/full/a1b3ea524ead4700015153bb95b881c3`, `I got ${$('.breadcrumb.correct').length} out of 5 questions correct in this quiz by @jamiecoulter89 and others. https://bit.ly/2TLaILc %23cssvideogamequiz`, 520, 350);
    return false;
});

/**
 * Initiate Grain
 */
const el = document.querySelector('.grain');
const grain = new Grain(el);

//$('.main_inner__loading').fadeOut()

initQuiz();

// 8 questions
// Find the mario
// Release screen rec and tweet - 20