
var gpio= require('rpi-gpio');

setInterval(function(){gpio.setup(7,gpio.DIR_IN, readInput);},2000);

function readInput(){
	gpio.read(7,function(err, value){
		console.log('Value is '+value);
	});
}

//rpio.open(7,rpio.INPUT);
//console.log('Pin 11 is currently set '+ (rpio.read(11)));


 




