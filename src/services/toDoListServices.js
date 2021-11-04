import axios from 'axios';

const toDoListURL = 'https://to-do-list-mluiza.herokuapp.com/tasks';

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

const deleteTask = async () => {
  await axios.delete(toDoListURL, id);
  return null;
}

export default {
  createNewTask,
  showAllTasks,
  deleteTask,
};
