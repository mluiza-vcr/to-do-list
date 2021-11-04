const express = require('express');

const cors = require('cors');

require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors());

app.get('/tasks', (req, res) => {
  res.status(200).send('<h1> Olá </h1>');
});

// app.post()



app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

