/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from 'react';
import { TiDelete } from 'react-icons/ti';
import { GrUpdate } from 'react-icons/gr';
import { useHistory } from 'react-router';
import toDoListServices from '../services/toDoListServices';

function TasksList() {
  const [tasks, setTasks] = useState([]);

  const fetchAPItoDoListGet = async () => {
    const response = await toDoListServices.showAllTasks();
    setTasks(response);
  };

  const deleteTask = async (id) => {
    await toDoListServices.deleteTask(id);
    location.reload();
  };

  const history = useHistory();

  const handleClick = (id) => {
    history.push('/update');
    localStorage.setItem('id', id);
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
            <td>
              <button
                onClick={() => handleClick(_id)}
                type="button"
                id={index}
              >
                <GrUpdate />
              </button>
            </td>
          </tr>
        </>
      ))}
    </table>
  );
}

export default TasksList;
