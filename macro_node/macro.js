module.exports = function(RED) {
    function ConfigFlowNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;

  			node.on('input', function(msg) {
    			service.call({
      				name: config.name();
      				parameters: msg
    			});
			})
        
        	
        }
    
    RED.nodes.registerType("config-flow",ConfigFlowNode);
}