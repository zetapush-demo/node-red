module.exports = function(RED) {
  function WriterListenerNode(config) {
    RED.nodes.createNode(this,config);
    var node = this;
    node.on('input', function(msg) {

      var flowContext = node.context().flow;
      var service =flowContext.get("service");

      service.call({
			 name: config.name,
			 parameters: {temperature : msg.payload}
	    });
    });
  }
  RED.nodes.registerType("writer-listener",WriterListenerNode);
}