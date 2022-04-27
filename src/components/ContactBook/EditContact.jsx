import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { contactsContext } from '../../context/contactsContext';

const EditContact = () => {

  const { saveContact,contactToEdit} = useContext(contactsContext)

  const [editContact, SetEditContact]=useState(contactToEdit)

  const navigate = useNavigate()

  useEffect(() => {
    SetEditContact(contactToEdit)
  
    
  }, [contactToEdit])

  const handleInp = (e)=>{
    let obj={
      ...editContact,
      [e.target.name]: e.target.value,
    };
    SetEditContact(obj)
  }
  
  return (
    <>
    {editContact ? (<div className='AddContacts'>
    <input value ={editContact.name} name='name'type="text" placeholder='name' onChange={handleInp}/>
    <input value ={editContact.phone} name='phone'type="text" placeholder='phone' onChange={handleInp}/>
    <input value ={editContact.email} name='email'type="text" placeholder='email' onChange={handleInp}/>
    <input value ={editContact.image} name='image'type="text" placeholder='image' onChange={handleInp}/>
    <button onClick={() => {saveContact(editContact);navigate(-1)}}>
    SAVE</button>
  </div>): (<h2>Loading</h2>)}
    
  </>
  );
};

export default EditContact;