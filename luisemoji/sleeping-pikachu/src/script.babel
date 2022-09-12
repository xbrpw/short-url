TweenMax.set("svg", { visibility: "visible",y:50 });
TweenMax.set("#ball", { x: 30 });
TweenMax.set("#ballShadow", { x: 30 });
TweenMax.set("#lightning path", { drawSVG: "0%" });

const ballEase = CustomEase.create(
  "custom",
  "M0,0 C0,0.258 0.566,0.945 0.694,1.07 0.804,1.178 0.888,1.084 0.888,1.084 0.888,1.084 0.944,1.034 1,1"
);

const lEase = CustomEase.create(
  "custom",
  "M0,0,C0,0.688,0,1,0.5,1,1,1,1,0.692,1,0"
);
const bgEase = CustomEase.create(
  "custom",
  "M0,0 C0.073,0.144 0.156,0.796 0.528,1 0.834,0.8 0.944,0.062 1,0"
);

const eyeOpenPath =
  "M296.601,252.022c5.532,0,10.016,4.485,10.016,10.016s-4.484,7.016-10.016,7.016s-10.016-1.484-10.016-7.016S291.069,252.022,296.601,252.022z";
const eyeAnnoyedPath =
  "M296.601,252.022c5.532,0,10.016,4.485,10.016,10.016s-4.928,0.918-10.46,0.918s-9.573,4.614-9.573-0.918S291.069,252.022,296.601,252.022z";
const mouthAngryPath = "M253.164,301.979c9.506-0.563,13.444,4.778,15.329,9.148";
const eyeClosedPath =
  "M296.601,252.022c5.532,0,10.016,4.485,10.016,10.016s-4.484,10.016-10.016,10.016s-10.016-4.484-10.016-10.016S291.069,252.022,296.601,252.022z";

const rollBall = () => {
  const tl = new TimelineMax();
  tl
    .to(
      "#ball",
      0.75,
      {
        rotation: -40,
        x: 22,
        transformOrigin: "center center",
        ease: ballEase
      },
      "roll"
    )
    .to(
      "#ballShadow",
      0.75,
      {
        x: 26,
        ease: ballEase
      },
      "roll"
    )
    .to(
      "#ball",
      0.75,
      {
        x: 30,
        ease: ballEase
      },
      "roll+=.75"
    )
    .to(
      "#ballShadow",
      0.75,
      {
        x: 30,
        ease: ballEase
      },
      "roll+=0.75"
    )
    .to(
      "#ball",
      0.75,
      {
        rotation: 0,
        ease: ballEase
      },
      "roll+=0.75"
    );
  tl.timeScale(0.6);
};
// breathe
const breatheTl = new TimelineMax({
  repeat: -1
});
breatheTl
  .to(
    "#body",
    1,
    {
      scaleY: 1.03,
      transformOrigin: "center bottom",
      ease: Sine.easeInOut
    },
    0
  )
  .to(
    "#tail",
    1,
    {
      x: 2.5,
      rotation: -3,
      transformOrigin: "left center",
      ease: Sine.easeInOut
    },
    0
  )
  .to(
    "#earR",
    1,
    {
      x: -2,
      rotation: -4,
      ease: Sine.easeInOut
    },
    0
  )
  .to(
    "#earR",
    1,
    {
      x: 0,
      rotation: 0
    },
    1.1
  )
  .to(
    "#earL",
    1,
    {
      x: -2,
      rotation: -2,
      ease: Power1.easeInOut
    },
    0
  )
  .to(
    "#earL",
    1,
    {
      x: 0,
      rotation: 0
    },
    1
  )
  .to(
    "#body",
    1,
    {
      scaleY: 1,
      transformOrigin: "center bottom",
      ease: Sine.easeInOut
    },
    1.25
  )
  .to(
    "#tail",
    1,
    {
      x: 0,
      rotation: 0,
      ease: Sine.easeInOut
    },
    1.25
  )
  .to(
    "#mouth",
    1,
    {
      rotation: 4,
      x: -1,
      y: -1,
      transformOrigin: "center bottom",
      ease: Power1.easeInOut
    },
    0
  )
  .to(
    "#mouth",
    1,
    {
      rotation: 0,
      x: 0,
      y: 0,
      transformOrigin: "center bottom",
      ease: Back.easeInOut.config(2)
    },
    1.28
  )
  .to(
    "#nose",
    1,
    {
      rotation: 7,
      x: 1,
      y: -2,
      transformOrigin: "center top",
      ease: Power2.easeInOut
    },
    0
  )
  .to(
    "#nose",
    1,
    {
      rotation: 0,
      x: 0,
      y: 0,
      transformOrigin: "center top",
      ease: Back.easeInOut.config(4)
    },
    1.28
  )
  .add(rollBall, 1.68);

