//import liraries
import React, { useState, useContext, useEffect } from 'react';
import { Keyboard } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../../contexts/UserContext';
import {
    Container,
    InputArea,
    IconArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold,
    SignSkipButton,
    SignSkipButtonText
} from './styles';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';

import Api from '../../api/Api';

import SignInput from '../../components/SignInput';
import LoginSVG from '../../assets/images/misc/login.svg';

import EmailIcon from '../../assets/images/svg/email.svg';
import LockIcon from '../../assets/images/svg/lock.svg';

import InputField from '../../components/InputField';

export default () => {
    const [keyboardStatus, setKeyboardStatus] = useState(false);

    useEffect(() => {
        const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
            setKeyboardStatus(true);
        });
        const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
            setKeyboardStatus(false);
        });
    }, []);


    const { dispatch: userDispatch } = useContext(UserContext);
    const navigation = useNavigation();

    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleSignClick = async () => {
        if (emailField != '' && passwordField != '') {

            let json = await Api.signIn(emailField, passwordField);

            if (json.token) {
                await AsyncStorage.setItem('token', json.token);

                userDispatch({
                    type: 'setAvatar',
                    payload: {
                        avatar: json.data.avatar
                    }
                });

                navigation.reset({
                    routes: [{ name: 'Home' }]
                });
            } else {
                alert('E-mail e/ou senha errados!');
            }

        } else {
            alert("Por favor, preencha todos os campos!");
        }
    }
    const handleSignInClick = () => {
        // navigation.reset({
        //     routes: [{ name: 'SignUp' }]
        // });
        navigation.navigate('SignIn');
    }
    const handleMessageButtonClick = () => {
        // navigation.reset({
        //     routes: [{ name: 'Home' }]
        // });
        navigation.navigate('Home');
    }


    return (

        <Container>
            {!keyboardStatus ?
                <IconArea>
                    <LoginSVG
                        height={300}
                        width={300}
                        style={{ transform: [{ rotate: '-5deg' }] }}
                    />
                </IconArea>
                : false}


            <InputArea>

                <InputField
                    label={'Nome'}
                    icon={
                        <AntDesign
                            name="user"
                            size={20}
                            color="#ccc"
                            style={{ marginRight: 5 }}
                        />
                    }
                    keyboardType="email-address"
                    onChangeText={t => setEmailField(t)}
                />

                <InputField
                    label={'E-mail'}
                    icon={
                        <MaterialIcons
                            name="alternate-email"
                            size={20}
                            color="#ccc"
                            style={{ marginRight: 5 }}
                        />
                    }
                    keyboardType="email-address"
                    onChangeText={t => setEmailField(t)}
                />

                <InputField
                    label={'Senha'}
                    icon={
                        <Ionicons
                            name="ios-lock-closed-outline"
                            size={20}
                            color="#ccc"
                            style={{ marginRight: 5 }}
                        />
                    }
                    inputType="password"
                    onChangeText={t => setPasswordField(t)}
                />

                <CustomButton onPress={handleSignClick}>
                    <CustomButtonText>Entrar</CustomButtonText>
                </CustomButton>
                <SignMessageButton onPress={handleSignInClick}>
                    <SignMessageButtonText>Já possui uma conta?</SignMessageButtonText>
                    <SignMessageButtonTextBold>Faça Login</SignMessageButtonTextBold>
                </SignMessageButton>

            </InputArea>
            <SignSkipButton onPress={handleMessageButtonClick}>
                <SignSkipButtonText>Pular
                    <Ionicons
                        name="arrow-redo-sharp"
                        size={20}
                        color="#ccc"
                        style={{ marginRight: 5 }}
                    />
                </SignSkipButtonText>
            </SignSkipButton>

        </Container>


    );
};


