import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import * as SplashScreen from 'expo-splash-screen';
import Api from '../api/Api';

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

const CustomDrawer = (props) => {

// console.log(props.navigation.reset);
  // const navigation = useNavigation();

  const handleLogoutClick = async () => {
    // console.log('Click');
    await Api.logout();
    props.navigation.reset({
      routes: [{ name: 'SignIn' }]
    });
  }

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

  } else {
    SplashScreen.hideAsync();

    return (
      <View style={{ flex: 1 }}>
        <DrawerContentScrollView
          {...props}
          contentContainerStyle={{ backgroundColor: '#8200d6' }}>

          {/* <View style={{ flex: 1, backgroundColor: '#8200d6', paddingTop: 10, height:100 }}>

          </View> */}
          <ImageBackground
            source={require('../assets/images/menu-bg.jpeg')}
            style={{ padding: 20 }}>
            <Image
              source={require('../assets/images/user-profile.jpg')}
              style={{ height: 80, width: 80, borderRadius: 40, marginBottom: 10 }}
            />
            <Text
              style={{
                color: '#fff',
                fontSize: 18,
                fontFamily: 'Roboto_500Medium',
                marginBottom: 5,
              }}>
              Thiago Aurélio
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <Text
                style={{
                  color: '#fff',
                  fontFamily: 'Roboto_400Regular',
                  marginRight: 5,
                }}>
                Master
              </Text>
              <FontAwesome5 name="coins" size={14} color="#fff" />
              <FontAwesome5 name="coins" size={14} color="#fff" />
              <FontAwesome5 name="coins" size={14} color="#fff" />
            </View>
          </ImageBackground>
          <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 10 }}>
            <DrawerItemList {...props} />
          </View>
        </DrawerContentScrollView>
        <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#ccc' }}>
          <TouchableOpacity onPress={() => { }} style={{ paddingVertical: 15 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons name="share-social-outline" size={22} />
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: 'Roboto_500Medium',
                  marginLeft: 5,
                }}>
                Tell a Friend
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLogoutClick} style={{ paddingVertical: 15 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons name="exit-outline" size={22} />
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: 'Roboto_500Medium',
                  marginLeft: 5,
                }}>
                Logout
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

export default CustomDrawer;
