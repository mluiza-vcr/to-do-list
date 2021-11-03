const TaskModel = require('../models/tasksModel');

const createTask = async (req, res) => {
  try {
    const { name, status } = req.body;
    const data = await TaskModel.create(name, status);
    if (!data) return res.status(422).json({ message: 'Erro ao criar tarefa'});
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Erro de conexão com o banco' });
  }
};

const getAllTasks = async (req, res) => {
  const tasks = await TaskModel.getAll();
  res.status(200).json({ tasks });
};

module.exports = {
  createTask,
  getAllTasks
}