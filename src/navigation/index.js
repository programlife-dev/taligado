import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import UserContextProvider from '../contexts/UserContext';

// import DrawerStack from './DrawerStack';
import AppStack from './AppStack';

export default props => (
  <UserContextProvider>
    <NavigationContainer>
      <StatusBar
        animated={true}
        backgroundColor="#142340"
        barStyle="light-content"
        showHideTransition="slide"
      />
      <AppStack />
    </NavigationContainer>
  </UserContextProvider>
);


