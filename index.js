const express = require('express');

const cors = require('cors');

const bodyParser = require('body-parser');

const TasksControllers = require('./controllers/taskController');

const TasksMiddlewares = require('./middlewares/tasksMiddlewares');

require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

app.use(cors());

app.get('/tasks', TasksControllers.getAllTasks);

app.post('/tasks', TasksMiddlewares.validateName, TasksMiddlewares.validateStatus, TasksControllers.createTask);

app.delete('/tasks', TasksControllers.deleteTask);

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
