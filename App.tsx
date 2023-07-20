import React, { useState } from 'react';
import './App.css';
import './components/Style.css';
import Todo from './components/Todo';

function App() {

  const TODO = [
    'Learn React',
    'Practice React',
    'Profit!'
  ]

  return (
    <ul>
      Todo:
      {TODO.map(todo => <Todo text={todo}></Todo>)}
    </ul>
  )

}

export default App;
