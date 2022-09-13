window.addEventListener("load", () => {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  gsap.utils
    .toArray(".Clouds__div__imageContainer__imagediv")
    .forEach(($el) => {
      const width = $el.clientWidth;
      const height = $el.clientHeight;
      const y = gsap.utils.random(-height * 0.5, windowHeight - height * 0.5);
      const delay = gsap.utils.random(0, 5);
      const repeatDelay = gsap.utils.random(0, 5);
      const duration = gsap.utils.random(10, 30);

      gsap.set($el, {
        opacity: 1,
        y
      });
      gsap.fromTo(
        $el,
        {
          x: windowWidth
        },
        {
          duration,
          x: -width,
          repeat: -1,
          delay,
          repeatDelay,
          ease: "none"
        }
      );
    });
});