/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from 'react';
import { TiDelete } from 'react-icons/ti';
import toDoListServices from '../services/toDoListServices';

function TasksList() {
  const [tasks, setTasks] = useState([]);
  const [errors, setErrors] = useState('');

  const fetchAPItoDoListGet = async () => {
    const response = await toDoListServices.showAllTasks();
    if (!response) {
      setErrors('Não há tarefas');
    }
    setTasks(response);
  };

  const deleteTask = async (id) => {
    await toDoListServices.deleteTask(id);
    location.reload();
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
      </tr>
      {tasks.map(({
        name, status, date, _id,
      }) => (
        <>
          <tr key={_id}>
            <td>{name}</td>
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
          </tr>
        </>

      ))}
      {errors ? <p>{errors}</p> : null}
    </table>
  );
}

export default TasksList;
