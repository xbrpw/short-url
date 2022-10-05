gsap.registerPlugin(Flip, ScrollTrigger);

let video = document.querySelector(".video");

ScrollTrigger.create({
  trigger: ".video-container",
  start: "center top",
  onEnter: () => toggleVideo("add"),
  onLeaveBack: () => toggleVideo("remove")
});

function toggleVideo(action) {
  let state = Flip.getState(video);
  video.classList[action]("fixed");
  Flip.from(state, {
    scale: true,
    ease: "power3.out",
    duration: 0.9
  });
}