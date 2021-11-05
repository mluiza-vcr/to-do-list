/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';
import toDoListServices from '../services/toDoListServices';

function TasksForm() {
  const [inputValues, setInputValues] = useState({ tarefa: '', status: 'em andamento' });

  const [errors, setErrors] = useState('');

  const { tarefa, status } = inputValues;

  const handleInputs = ({ target: { name, value } }) => {
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const fetchAPItoDoListPost = async () => {
    const response = await toDoListServices.createNewTask(tarefa, status);
    if (response) {
      setErrors(response.message);
    }
    location.reload();
  };

  return (
    <form className="form-container">
      <input placeholder="Tarefa" name="tarefa" onChange={handleInputs} />
      <select name="status" onChange={handleInputs}>
        <option value="pendente">Pendente</option>
        <option value="em andamento" selected>Em andamento</option>
        <option value="pronto">Pronto</option>
      </select>
      {errors ? <p>{errors}</p> : null}
      <button type="button" onClick={fetchAPItoDoListPost}>Criar tarefa</button>
    </form>
  );
}

export default TasksForm;
