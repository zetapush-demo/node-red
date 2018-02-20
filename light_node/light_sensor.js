module.exports = function(RED) {
  function LightSensorNode(config) {
    RED.nodes.createNode(this,config);
    var node = this;

	var gpio= require('rpi-gpio');
	var Gpio= require('onoff').Gpio;
	var LED = new Gpio(config.gpio,'out');
	var msg= {};
	
	setInterval(function(){gpio.setup(config.pin,gpio.DIR_IN, readInput);},1000);
	
	function readInput(){
			gpio.read(config.pin,function(err, value){
				//console.log('Value is '+value);
				if(value==true)LED.writeSync(0);
				if(value==false)LED.writeSync(1);
				msg.payload =value;
				node.send(msg);
			});
	}
 
  }
  RED.nodes.registerType("light_sensor",LightSensorNode);
}

