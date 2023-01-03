//This variable will keep references to the gradient when dynamically created
var gradient;

//references to requestAnimationFrame - so we can stop it
var raf;

//active ring in the gradient
//the first ring in gradient is: --color1 (the center of the circle), and the last one is: ring_last
var ring = 1;

//the references of the max number of the ring in gradient
var ring_last;

//define the width of the individual ring in Radial gradient
var offset = 40;

//color to fill the gradient at the beginning
var semi_transparent_color = "rgba(194, 135, 25, 0.26)";

//I use this variable to dynamically change the color to the active ring 
var hue;

//switch that determines whether the hover has been terminated by the user (true)
var hoverStop;

var wrapper = document.getElementById('wrapper');
var btn = document.querySelector(".badge");


function createGradiant() {
    var gradientSyntax = "";
    ring_last = Math.ceil(wrapper.clientWidth / offset / 2) + 5;

    gradient = document.createElement("div");
    gradient.setAttribute("class", "gradient");
    wrapper.insertAdjacentElement('afterbegin', gradient);
    
    //In this loop, we create the syntax for Radial gradient
    //The syntax for the first and last ring is created separately (because the syntax is slightly different for them)
    for (var i = 1; i < ring_last + 1; i++) {
        if (i === 1) {           //for first ring
            gradientSyntax = gradientSyntax + "var(--color" + i + ") " + offset + "px,";
            continue; 
        }
        //for all other rings
        gradientSyntax = gradientSyntax + " var(--color" + i + ") " + offset * (i - 1) + "px " + offset * i + "px,";

        if (i === ring_last) {   //for last ring
            gradientSyntax = gradientSyntax + " var(--color" + i + ") " + offset * (i - 1) + "px " + offset * i + "px)";
            break; 
        }
    }
    gradient.style.background = "radial-gradient(circle at 50% 45%, " + gradientSyntax;

    //paint gradient with the desired color (all the rings at the same time)
    paintingGradient(semi_transparent_color);
    
    //determine how much time it takes for an animateOut to complete the first cycle 
    document.querySelector(".badge").style.setProperty("--timeOffset", ring_last * 62 + "ms");
}
createGradiant(); 


function paintingGradient(color) {
    for (var i = 1; i < ring_last + 1; i++) {
        gradient.style.setProperty("--color" + Number(i), color);
    }
}


window.addEventListener('resize', function () {
    wrapper.removeChild(gradient);
    createGradiant();
}, false);


btn.addEventListener("mouseenter", function () {
    window.cancelAnimationFrame(raf); //stops the execution already started animation

    //repainting the effect that has remained after the previous animation
    paintingGradient(semi_transparent_color)

    //reset values
    ring = 2;
    hoverStop = false;
    hue = 20 

    //starting animateOut every 62ms (1000 / 16 = 62ms), using requestAnimateFrame
    Timer(animateOut, 16);
}, false);


btn.addEventListener("mouseleave", function () {
    hoverStop = true;
    //stopping the already started animation (animateOut), to trigger the same only this time with fast execution time (25ms)
    window.cancelAnimationFrame(raf);
    Timer(animateOut, 40); 
}, false);


function animateOut() {
    for (var i = 1; i < ring_last + 1; i++) {
        //painting the active ring
        if (i === ring) gradient.style.setProperty("--color" + Number(i), "hsla(" + hue + ", 100%, 50%, .6)");
        //all other rings behind the active are painted in transparent
        else if (i < ring + 1) gradient.style.setProperty("--color" + Number(i), "transparent");
    }
    ring++; 
    hue = hue + 2;
    
    //when the active ring reaches the last one
    if (ring === ring_last + 1) {
        ring = 1; 
        hue = 20;

        //If hover ended up under the influence of the user
        if (hoverStop) {
            window.cancelAnimationFrame(raf);
            ring = ring_last;

            //starting animateIn every 50ms (1000 / 20 = 50ms), using requestAnimateFrame
            Timer(animateIn, 20);
        }
    }
}


function animateIn() {
    for (var i = ring_last; i > 0; i--) {
        //painting the active ring
        if (i === ring) gradient.style.setProperty("--color" + Number(i), "hsla(" + hue + ", 100%, 50%, .5)");
        
        //first three rings next to the active one, are painting slightly differently 
        else if (i === ring + 1) gradient.style.setProperty("--color" + Number(i), "hsla(" + hue + ", 100%, 50%, .4)");
        else if (i === ring + 2) gradient.style.setProperty("--color" + Number(i), "hsla(" + hue + ", 100%, 50%, .3)");
        else if (i === ring + 3) gradient.style.setProperty("--color" + Number(i), "hsla(" + hue + ", 100%, 50%, .2)");

        //all other rings before the active are painted in: semi_transparent_color
        else if (i > ring) gradient.style.setProperty("--color" + Number(i), semi_transparent_color);
    }
    ring--;
    hue = hue + 2;
    //when the active ring reaches the first one
    if (ring === 0) window.cancelAnimationFrame(raf);
}


//This function is used to slow down the execution of requestAnimationFrames to desired time (thank you, stackoverflow)
var Timer = function (callback, fps) {
    var now = 0;
    var delta = 0;
    var then = Date.now();
    var frames = 0;
    var oldtime = 0;
    fps = 1000 / (this.fps || fps || 60);

    return requestAnimationFrame(function loop(time) {
        raf = requestAnimationFrame(loop);
        now = Date.now();
        delta = now - then;

        if (delta > fps) {
            // Update time stuffs
            then = now - (delta % fps);

            // Calculate the frames per second.
            frames = 1000 / (time - oldtime)
            oldtime = time;

            // Call the callback-function and pass our current frame into it.
            callback(frames);
        }
    });
};