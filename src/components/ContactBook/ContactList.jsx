import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { contactsContext } from '../../context/contactsContext';

const ContactList = () => {

  const {contacts,getContacts,deleteContact,editContact} = useContext(contactsContext)


  useEffect(() => {
    getContacts();
  
  }, [])
  
  return (
    <div className="ContactList">
      {contacts.map(item=>(
        <div key={item.id}  >
          <div className='ContactList_text'>
        <h2>name: {item.name}</h2>
        <p>phone: {item.phone}</p>
        <p>email:{item.email}</p>
        <img src={item.image} alt=""  width='150px' height='150px'/>
        </div>
        <div className='ContactList_btn'>
        <Link to='/edit'>
        <button onClick={()=>editContact(item.id)}>EDIT</button>
        </Link>
        <button onClick={()=>deleteContact(item.id)}>DELETE</button>
        </div>
        </div>
      ))}
    </div>
  );
};

export default ContactList;