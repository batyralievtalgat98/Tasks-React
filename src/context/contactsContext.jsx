import React, { createContext, useReducer } from 'react';
import axios from "axios";

export const contactsContext = createContext()



const INIT_STATE = {
  contacts: [],
  contactToEdit: null,
}


const reducer = (state=INIT_STATE,action)=>{
  switch (action.type) {
    case "GET_CONTACTS":
      return {...state, contacts: action.payload}
     case 'EDIT_CONTACT':
       return{...state, contactToEdit: action.payload}
  
    default:
      return state
  }
}
const ContactsContextProvider = ({children}) => {

  const [state, dispatch] = useReducer(reducer, INIT_STATE)

  const getContacts = async()=>{
    let {data} = await axios('http://localhost:8000/contacts')

    dispatch({
      type: 'GET_CONTACTS',
      payload: data
    })
  }

  const addContact= async(newContact)=>{
     await axios.post('http://localhost:8000/contacts',newContact)
     getContacts()
    }

    const deleteContact = async(id)=>{
      await axios.delete(`http://localhost:8000/contacts/${id}`)
      getContacts()
    }

    const editContact = async(id)=>{
      let {data} = await axios(`http://localhost:8000/contacts/${id}`)
      dispatch({
        type:'EDIT_CONTACT',
        payload: data
      })
      getContacts()
    }

    const saveContact = async(newContact)=>{
      await axios.patch(`http://localhost:8000/contacts/${newContact.id}`,newContact)
      getContacts()
    }
    
    

  return (
   
      <contactsContext.Provider
            value={{
              contacts: state.contacts,
              contactToEdit: state.contactToEdit,
              addContact,
              getContacts,
              deleteContact,
              editContact,
              saveContact

            }} >
            {children}
        </contactsContext.Provider>
   
  );
};

export default ContactsContextProvider;