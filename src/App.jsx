import './App.css';
import React from 'react';
import TasksList from './components/tasksList';

function App() {
  return (
    <div className="App">
      <header className="App-header" />
      <section className="TasksList">
        <TasksList />
      </section>
    </div>
  );
}

export default App;
