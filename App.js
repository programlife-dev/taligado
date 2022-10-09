import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserContextProvider from './src/contexts/UserContext';

import AuthStack from './src/stacks/AuthStack';
// import MainStack from './src/stacks/MainStack';
// import MainStack from './src/stacks/MainStack';

function App() {
  // const [showAuthScreen, setShowAuthScreen] = useState(true);

  // useEffect(() => {
  //   const checkToken = async () => {

  //     if (await AsyncStorage.getItem('token')) {
  //       setShowAuthScreen(false);
  //     }

  //   }
  //   checkToken();

  // }, []);

  return (
    <UserContextProvider>
      <NavigationContainer>
        <StatusBar
          animated={true}
          backgroundColor="#142340"
          barStyle="light-content"
          showHideTransition="slide"
        />
        <AuthStack />

        {/* {showAuthScreen ? <AuthStack /> : <MainStack />} */}

      </NavigationContainer>
    </UserContextProvider>
  );
}

export default App;