/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from 'react';
import { TiDelete } from 'react-icons/ti';
import { GrUpdate } from 'react-icons/gr';
import toDoListServices from '../services/toDoListServices';

function TasksList() {
  const [tasks, setTasks] = useState([]);
  // const [errors, setErrors] = useState('');
  const [changeToInput, setChangeToInput] = useState(false);

  const fetchAPItoDoListGet = async () => {
    const response = await toDoListServices.showAllTasks();
    setTasks(response);
  };

  const deleteTask = async (id) => {
    await toDoListServices.deleteTask(id);
    location.reload();
  };

  // const updateTask = async (id, name, status) => {
  //   const update = await toDoListServices.updateTask(id, name, status);
  //   if (update) setErrors(update.message)
  // };

  const updateInput = ({ target: { id } }, idMap) => {
    if (id === idMap) {
      if (!changeToInput) setChangeToInput(true);
      else setChangeToInput(false);
    }
  };

  useEffect(() => {
    fetchAPItoDoListGet();
  }, []);

  return (
    <table className="task-list-container">
      <tr>
        <th>Tarefa</th>
        <th>Status</th>
        <th>Data</th>
        <th>Excluir</th>
        <th>Atualizar</th>
      </tr>
      {tasks.map(({
        name, status, date, _id,
      }, index) => (
        <>
          <tr key={_id}>
            {changeToInput ? <input /> : (
              <td>
                {name}
              </td>
            )}
            <td>{status}</td>
            <td>{date}</td>
            <td>
              <button
                onClick={() => { deleteTask(_id); }}
                type="button"
              >
                <TiDelete />
              </button>
            </td>
            <td>
              <button
                onClick={() => updateInput(_id, index)}
                type="button"
                id={index}
              >
                <GrUpdate />
              </button>
            </td>
          </tr>
        </>

      ))}
      {/* {errors ? <p>{errors}</p> : null} */}
    </table>
  );
}

export default TasksList;
