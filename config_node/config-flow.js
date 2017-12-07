module.exports = function(RED) {
    function ConfigFlowNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        
        	//require dans fichier global settings.js
        	var ZetaPush = require('zetapush-js');
			var NodeJSTransports = require('zetapush-cometd/lib/node/Transports');
		

            // Create new ZetaPush Client
			var client = new ZetaPush.Client({
			  transports: NodeJSTransports,
			  apiUrl: config.apiUrl,
			  sandboxId: config.sandboxId,
			  authentication: function() {
			    return ZetaPush.Authentication.weak({});
			  },
			});
		

			const service = client.createService({
			  Type: ZetaPush.services.Macro,
			});

			var flowContext = node.context().flow;
      		flowContext.set("service", service);
      		flowContext.set("client", client);

	

			client.connect();

			client.onConnectionEstablished(function(){
				node.log("Connexion établie");
			});

        
        	
        }
    
    RED.nodes.registerType("config-flow",ConfigFlowNode);
}