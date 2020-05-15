import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  function randomize() {
    const random = Math.floor(Math.random() * 100);
    setCount(random);
  }

  function decrease() {
    setCount(count - 1);
  }
  function increase() {
    setCount(count + 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div className="container">
      <div className="row">
        <h1>REACT (useState Hook): Counter</h1>
      </div>

      <div className="row">
        <button className="randomize-btn" onClick={randomize}>
          RANDOMIZE
        </button>
      </div>

      <div className="row">
        <button onClick={decrease}>-</button>
        <div className="counter">
          <h1>{count}</h1>
        </div>
        <button onClick={increase}>+</button>
      </div>

      <div className="row">
        <button className="reset-btn" onClick={reset}>
          RESET
        </button>
      </div>
    </div>
  );
}
