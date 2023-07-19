import React, { useState } from 'react';
import './App.css';
import Child from './components/Child';

function App() {

  const passValueHandler = (passedValue: any) => {
    console.log(passedValue);
  }

  return (
    <div>
      Helloooo!!!
      <Child OnPassValue={passValueHandler} />
    </div>
  );
}

export default App;
