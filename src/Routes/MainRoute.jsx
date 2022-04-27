import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ContactBook from '../components/ContactBook/ContactBook';
import EditContact from '../components/ContactBook/EditContact';


import Counter from '../components/Counter';
import LoginForm from '../components/LoginForm';
import Receipts from '../components/Receipts';

const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path='/1-3' element={<Counter />} />
        <Route path='/4-5' element={<Receipts />} />
        <Route path='/6-8' element={<LoginForm />} />
        <Route path='/9-12' element={<ContactBook />} />
        <Route path='/edit' element={<EditContact />} />


      </Routes>
    </div>
  );
};

export default MainRoute;