import React, { useState } from 'react';
import './App.css';

function App() {

  const [message, setMessage] = React.useState('Invalid');

  const changeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.trim.length < 3) {
      setMessage('InValid');
    } else {
      setMessage('Valid');
    }
  };

  return (
    <div>

      <input type="text" onChange={changeEvent} />
      <p>{message}</p>
    </div>
  );
}

export default App;
