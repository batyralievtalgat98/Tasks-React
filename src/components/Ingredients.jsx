import React from 'react';

const Ingredients = ({ meal }) => {



  if (meal === 'pizza') {
    return (<>
      <p>Колбаса</p>
      <p>Сыр</p>
      <p>Тесто</p>
    </>
    )
  } else if (meal === 'soup') {
    return (<>
      <p>Вода</p>
      <p>Морковка</p>
      <p>Картошка</p>
    </>
    )
  } else if (meal === 'pasta') {
    return (<>
      <p>Макароны</p>
      <p>Кетчуп</p>
      <p>Мясо</p>
    </>
    )
  }

};

export default Ingredients;