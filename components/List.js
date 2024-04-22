import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useContext, useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import '../contextAPI/ContextApi';
import {contactContext} from '../contextAPI/ContextApi';

const List = ({item}) => {
  const {contact, setContact} = useContext(contactContext);

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#12372A',
        padding: 10,
        margin: 10,
        borderTopLeftRadius: 30,
        borderBottomRightRadius: 30,
      }}>
      <Image
        style={{
          width: 60,
          height: 60,
          borderRadius: 60 / 2,

          resizeMode: 'stretch',
          borderWidth: 1,
          borderColor: 'white',
        }}
        source={{
          uri: item.url,
        }}
      />
      <Text style={{fontSize: 20, color: 'white', fontWeight: '700'}}>
        {item.name}{' '}
      </Text>

      {contact.some(c => c.id === item.id) ? (
        <TouchableOpacity
          onPress={() => setContact(contact.filter(c => c.id !== item.id))}>
          <MaterialCommunityIcons name="delete" size={30} color={'white'} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => setContact([...contact, item])}>
          <MaterialCommunityIcons name="star" size={30} color={'white'} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default List;
