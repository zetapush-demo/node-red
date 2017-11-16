module.exports = function(RED) {
    function ConfigFlowNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        
        	//require dans fichier global settings.js
        	var ZetaPush = require('zetapush-js');
			var NodeJSTransports = require('zetapush-cometd/lib/node/Transports');
			this.log("input zetapush 1");

            // Create new ZetaPush Client
			var client = new ZetaPush.Client({
			  transports: NodeJSTransports,
			  apiUrl: config.apiUrl,
			  sandboxId: config.sandboxId,
			  authentication: function() {
			    return ZetaPush.Authentication.weak({});
			  },
			});
			this.log("input zetapush 2");

			const service = client.createService({
			  Type: ZetaPush.services.Macro,
			});
			this.log("input zetapush 3");

			client.connect();

			client.onConnectionEstablished(function(){
				node.log("Connexion établie");
			});
			this.log("input zetapush 4");
        
        	
        }
    
    RED.nodes.registerType("config-flow",ConfigFlowNode);
}