// Clouds
const cloudRGroup = document.querySelector("#cloudR");
const cloudLGroup = document.querySelector("#cloudL");
const cloudsR = document.querySelectorAll("#cloudR circle");
const cloudsL = document.querySelectorAll("#cloudL circle");
const cloudBubbles = document.querySelectorAll("#cloudBubbles circle");
TweenMax.set(cloudBubbles, {
  scale: 0,
  opacity: 0,
  transformOrigin: "center center"
});
TweenMax.set(cloudsR, {
  scale: 0,
  opacity: 0,
  transformOrigin: "center center"
});
TweenMax.set(cloudsL, {
  scale: 0,
  opacity: 0,
  transformOrigin: "center center"
});
// Cloud objects inside mask
TweenMax.set("#apple", { opacity: 0, transformOrigin: "center center" });
TweenMax.set("#ketchup", {
  x: 60,
  opacity: 0,
  transformOrigin: "center center"
});

// food in tl
const foodInTl = new TimelineMax({ paused: true });

foodInTl
  .set("#apple", { opacity: 1 })
  .to("#apple", 0.4, { x: -60, y: 5, ease: Power3.easeIn }, 0.8);

const foodTl = new TimelineMax({ repeat: -1, paused: true, repeatDelay: 0.4 });
foodTl
  .fromTo(
    "#ketchup",
    0.4,
    { x: 60, y: 5 },
    { scale: 1, x: 0, y: 0, opacity: 1, ease: Power3.easeIn }
  )
  .to("#ketchup", 0.4, { x: -60, y: 5, ease: Power3.easeIn }, 1.2)
  .fromTo(
    "#apple",
    0.4,
    { x: 60, y: 5, immediateRender: false },
    { scale: 1, x: 0, y: 0, opacity: 1, ease: Power3.easeIn },
    1.8
  )
  .to("#apple", 0.4, { x: -60, y: 5, ease: Power3.easeIn }, 3.2);

const animateClouds = () => {
  for (let i = 0; i < cloudsR.length - 1; i++) {
    const tl = new TimelineMax({ repeat: -1 });
    let delayT = i * 0.05;
    tl
      .to(
        cloudsR[i],
        0.25,
        { scale: 1.12, ease: Linear.easeNone, delay: delayT },
        "in"
      )
      .to(
        cloudsR[i],
        0.25,
        { scale: 1, ease: Linear.easeNone, delay: delayT },
        "out"
      )
      .to(
        cloudsL[i],
        0.25,
        { scale: 1.12, ease: Linear.easeNone, delay: delayT },
        "in"
      )
      .to(
        cloudsL[i],
        0.25,
        { scale: 1, ease: Linear.easeNone, delay: delayT },
        "out"
      );
  }
};

const animateCloudTl = new TimelineMax({ repeat: -1, paused: true });
animateCloudTl
  .to(
    cloudRGroup,
    0.3,
    { scale: 1.05, transformOrigin: "center center", ease: Linear.easeNone },
    "in"
  )
  .to(
    cloudLGroup,
    0.3,
    { scale: 1.05, transformOrigin: "center center", ease: Linear.easeNone },
    "in"
  )
  .to(
    cloudRGroup,
    0.3,
    { scale: 1, transformOrigin: "center center", ease: Linear.easeNone },
    "out"
  )
  .to(
    cloudLGroup,
    0.3,
    { scale: 1, transformOrigin: "center center", ease: Linear.easeNone },
    "out"
  );

const cloudTl = new TimelineMax({ delay: 0 });

cloudTl
  .staggerTo(
    cloudBubbles,
    0.4,
    { scale: 1, opacity: 1, ease: Back.easeOut.config(3) },
    0.1,
    "in"
  )
  .staggerTo(
    cloudsL,
    0.3,
    { scale: 1, opacity: 1, ease: Back.easeOut.config(4) },
    0.07,
    "in+=0.30"
  )
  .staggerTo(
    cloudsR,
    0.3,
    { scale: 1, opacity: 1, ease: Back.easeOut.config(4) },
    0.07,
    "in+=0.50"
  )
  .add(animateClouds, "in+=0.86")
  .add(animateCloudTl.play(), "in+=0.86")
  .add(foodInTl.play(), "in+=0.62")
  .add(foodTl.play(), "in+=2.12");

