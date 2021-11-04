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

  useEffect(() => {
    fetchAPItoDoListGet();
  }, []);

  return (
    <section className="task-list-container">
      <ul>
        {tasks.map((t) => (
          <li>
            {t.name}
            |
            {t.status}
          </li>
        ))}
      </ul>
      {errors ? <p>{errors}</p> : null}
    </section>
  );
}

export default TasksList;
