import React from 'react'
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import {
    HomeNavigation,
    ProfileNavigation
} from './ScreenStack';

const Tab = createBottomTabNavigator();

export function HomeTabNavigation() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                unmountOnBlur: true,
                tabBarShowLabel: false,
                tabBarStyle: { height: 50 }
            }}
        >
            <Tab.Screen
                name='HomeTab'
                component={HomeNavigation}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <>
                            <FontAwesome5
                                name='home'
                                size={20}
                                color={focused ? '#0a9396' : '#d62828'}
                            />
                            <Text
                                allowFontScaling={false}
                                style={{
                                    color: focused ? '#0a9396' : '#d62828',
                                    width: 50,
                                    fontSize: 11,
                                    textAlign: 'center'
                                }}>
                                Home
                            </Text>
                        </>
                    )
                }}
            />          
        </Tab.Navigator>
    );
}

export function ProfileTabNavigation() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                unmountOnBlur: true,
                tabBarShowLabel: false,
                tabBarStyle: { height: 50 }
            }}
        >
            <Tab.Screen
                name='ProfileTab'
                component={ProfileNavigation}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <>
                            <FontAwesome5
                                name='home'
                                size={20}
                                color={focused ? '#0a9396' : '#d62828'}
                            />
                            <Text
                                allowFontScaling={false}
                                style={{
                                    color: focused ? '#0a9396' : '#d62828',
                                    width: 50,
                                    fontSize: 11,
                                    textAlign: 'center'
                                }}>
                                Profile
                            </Text>
                        </>
                    )
                }}
            />
        </Tab.Navigator>
    );
}