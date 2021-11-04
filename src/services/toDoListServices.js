import toDoListURL from './endpoints';

const axios = require('axios').default;

const createNewTask = async (name, status) => {
  try {
    await axios.post(toDoListURL, { name, status });
  } catch (err) {
    console.log(err);
  }
};

createNewTask();

