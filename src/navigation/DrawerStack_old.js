import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import ScreenStack from './ScreenStack';

const Drawer = createDrawerNavigator();

export default () => {
    return (
        <Drawer.Navigator screenOptions={{headerShown: false}}>
            <Drawer.Screen name="HomeDrawer" component={ScreenStack} />           
        </Drawer.Navigator>
    );
}