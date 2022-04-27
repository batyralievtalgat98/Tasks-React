import React, { useState } from 'react';
import Ingredients from './Ingredients';

const Receipts = () => {
  const [meal, setMeal] = useState('')

  return (
    <div>
      <div>
        <label htmlFor="pasta"><input type="radio" name="eat" id="pasta" onClick={(e) => setMeal(e.target.id)} />Макароны</label>
        <label htmlFor="soup"><input type="radio" name="eat" id="soup" onClick={(e) => setMeal(e.target.id)} />Суп</label>
        <label htmlFor="pizza "><input type="radio" name="eat" id="pizza" onClick={(e) => setMeal(e.target.id)} />Пицца</label>
      </div>
      <Ingredients
        meal={meal}
      />
    </div>
  );
};

export default Receipts;