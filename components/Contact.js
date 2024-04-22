import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import List from './List';
import {useNavigation} from '@react-navigation/native';
import {contactContext} from '../contextAPI/ContextApi';
const Contact = () => {
  const {newContact} = useContext(contactContext);

  const navigation = useNavigation();
  const data = [
    {
      id: 1,
      name: 'Alferdo Mangoo',
      url: 'https://images.pexels.com/photos/848117/pexels-photo-848117.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 2,
      name: 'Alexendra Alice',
      url: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 3,
      name: 'Lucy',
      url: 'https://images.pexels.com/photos/1036620/pexels-photo-1036620.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 4,
      name: 'Bob Marley',
      url: 'https://images.pexels.com/photos/93827/pexels-photo-93827.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 5,
      name: 'Bakkena Septimus',
      url: 'https://images.pexels.com/photos/709188/pexels-photo-709188.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 6,
      name: 'Chloe',
      url: 'https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 7,
      name: 'Katie',
      url: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 8,
      name: 'Demi Lovato',
      url: 'https://images.pexels.com/photos/594421/pexels-photo-594421.jpeg?auto=compress&cs=tinysrgb&w=400',
    },

    {
      id: 9,
      name: 'Sofie Marrie',
      url: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400',
    },

    {
      id: 10,
      name: 'Stefan Stefancik',
      url: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 11,
      name: 'Rosey Mark',
      url: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 12,
      name: 'David Miller',
      url: 'https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 13,
      name: 'Riley Marsh',
      url: 'https://images.pexels.com/photos/1270076/pexels-photo-1270076.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 14,
      name: 'Daryl Mitchell',
      url: 'https://images.pexels.com/photos/1205033/pexels-photo-1205033.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 15,
      name: 'Kane Williamson',
      url: 'https://images.pexels.com/photos/842548/pexels-photo-842548.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 16,
      name: 'Shane Watson',
      url: 'https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 17,
      name: 'Eva Justine',
      url: 'https://images.pexels.com/photos/247322/pexels-photo-247322.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 18,
      name: 'Marie Christina',
      url: 'https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 19,
      name: 'Julie Suthar',
      url: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      id: 20,
      name: 'Mariam Espacio',
      url: 'https://images.pexels.com/photos/1874726/pexels-photo-1874726.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const finalData = [...data, ...newContact];

  const [search, setSearch] = useState('');
  const [filterdata, setFilterdata] = useState([]);
  useEffect(() => {
    setFilterdata(
      finalData.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase()),
      ),
    );
  }, [search]);
  return (
    <View>
      <View style={{height: '100%'}}>
        <View style={{display: 'flex', alignItems: 'flex-end', margin: 10}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('AddContact')}
            style={{
              width: 200,
              height: 50,
              borderRadius: 10,
              backgroundColor: '#000000',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 20, color: 'white'}}>Add New Contact</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TextInput
            placeholderTextColor={'#12372A'}
            placeholder="Search Your Contact"
            onChangeText={e => setSearch(e)}
            style={{
              width: '100%',
              borderWidth: 1,
              borderColor: '#12372A',
              borderRadius: 10,
              marginHorizontal: 5,
              marginVertical: 10,
              paddingHorizontal: 10,
              paddingVertical: 10,
              fontWeight: 'bold',
            }}
          />
        </View>

        <ScrollView>
          {filterdata.map((item, id) => (
            <List item={item} key={id} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Contact;
