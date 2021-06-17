const msmq = require('updated-node-msmq');
var queue = msmq.openOrCreateQueue('.\\private$\\demo-arquitectura');

//Limpia la cola
queue.purge();
