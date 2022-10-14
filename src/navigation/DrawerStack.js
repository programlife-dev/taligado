import React, { useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CustomDrawer from '../components/CustomDrawer';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {
    Home,
    Profile
} from '../screens';

const Drawer = createDrawerNavigator();

import * as SplashScreen from 'expo-splash-screen';

import {
    useFonts,
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic,
} from '@expo-google-fonts/roboto';

SplashScreen.preventAutoHideAsync();


// export default HomeStack = () => {


//     let [fontsLoaded] = useFonts({
//         Roboto_100Thin,
//         Roboto_100Thin_Italic,
//         Roboto_300Light,
//         Roboto_300Light_Italic,
//         Roboto_400Regular,
//         Roboto_400Regular_Italic,
//         Roboto_500Medium,
//         Roboto_500Medium_Italic,
//         Roboto_700Bold,
//         Roboto_700Bold_Italic,
//         Roboto_900Black,
//         Roboto_900Black_Italic,
//     });

//     if (!fontsLoaded) {
//         // return <AppLoading />;


//     } else {
//         SplashScreen.hideAsync();

//         return (
//             <Drawer.Navigator
//                 drawerContent={props => <CustomDrawer {...props} />}
//                 screenOptions={{
//                     headerShown: false,
//                     drawerActiveBackgroundColor: '#aa18ea',
//                     drawerActiveTintColor: '#fff',
//                     drawerInactiveTintColor: '#333',
//                     drawerLabelStyle: {
//                         marginLeft: -25,
//                         fontFamily: 'Roboto_500Medium',
//                         fontSize: 15,
//                     },
//                 }}>
//                 <Drawer.Screen
//                     name="HomeDrawer"
//                     component={Home}
//                     options={{
//                         drawerIcon: ({ color }) => (
//                             <Ionicons name="home-outline" size={22} color={color} />
//                         ),
//                     }}
//                 />
//                 <Drawer.Screen
//                     name="ProfileDrawer"
//                     component={Profile}
//                     options={{
//                         drawerIcon: ({ color }) => (
//                             <Ionicons name="person-outline" size={22} color={color} />
//                         ),
//                     }}
//                 />
//             </Drawer.Navigator>
//         );
//     }
// };


export function HomeDrawerNavigation() {
   
    let [fontsLoaded] = useFonts({
        Roboto_100Thin,
        Roboto_100Thin_Italic,
        Roboto_300Light,
        Roboto_300Light_Italic,
        Roboto_400Regular,
        Roboto_400Regular_Italic,
        Roboto_500Medium,
        Roboto_500Medium_Italic,
        Roboto_700Bold,
        Roboto_700Bold_Italic,
        Roboto_900Black,
        Roboto_900Black_Italic,
    });

    if (!fontsLoaded) {
        // return <AppLoading />;


    } else {
        SplashScreen.hideAsync();

        return (
            <Drawer.Navigator
                drawerContent={props => <CustomDrawer {...props} />}
                screenOptions={{
                    headerShown: false,
                    drawerActiveBackgroundColor: '#aa18ea',
                    drawerActiveTintColor: '#fff',
                    drawerInactiveTintColor: '#333',
                    drawerLabelStyle: {
                        marginLeft: -25,
                        fontFamily: 'Roboto_500Medium',
                        fontSize: 15,
                    },
                }}>
                <Drawer.Screen
                    name="HomeDrawer"
                    component={Home}                   
                    options={{
                        drawerIcon: ({ color }) => (
                            <Ionicons name="home-outline" size={22} color={color} />
                        ),
                    }}
                />               
            </Drawer.Navigator>
        );
    }
}


