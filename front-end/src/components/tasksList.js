import React, { useState, useEffect } from 'react';

function TasksList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then((data) => data.json())
      .then((tasks) => setTasks(tasks))
      .catch((e) => {
        console.log('Erro no useEffect')
      });
  })

  return (
    <ul>
      {
        tasks.map((task) => <li> {task.name} </li>)
      }
    </ul>
  )
}

export default TasksList;