import React, { useState } from 'react';
import CurrencyConvertor from './Components/CurrencyConvertor';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const sayHello = () => {
    alert('Hello! Welcome to React event handling');
  };

  const handleIncrement = () => {
    increment();
    sayHello();
  };

  const sayWelcome = (message) => {
    alert(message);
  };

  const handleClick = (event) => {
    alert('I was clicked');
  };

  return (
    <div style={{ margin: '20px' }}>
      <h2>{count}</h2>

      <button onClick={handleIncrement}>Increment</button>
      <br />

      <button onClick={decrement}>Decrement</button>
      <br />

      <button onClick={() => sayWelcome('welcome')}>Say welcome</button>
      <br />

      <button onClick={handleClick}>Click on me</button>

      <br />
      <br />

      <CurrencyConvertor />
    </div>
  );
}

export default App;