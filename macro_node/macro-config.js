module.exports = function(RED) {
  function MacroConfigNode(config) {
    RED.nodes.createNode(this,config);
    var node = this;

    node.on('input', function(msg) {

      // Retrieve the config node
      //node.server = RED.nodes.getNode(config.server);

      var flowContext = node.context().flow;
      var service =flowContext.get("service");



      service.call({
			 name: config.name,
			 //parameters: config.formatFunction ? config.formatFunction(msg) :  { payload: msg }
       parameters: {temperature : msg.payload }
	    });
 
    });
  }
  RED.nodes.registerType("macro-config",MacroConfigNode);
}