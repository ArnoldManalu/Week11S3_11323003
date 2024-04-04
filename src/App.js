import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <h1>Counter App</h1>
      <div className="counter-display">
        <h2>Count: {count}</h2>
      </div>
      <div className="button-container">
        <button onClick={increment}>Tambah</button>
        <button onClick={decrement}>Kurang</button>
      </div>
    </div>
  );
}

export default App;
