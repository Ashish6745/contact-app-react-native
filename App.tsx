import {View, Text, Image, StatusBar} from 'react-native';
import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Favourites from './components/Favourites';
import Contact from './components/Contact';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {contactContext} from './contextAPI/ContextApi';
import {createStackNavigator} from '@react-navigation/stack';
import CreateContact from './components/CreateContact';

const stack = createStackNavigator();
const Stacks = () => {
  return (
    <stack.Navigator>
      <stack.Screen name="Contact" component={Contact} options={{
        headerShown:false
      }}/>
      <stack.Screen name="AddContact" component={CreateContact} options={{
        headerShown:false
      }}/>
    </stack.Navigator>
  );
};
const App = () => {
  const bottom = createBottomTabNavigator();
  const {contact} = useContext(contactContext);
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#12372A'} />
      <bottom.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'white',
          tabBarStyle: {
            backgroundColor: '#12372A',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
          headerStyle: {
            backgroundColor: '#12372A',
            height: 80,
          },
        }}>
        <bottom.Screen
          name="stack"
          component={Stacks}
          options={{
           
            tabBarIcon: () => (
              <MaterialCommunityIcons name="contacts" size={30} color="white" />
            ),
            tabBarLabel: '',

            headerRight: () => (
              <Image
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50 / 2,
                  marginRight: 10,
                  resizeMode: 'stretch',
                  borderWidth: 1,
                  borderColor: 'white',
                }}
                source={{
                  uri: 'https://images.pexels.com/photos/1760901/pexels-photo-1760901.jpeg?auto=compress&cs=tinysrgb&w=400',
                }}
              />
            ),
            headerTitle: '',
            headerTintColor: 'white',
            headerLeft: () => (
              <View>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 25,
                    fontWeight: 'bold',
                    marginLeft: 10,
                  }}>
                  Contacts
                </Text>
              </View>
            ),
          }}
        />
        <bottom.Screen
          name="Favourties"
          component={Favourites}
          options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="star-outline"
                size={30}
                color="white"
              />
            ),
            headerTitle: '',
            tabBarBadge: contact.length,
            tabBarBadgeStyle: {
              color: '#12372A',
              backgroundColor: 'white',
              fontWeight: 'bold',
            },
            headerTintColor: 'white',
            tabBarLabel: '',
            headerLeft: () => (
              <View>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 25,
                    fontWeight: 'bold',
                    marginLeft: 10,
                  }}>
                  Favourites
                </Text>
              </View>
            ),
          }}
        />
      </bottom.Navigator>
    </NavigationContainer>
  );
};

export default App;
