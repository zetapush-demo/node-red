module.exports = function(RED) {
  function TemperatureNode(config) {
    RED.nodes.createNode(this,config);
    var node = this;

	var sensor=require("node-dht-sensor");

	var temp = setInterval(conversion, config.intervalTime);

	var msg= {};


	function conversion(){

		if(config.intervalTime != ""){
		        sensor.read(22, config.gpio, function(err, temperature) {
		                if (!err) {
		                	console.log('temp: ' + temperature.toFixed(1) + '°C');
		                	msg.payload = parseFloat(temperature.toFixed(1));
		      			node.send(msg);
		                }
        		});
		}
	}
 
  }
  RED.nodes.registerType("temperature",TemperatureNode);
}

