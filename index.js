const express = require('express');

const cors = require('cors');

const TasksControllers = require('./controllers/taskController');

require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors());

app.get('/tasks', TasksControllers.getAllTasks);

app.post('/tasks', TasksControllers.createTask);

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

