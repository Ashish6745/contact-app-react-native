import { View, Text } from 'react-native'
import React, { createContext, useState } from 'react'

export const contactContext = createContext();


const ContextApi = ({children}) => {
    const[contact, setContact] = useState([]);
    const[newContact, setNewContact] = useState([]);
  return (
   <contactContext.Provider value={{contact, setContact,newContact, setNewContact}}>
   {children}
   </contactContext.Provider>
  )
}

export default ContextApi