console.clear();
gsap.config({ trialWarn: false });
gsap.registerPlugin(ScrollTrigger);
gsap.to("#target", {
  duration: 3,
  "clip-path": "polygon(-100% 0%, 100% 0%, 100% 100%, -25% 100%)",
  ease: "none",
    scrollTrigger: {
    trigger: "#container",
    markers: {
      startColor: "yellow",
      endColor: "#42a6e0",
      fontSize: "14px"
    },
    start: "top top",
    end: "+=1000",
    pin: true,
    scrub: 1
  }
});