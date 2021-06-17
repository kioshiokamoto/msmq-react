const msmq = require('updated-node-msmq');
var queue = msmq.openOrCreateQueue('.\\private$\\demo-arquitectura');

queue.send({ message: '3', color: '#a6bbcf' });
