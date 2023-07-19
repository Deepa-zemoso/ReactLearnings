import React, { useState } from 'react';
import './App.css';

function App() {

  const [price, setPrice] = useState(100);

  const clickEvent = () => {
    setPrice(75);
  }

  return (
    <div>
      <p>{price}</p>
      <button onClick={clickEvent}>Click</button>
    </div>
  );
}

export default App;
