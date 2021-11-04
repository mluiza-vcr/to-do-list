import React, { useState } from 'react';
import createNewTask from '../services/toDoListServices';

function TasksList() {
  // const [tasks, setTasks] = useState([]);

  const [inputValues, setInputValues] = useState({ tarefa: '', status: '' });

  const [errors, setErrors] = useState('');

  const { tarefa, status } = inputValues;

  const handleInputs = ({ target: { name, value } }) => {
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const fetchAPItoDoListPost = async () => {
    const response = await createNewTask(tarefa, status);
    if (response) {
      setErrors(response.message);
    }
  };

  return (
    <form>
      <input placeholder="Tarefa" name="tarefa" onChange={handleInputs} />
      <input placeholder="Status" name="status" onChange={handleInputs} />
      {errors ? <p>{errors}</p> : null}
      <button type="button" onClick={fetchAPItoDoListPost}>Criar tarefa</button>
    </form>
  );
}

export default TasksList;
