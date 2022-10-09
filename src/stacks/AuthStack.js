import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import Preload from '../screens/Preload';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>       
      <Stack.Screen name="Preload" component={Preload} /> 
      <Stack.Screen name="SignIn" component={SignIn} />   
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default AuthStack;