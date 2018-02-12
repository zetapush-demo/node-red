module.exports = function(RED) {
  function LightSensorNode(config) {
    RED.nodes.createNode(this,config);
    var node = this;

	var gpio= require('rpi-gpio');
	var msg= {};
	
	setInterval(function(){gpio.setup(config.pin,gpio.DIR_IN, readInput);},config.intervalTime);
	
	function readInput(){
		if(config.intervalTime != ""){
			gpio.read(config.pin,function(err, value){
				//console.log('Value is '+value);
				msg.payload =value;
				node.send(msg);
			});
		}
	}
 
  }
  RED.nodes.registerType("light_sensor",LightSensorNode);
}

