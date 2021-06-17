const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { success } = require('consola');
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(require('./routes/msmq.route'));

const PORT = process.env.PORT;
app.listen(PORT, () => {
	consola.success({ badge: true, message: `Servidor corriendo en puerto ${PORT}` });
});
