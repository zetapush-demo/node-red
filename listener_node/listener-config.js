module.exports = function(RED) {
  function ListenerConfigNode(config) {
    RED.nodes.createNode(this,config);
    var node = this;
    

      var flowContext = node.context().flow;
      var client =flowContext.get("client");

      var ZetaPush = require('zetapush-js');

      var listener = {};  //Creer un objet vide

      listener[config.name] = function(response) {
      console.log("response : " +JSON.stringify(response));

      //var donnees = JSON.parse(response);
      var msg = {};
      msg.payload = response.data.name;
      node.send(msg);
      };
	    
      client.createService({
        Type: ZetaPush.services.Macro,
        listener: listener
      });
              console.log("test2");


      
    
  }
  RED.nodes.registerType("listener-config",ListenerConfigNode);
}


//onTemperatureExceedDangerousLevel
