import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {contactContext} from '../contextAPI/ContextApi';

const CreateContact = () => {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [phone, setPhone] = useState('');
  const [url, setUrl] = useState('');
  const {newContact, setNewContact} = useContext(contactContext);
  function save() {
    setNewContact([...newContact, {name, id, phone, url}]);
    console.log(newContact);
    setId('');
    setName('');
    setUrl('');
    setName('');
    setPhone('');
  }
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TextInput
          style={styles.input}
          placeholder=" Name"
          placeholderTextColor={'white'}
          value={name}
          onChangeText={text => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder=" Phone Number"
          placeholderTextColor={'white'}
          value={phone}
          onChangeText={text => setPhone(text)}
        />
        <TextInput
          style={styles.input}
          placeholder=" Id Number"
          placeholderTextColor={'white'}
          value={id}
          onChangeText={text => setId(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Profile Picture"
          placeholderTextColor={'white'}
          value={url}
          onChangeText={text => setUrl(text)}
        />
        <TouchableOpacity style={styles.btn} onPress={save}>
          <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
            Save
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default CreateContact;
const styles = StyleSheet.create({
  input: {
    backgroundColor: '#12372A',
    margin: 10,
    padding: 10,
    fontSize: 16,
    borderRadius: 10,
    color: 'white',
  },
  btn: {
    backgroundColor: '#000',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    height: 70,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
