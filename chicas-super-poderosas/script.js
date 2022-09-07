(function() {
  const particle = document.querySelector('.particle');

  particle.style.transform = 'scale(0)';

  function spawn() {
    const newParticle = particle.cloneNode(true);
    const speed = gsap.utils.random(3,5);

    gsap.timeline({
      onComplete: () => {
        document.body.removeChild(newParticle);
      }
    })
      .set(newParticle, {
      scale: 'random(0.1, 0.3)',
      left: 'random(50, 300)',
      bottom: 'random(-50, 50)',
    })
      .to(newParticle, {
      ease: 'linear',
      duration: speed,
      bottom: '+=random(300, 650)',
    })
      .to(newParticle.querySelector('.bubble'), {
      ease: 'linear',
      duration: 0.2,
      borderStyle: 'dashed',
      scale: '+=0.2',
      opacity: 0,
    }, speed * 0.8)
      .set(newParticle.querySelectorAll('.bubbles .eye'), {
      backgroundColor: 'rgb(228,218,255)',
      backgroundImage: 'none',
    })
      .to(newParticle, {
      ease: 'linear',
      duration: 0.2,
      opacity: 0,
      scale: '+=0.05',
    })

    gsap.to(newParticle, {
      ease: 'linear',
      repeat: -1,
      yoyo: true,
      duration: 0.5,
      x: 'random(0, 50)',
    });

    document.body.appendChild(newParticle);

    gsap.delayedCall(0.3, spawn);
  }

  spawn();
})();

gsap.timeline({
  repeat: -1,
})
  .to('.arm-left .arm', {
  ease: 'linear',
  duration: 1,
  scaleX: 0.8,
})
  .to('.arm-left .arm', {
  ease: 'linear',
  duration: 1,
  scaleX: 1,
  rotateY: 10,
})
  .to('.arm-left .arm', {
  ease: 'linear',
  duration: 1,
  rotateY: 0,
})

gsap.timeline({
  repeat: -1
})
  .to('.hands', {
  ease: 'linear',
  duration: 1,
  x: 70,
  z: -10,
})
  .to('.hands', {
  ease: 'linear',
  duration: 1,
  x: 10,
  z: 70,
})
  .to('.hands', {
  ease: 'linear',
  duration: 1,
  x: 0,
  z: 0,
});

gsap.timeline({
  repeat: -1
})
  .to('.arm-right .arm', {
  ease: 'linear',
  duration: 1,
  x: 80,
})
  .to('.arm-right .arm', {
  ease: 'linear',
  duration: 1,
  x: 0,
})
  .to('.arm-right .arm', {
  ease: 'linear',
  duration: 1,
  x: 0,
});