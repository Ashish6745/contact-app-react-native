import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { contactContext } from '../contextAPI/ContextApi'
import List from './List'

const Favourites = () => {
  const {contact} = useContext(contactContext)
 
  return (
    <View>
       {
        contact.map((item,id)=>(
          <List item={item} key={id} />
        ))
       }
    </View>
  )
}

export default Favourites