//toggle button
$('.js-toggle').on('click', function(){
	$('.map-base').toggleClass('active');
});


//initialization of speech recognition starts here
const artyom = new Artyom();
var commands = [
 {
	 indexes:["up to no good"],
	 action:function() {
		 $('.map-base').addClass('active');
	 }
 }, {
	 indexes:["mischief managed"],
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
            lang:"en-GB",
            continuous:true,
            listen:true, 
            speed:1
        }).then(function(){
            console.log("Ready to work !");
        });
    },250);
}

startContinuousArtyom();