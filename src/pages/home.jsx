import React from 'react';
import TasksForm from '../components/tasksForm';
import TasksList from '../components/tasksList';

function Home() {
  return (
    <div className="App">
      <section className="Tasks">
        <h1 className="title"> Lista de Tarefas </h1>
        <TasksForm />
        <TasksList />
      </section>
    </div>
  );
}

export default Home;
