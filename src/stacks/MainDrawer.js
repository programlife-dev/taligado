import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Profile from '../screens/Profile';
import Home from '../screens/Home';

const Drawer = createDrawerNavigator();

const MainDrawer = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Profile" component={Profile} />
        </Drawer.Navigator>
    );
}

export default MainDrawer;