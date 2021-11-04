const TaskModel = require('../models/tasksModel');

const createTask = async (req, res) => {
  const { name, status } = req.body;
  try {
    const data = await TaskModel.create({ name, status });
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Erro de conexão com o banco' });
  }
};

const getAllTasks = async (req, res) => {
  const tasks = await TaskModel.getAll();
  res.status(200).json({ tasks });
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  await TaskModel.deleteById(id);
  res.status(204).end();
};

module.exports = {
  createTask,
  getAllTasks,
  deleteTask,
};
