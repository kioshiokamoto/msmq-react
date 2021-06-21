const express = require('express');
const router = express.Router();
const msmq = require('updated-node-msmq');
const fetch = require('node-fetch');
const queue = msmq.openOrCreateQueue('.\\private$\\demo-arquitectura');
router.post('/sendMessage', async (req, res) => {
	try {
		queue.send(req.body);
		// queue.send('Kioshi demooo');
		res.status(201).json({ message: 'Se agrego producto correctamente', ok: true });
	} catch (error) {
		res.status(500).json({ message: 'Algo salio mal!', ok: false });
	}
});

router.get('/viewAllMessages', (req, res) => {
	try {
		const messages = queue.getAllMessages();
		res.status(201).json({ content: messages, ok: true });
	} catch (error) {
		res.status(500).json({ message: `Algo salio mal!: ${error}`, ok: false });
	}
});
router.get('/viewAllSavedMessages', async (req, res) => {
	try {
		const messages = await fetch(`http://localhost:3001/msmq`)
			.then((res) => res.json())
			.then((json) => json);
		//console.log(messages);
		res.status(201).json({ content: messages, ok: true });
	} catch (error) {
		res.status(500).json({ message: `Algo salio mal!: ${error}`, ok: false });
	}
});
router.get('/closeQueue', (req, res) => {
	try {
		queue.startReceiving();
		queue.on('receive', ({ id, body }) => {
			console.log({ id, body });
			const { codigo, descripcion, precio, stock } = JSON.parse(body);
			fetch(`http://localhost:3001/msmq`, {
				method: 'POST',
				headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
				body: JSON.stringify({ id: codigo, descripcion: descripcion, precio: precio, stock: stock }),
			})
				.then((res) => res.json())
				.then((json) => console.log(json));
		});

		res.status(201).json({ message: 'Se guardaron datos correctamente', ok: true });
	} catch (error) {
		res.status(500).json({ message: 'Algo salio mal!', ok: false });
	}
});
router.get('/clearQueue', (req, res) => {
	try {
		queue.purge();
		res.status(201).json({ message: 'Se limpio cola correctamente', ok: true });
	} catch (error) {
		res.status(500).json({ message: 'Algo salio mal!', ok: false });
	}
});

module.exports = router;
