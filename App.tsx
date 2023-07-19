import React, { useState } from 'react';
import './App.css';
import Child from './components/Child';

function App() {

  const appValue = "appValue";

  return (
    <div>
      Helloooo!!!
      <Child passValue={appValue} />
    </div>
  );
}

export default App;
