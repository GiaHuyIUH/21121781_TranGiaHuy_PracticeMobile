import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';
import Screen3 from '../screens/Screen3';

import {UserProvider} from '../context/UserContext';

const Stack = createStackNavigator();

export default function RootNavigator() {
  
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Screen1} />
          <Stack.Screen name="Detail" component={Screen2}/>
          <Stack.Screen name="Add" component={Screen3}/>
        </Stack.Navigator>
       
      </NavigationContainer>
    </UserProvider>
  );
}
