
import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';


import { Container, LoadingIcon } from './styles';

import LoginSVG from '../../assets/images/misc/login.svg';

export default () => {
    const navigation = useNavigation();

    useEffect(() => {
        const checkToken = async () => {

            const token = await AsyncStorage.getItem('token');

            if (token) {                
                navigation.navigate('Home');
              
            } else {
                navigation.reset({
                    routes: [{ name: 'SignIn' }]
                });
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


