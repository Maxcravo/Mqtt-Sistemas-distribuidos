import React from 'react';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import Home from './pages/Home';
import SendData from './pages/SendData';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ title: 'Início' }} />
        <Stack.Screen name="SendData" component={SendData} options={{ title: 'Enviar Mensagem' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
