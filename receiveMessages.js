const msmq = require('updated-node-msmq');
var queue = msmq.openOrCreateQueue('.\\private$\\demo-arquitectura');
//Inicia recepcion de cola
queue.startReceiving();
const recibidor = ({ id, body }) => {
	//console.log(msg.body);
	//console.log({ id, body });
	console.log(JSON.parse(body));
};
queue.on('receive', recibidor);
// queue.receive();
