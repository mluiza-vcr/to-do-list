import React, { useEffect, useState } from 'react';
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
  };

  useEffect(() => {
    fetchAPItoDoListGet();
  }, []);

  return (
    <section className="task-list-container">
      <ul>
        {tasks.map(({
          name, status, data, _id,
        }) => (
          <li>
            {name}
            |
            {status}
            |
            {data}
            <button
              onClick={() => { deleteTask(_id); }}
              type="button"
            >
              Deletar
            </button>
          </li>
        ))}
      </ul>
      {errors ? <p>{errors}</p> : null}
    </section>
  );
}

export default TasksList;
