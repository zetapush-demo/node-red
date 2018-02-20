module.exports = function(RED) {
  function MailNode(config) {
    RED.nodes.createNode(this,config);
    var node = this;

    node.on('input', function(msg) {
      var flowContext = node.context().flow;
      var service =flowContext.get("service");
	console.log("into input and ad : "+config.mailad+" and function : "+config.name);
      service.call({
			 name: config.name,
			 //parameters: config.formatFunction ? config.formatFunction(msg) :  { payload: msg }
       			parameters: {to:config.mailad , temperature : 29}
	    });
 
    });
  }
  RED.nodes.registerType("mail",MailNode);
}