module.exports = function(RED) {
  function WriterListenerNode(config) {
    RED.nodes.createNode(this,config);
    var node = this;
    var flowContext = node.context().flow;

    node.on('input', function(msg) {
      var service =flowContext.get("service");

      service.call({
			 name: config.name,
			 parameters: {temperature : msg.payload}
	    });

    });

    var ZetaPush = require('zetapush-js');
    var client =flowContext.get("client");

    var listener = {};  //Creer un objet vide

    listener[config.out] = function(response) {
      console.log("response : " +JSON.stringify(response));

      var msg = {};
      msg.payload = response.data.name;
      node.send(msg);
    };
    
    client.createService({
      Type: ZetaPush.services.Macro,
      listener: listener
    });

  }
  RED.nodes.registerType("writer-listener",WriterListenerNode);
}