import React from 'react';
import './App.css';

function App() {

  const clickEvent = () => {
    console.log('Stored');
  }

  return (
    <div>
      Hello World!!!
      <button onClick={clickEvent}>Click</button>
    </div>
  );
}

export default App;
