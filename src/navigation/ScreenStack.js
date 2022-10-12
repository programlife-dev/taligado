import React from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabsNavigation from './TabStack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {
    Preload,
    SignIn,
    SignUp,

    Home,
    Profile
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
        <Stack.Screen name="Home" component={TabsNavigation} />
    </Stack.Navigator>
)

export function HomeNavigation({ navigation }) {
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: true,
            title: '',
            headerLeft: () => (
                <View style={{ margin: 10 }}>
                    <FontAwesome5
                        name="bars"
                        size={25}
                        color={"#000"}
                        onPress={() => navigation.openDrawer()}
                    />
                </View>
            )
        }}
        >
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )

}
export function ProfileNavigation() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    )

}