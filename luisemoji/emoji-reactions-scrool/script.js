console.clear();
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
gsap.config({ trialWarn: false });
gsap.defaults({ ease: "none" });

const smoother = ScrollSmoother.create({
  smooth: 3,
  normalizeScroll:true
});

const smileyWrapper = document.querySelector(".smiley-wrapper");
const targets = gsap.utils.toArray("section:not(:first-of-type)");
const smileys = gsap.utils.toArray(".smiley");
const colors = gsap.utils.wrap([  "#241C31", "#4A4453", "#B0A8BA", "#153B34", "#446B62"]);
gsap.set(targets, { backgroundColor: colors });

targets.forEach((target, i) => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: target,
      start: () => "top " + smileyWrapper.getBoundingClientRect().bottom,
      end: () => "top " + smileyWrapper.getBoundingClientRect().top,
      scrub: true
    }
  });
  tl.to(smileys[i], { "clip-path": "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" });
  tl.to(smileys[i + 1], { "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }, 0);
});