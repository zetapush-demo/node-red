module.exports = function(RED) {
  function MacroConfigNode(config) {
    RED.nodes.createNode(this,config);
    var node = this;
    node.log("macro 1");
    node.on('input', function(msg) {
      node.log("macro 2");
      // Retrieve the config node
      //node.server = RED.nodes.getNode(config.server);

      var flowContext = node.context().flow;
      var service =flowContext.get("service");

      //if(node.server) node.log("macro 4");
	    node.log("Service 2 : "+JSON.stringify(service));
      service.call({
			 name: config.name,
			 parameters: msg
	    });
      node.log("macro 3");
    });
  }
  RED.nodes.registerType("macro-config",MacroConfigNode);
}