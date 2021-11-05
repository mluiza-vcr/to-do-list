import React from 'react';
import TasksForm from '../components/tasksForm';
import TasksList from '../components/tasksList';

function Home() {
  return (
    <div className="App">
      <header className="App-header" />
      <section className="Tasks">
        <TasksForm />
        <TasksList />
      </section>
    </div>
  );
}

export default Home;
