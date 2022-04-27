import React, { useState } from 'react';

const Counter = () => {

  const [number, setNumber] = useState(0)
  return (
    <div>
      <button onClick={() => setNumber(number + 1)} >+</button>
      <button onClick={() => setNumber(number - 1)}>-</button>
      <p>Вы нажали {number} раз</p>
    </div>
  );
};

export default Counter;