const restartCloudsTl = () => {
  const tl = new TimelineMax();

  tl
    .staggerFromTo(
      cloudBubbles,
      0.4,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, ease: Back.easeOut.config(3) },
      0.1,
      "in"
    )
    .staggerFromTo(cloudsL,0.3,{opacity:0,scale:0},{opacity:1,scale:1,ease:Back.easeOut.config(4)},0.07,'in+=0.2')
    .staggerFromTo(cloudsR,0.3,{opacity:0,scale:0},{opacity:1,scale:1,ease:Back.easeOut.config(4)},0.07,"in+=0.4")
    .set("#foodGroup", { opacity: 1 }, "in+=0.5")
    .add(foodTl.play(), "in+=0.8");
};
// masterTl
const masterTl = new TimelineMax();

masterTl.add(breatheTl.play(), 0);

let clickCount = 0;
let playing = false;

document.querySelector("#pika").addEventListener("click", () => {
  if (clickCount < 2 && playing === false) {
    clickCount++;
    playing = true;
    const tl = new TimelineMax({
      onComplete: () => {
        playing = false;
      }
    });
    tl
      .to(
        "#eye",
        0.4,
        { y: -2, scaleY: 0.95, transformOrigin: "center bottom" },
        "open"
      )
      .to("#eyeLid", 0.4, { attr: { d: eyeOpenPath } }, "open")
      .to("#iris", 0.4, { x: 1, y: 4 }, "open")
      .to(
        "#eye",
        0.4,
        { y: 0, scaleY: 1, transformOrigin: "center bottom" },
        "move"
      )
      .to("#iris", 0.26, { x: 5 }, "move")
      .to("#iris", 0.26, { x: 1 }, "move+=0.45")
      .to("#eyeLid", 0.4, { attr: { d: eyeClosedPath } });
  }
  if (clickCount >= 2 && playing === false) {
    clickCount++;
    playing = true;
    // STOP CLOUDS/FOOD TL
    TweenMax.set("#cloudGroup", {
      opacity: 0,
      onComplete: () => {
        cloudTl.stop();
      }
    });
    TweenMax.set("#foodGroup", { opacity: 0 });
    TweenMax.set("#apple", { opacity: 0 });

    // Light it up
    const lightningTl = new TimelineMax({
      onComplete: () => {
        const tl = new TimelineMax({});
        tl
          .set(
            "#lightning path",
            { drawSVG: "0%", opacity: 1, strokeWidth: 0 },
            "in"
          )
          .to("#eyeLid", 0.3, { attr: { d: eyeClosedPath } }, "in+=0.3")
          .set("#iris", { x: 0, y: 4 }, "in+=0.75")

          .set(
            "#cloudGroup",
            {
              opacity: 1,
              onComplete: () => {
                restartCloudsTl();
              }
            },
            "in+=0.75"
          );

        playing = false;
        clickCount = 0;
      }
    });

    lightningTl
      // animatie path length 
      .staggerTo(
        "#lightning path",
        0.25,
        { drawSVG: "25% 100%", opacity: 1, strokeWidth: 2 },
        0.01,
        "in"
      )
      .to(
        "#lightning path",
        0.1,
        { drawSVG: "50% 75%", ease: Linear.easeNone },
        "in+=0.4"
      )
      // animate lightning path opacity
      .to(
        "#lightning path",
        0.1,
        { opacity: 0, ease: bgEase, repeat: 3 },
        "in+=0.15"
      )
      .to("#lightning path", 0.1, { opacity: 0 }, "in+=0.6")
      // scale lightning path
      .to(
        "#lightning path",
        0.3,
        { scale: 1.25, transformOrigin: "center center" },
        "in"
      )
      .to(
        "#lightning path",
        0.3,
        { scale: 1, transformOrigin: "center center" },
        "in+=0.7"
      )
      // morph eyelid path
      .to("#eyeLid", 0.3, { attr: { d: eyeAnnoyedPath } }, "in")
      .to("#iris", 0.3, { x: 0, y: 0 }, "in")
      .to("#mouth", 0.3, { attr: { d: mouthAngryPath } }, "in");

    lightningTl.timeScale(1.5);
  }
});
