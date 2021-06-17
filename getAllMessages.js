const msmq = require('updated-node-msmq');
var queue = msmq.openOrCreateQueue('.\\private$\\demo-arquitectura');

//Obtiene todos los mensajes de la cola
var messages = queue.getAllMessages();
console.log(messages);
