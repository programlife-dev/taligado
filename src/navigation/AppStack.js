import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
    Home,
    Profile
} from '../screens';

const Stack = createNativeStackNavigator();

export default () => (
    <Stack.Navigator
        screenOptions={{ headerShown: false }}
    >

        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
)

