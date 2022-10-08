var animData = {
        container: document.getElementById('container'),
        renderer: 'html',
        loop: true,
        autoplay: true,
        path: 'https://labs.nearpod.com/bodymovin/demo/piggy/data.json'
    };
    var anim = bodymovin.loadAnimation(animData);
window.onresize = anim.resize.bind(anim);