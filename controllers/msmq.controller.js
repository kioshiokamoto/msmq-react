const msmq = require('updated-node-msmq');
const fetch = require('node-fetch');
const queue = msmq.openOrCreateQueue('.\\private$\\demo-arquitectura');

const msmqController = {
	sendMessage: async (req, res) => {
		try {
			queue.send(req.body);
			// queue.send('Kioshi demooo');
			res.status(201).json({ message: 'Se agrego producto correctamente', ok: true });
		} catch (error) {
			res.status(500).json({ message: 'Algo salio mal!', ok: false });
		}
	},
	viewAllMessages: (req, res) => {
		try {
			const messages = queue.getAllMessages();
			res.status(201).json({ content: messages, ok: true });
		} catch (error) {
			res.status(500).json({ message: `Algo salio mal!: ${error}`, ok: false });
		}
	},
	viewAllSavedMessages: async (req, res) => {
		try {
			const messages = await fetch(`http://localhost:3001/msmq`)
				.then((res) => res.json())
				.then((json) => json);
			//console.log(messages);
			res.status(201).json({ content: messages, ok: true });
		} catch (error) {
			res.status(500).json({ message: `Algo salio mal!: ${error}`, ok: false });
		}
	},
	closeQueue: (req, res) => {
		try {
			queue.startReceiving();
			queue.on('receive', ({ id, body }) => {
				console.log('closeQueque: ',{ id, body });
				const { id:uuid, name, date, state, price, stock } = JSON.parse(body);
				fetch(`http://localhost:3001/msmq`, {
					method: 'POST',
					headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
					body: JSON.stringify({
						id:uuid,
						name:name,
						date:date,
						state:state,
						price:price,
						stock: stock,
					}),
				})
					.then((res) => res.json())
					.then((json) => console.log(json));
			});

			res.status(201).json({ message: 'Se guardaron datos correctamente', ok: true });
		} catch (error) {
			res.status(500).json({ message: 'Algo salio mal!', ok: false });
		}
	},
	clearQueue: (req, res) => {
		try {
			queue.purge();
			res.status(201).json({ message: 'Se limpio cola correctamente', ok: true });
		} catch (error) {
			res.status(500).json({ message: 'Algo salio mal!', ok: false });
		}
	},
};

module.exports = msmqController;
