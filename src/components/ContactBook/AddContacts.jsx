import React, { useContext, useState } from 'react';
import { contactsContext } from '../../context/contactsContext';


const AddContacts = () => {

  const { addContact } = useContext(contactsContext)

  const [person, setPerson] = useState({ name: '', phone: '', email: '', image:'' })

  const handleInp=(e)=>{
    let newObj={
      ...person,
        [e.target.name]: e.target.value
    }
    setPerson(newObj)
    
  }

  return (
    <div className='AddContacts'>
      <input value ={person.name} name='name'type="text" placeholder='name' onChange={handleInp}/>
      <input value ={person.phone} name='phone'type="text" placeholder='phone' onChange={handleInp}/>
      <input value ={person.email} name='email'type="text" placeholder='email' onChange={handleInp}/>
      <input value ={person.image} name='image'type="text" placeholder='image' onChange={handleInp}/>
      <button onClick={() => {addContact(person);setPerson({ name: '', phone: '', email: '', image:''})}}>
      Добавить</button>
    </div>
  );
};

export default AddContacts;