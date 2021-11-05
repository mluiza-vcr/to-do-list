import axios from 'axios';

const toDoListURL = 'https://to-do-list-mluiza.herokuapp.com/tasks';

const toDoListId = (id) => `https://to-do-list-mluiza.herokuapp.com/tasks/${id}`;

const createNewTask = async (name, status) => {
  try {
    await axios.post(toDoListURL, { name, status });
    return null;
  } catch (err) {
    return err.response.data;
  }
};

const showAllTasks = async () => {
  try {
    const response = await axios.get(toDoListURL);
    return response.data.tasks;
  } catch (err) {
    return err.response.data;
  }
};

const deleteTask = async (id) => {
  await axios.delete(toDoListId(id));
};

const updateTask = async (id, name, status) => {
  try {
    await axios.put(toDoListId(id, name, status));
    return null;
  } catch (err) {
    return err.response.data;
  }
};

export default {
  createNewTask,
  showAllTasks,
  deleteTask,
  updateTask,
};
