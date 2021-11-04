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
    console.log(response);
    return response.data.tasks;
  } catch {
    return 'erro';
  }
};

export default {
  createNewTask,
  showAllTasks,
};
