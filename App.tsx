import React, { useState } from 'react';
import './App.css';

function App() {

  const [increment, setIncrement] = React.useState(0);

  const clickEvent = () => {
    setIncrement(precounter => precounter + 1)
  };

  return (
    <div>
      <p>{increment}</p>
      <button onClick={clickEvent} >Increment</button>
    </div>
  );
}

export default App;
