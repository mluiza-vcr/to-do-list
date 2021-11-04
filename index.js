const express = require('express');

const cors = require('cors');

require('dotenv').config();

const app = express();

const PORT = 3001 || process.env.PORT;

app.use(cors());

app.get('/tasks', (req, res) => {
  // código aqui
});

// app.post()



app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

