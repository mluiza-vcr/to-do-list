import React, { useState } from 'react';
import toDoListServices from '../services/toDoListServices';

function Update() {
  const [errors, setErrors] = useState('');
  const [inputValues, setInputValues] = useState({ tarefa: '', status: 'em andamento' });
  const { tarefa, status } = inputValues;

  const handleInputs = ({ target: { name, value } }) => {
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const updateTask = async () => {
    const id = localStorage.getItem('id');
    const update = await toDoListServices.updateTask(id, tarefa, status);
    if (update) setErrors(update.message);
  };

  return (
    <form>
      <input placeholder="Tarefa" name="tarefa" onChange={handleInputs} />
      <select name="status" onChange={handleInputs}>
        <option value="pendente">Pendente</option>
        <option value="em andamento" selected>Em andamento</option>
        <option value="pronto">Pronto</option>
      </select>
      {errors ? <p>{errors}</p> : null}
      <button type="button" onClick={updateTask}>Atualizar</button>
    </form>
  );
}

export default Update;
