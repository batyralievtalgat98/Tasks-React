import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>

      <NavLink to='1-3'><div>1-3 Задание</div></NavLink>
      <NavLink to='4-5'> <div>4-5 Задание</div></NavLink>
      <NavLink to='6-8'> <div>6-8 Задание</div></NavLink>
      <NavLink to='9-12'> <div>9-12 Задание</div></NavLink>
    </div>
  );
};

export default Navbar;