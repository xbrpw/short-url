//toggle button
$('.js-toggle').on('click', function(){
	$('.map-base').toggleClass('active');
});


//initialization of speech recognition starts here
const artyom = new Artyom();
var commands = [
 {
	 indexes:["eso no es bueno"],
	 action:function() {
		 $('.map-base').addClass('active');
	 }
 }, {
	 indexes:["mischief managed"],
	 action:function() {
		 $('.map-base').removeClass('active');
	 }
 }, {
    indexes:["cerrar mapa"],
    action:function() {
        $('.map-base').removeClass('active');
    }
}
]

artyom.addCommands(commands);

function startContinuousArtyom(){
    artyom.fatality();

    setTimeout(function(){
         artyom.initialize({
            lang:"es-MX",
            continuous:true,
            listen:true, 
            speed:1
        }).then(function(){
            console.log("Listo, vamos!");
        });
    },250);
}

startContinuousArtyom();