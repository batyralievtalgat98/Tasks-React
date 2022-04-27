import React from 'react';
import AddContacts from './AddContacts';
import ContactList from './ContactList';

const ContactBook = () => {
  return (
    <div>
      <AddContacts/>
      <ContactList/>
    </div>
  );
};

export default ContactBook;