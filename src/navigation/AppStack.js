import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
    Home,
    CustomerProfile
} from '../screens';

const Stack = createNativeStackNavigator();

export default () => (
    <Stack.Navigator
        screenOptions={{ headerShown: false }}
    >

        
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Customer Profile" component={CustomerProfile} />

    </Stack.Navigator>
)

