"use strict";
class App {
    constructor() {
        const tl = new TimelineMax({ repeat: -1 });
        tl.to(['.pizzaOutline', '.pizzaMask'], 7, {
            rotation: 360,
            svgOrigin: '61 61',
            ease: Linear.easeNone
        })
            .to('.whole', 7, {
            rotation: -45,
            svgOrigin: '61 61',
            ease: Linear.easeNone
        }, 0);
    }
}
TweenMax.set('svg', {
    visibility: 'visible'
});
var app = new App();
TweenMax.globalTimeScale(4);