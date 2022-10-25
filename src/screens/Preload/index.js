
import React, { useEffect } from 'react';
import { Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import { Container, LoadingIcon } from './styles';

import Api from '../../api/Api';

import LoginSVG from '../../assets/images/misc/login.svg';

export default () => {

    // console.log('Preload init');

    const navigation = useNavigation();

    useEffect(() => {
        const checkToken = async () => {

            const token = await AsyncStorage.getItem('token');

          

            if (token) {
                console.log('Preload init: ', token);
                // navigation.navigate('Home');
                // navigation.navigate('SignIn');

            } else {
                // navigation.reset({
                //     routes: [{ name: 'SignIn' }]
                // });
            }

        }
        checkToken();
    }, []);

    return (
        <Container>
            <LoginSVG
                height={300}
                width={300}
                style={{ transform: [{ rotate: '-5deg' }] }}
            />
            <LoadingIcon size="large" color="#FFFFFF" />

        </Container>
    );
};


