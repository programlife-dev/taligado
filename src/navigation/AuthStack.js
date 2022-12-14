import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
    Preload,
    SignIn,
    SignUp,   
} from '../screens';

const Stack = createNativeStackNavigator();

export default () => (
    <Stack.Navigator
        initialRouteName='Preload' // Auth Controller
        screenOptions={{ headerShown: false }}
    >
        <Stack.Screen name="Preload" component={Preload} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />       
    </Stack.Navigator>
)

