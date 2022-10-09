//import liraries
import React, { useState, useContext, useEffect } from 'react';
import { Keyboard, View, TouchableOpacity} from 'react-native';
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

import Api from '../../api/Api';
import LoginSVG from '../../assets/images/misc/login.svg';
import GoogleSVG from '../../assets/images/misc/google.svg';
import FacebookSVG from '../../assets/images/misc/facebook.svg';
import TwitterSVG from '../../assets/images/misc/twitter.svg';

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
    const handleSignUpClick = () => {
        // navigation.reset({
        //     routes: [{ name: 'SignUp' }]
        // });
        navigation.navigate('SignUp');
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
                        // fieldButtonLabel={"Esqueceu?"}
                        onChangeText={t => setPasswordField(t)}
                    />

                    <CustomButton onPress={handleSignClick}>
                        <CustomButtonText>Entrar</CustomButtonText>
                    </CustomButton>

                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 30,
                            marginBottom: 30,
                        }}>
                        <TouchableOpacity
                            onPress={() => { }}
                            style={{
                                borderColor: '#ddd',
                                borderWidth: 2,
                                borderRadius: 10,
                                paddingHorizontal: 30,
                                paddingVertical: 10,
                            }}>
                            <GoogleSVG height={24} width={24} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => { }}
                            style={{
                                borderColor: '#ddd',
                                borderWidth: 2,
                                borderRadius: 10,
                                paddingHorizontal: 30,
                                paddingVertical: 10,
                            }}>
                            <FacebookSVG height={24} width={24} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => { }}
                            style={{
                                borderColor: '#ddd',
                                borderWidth: 2,
                                borderRadius: 10,
                                paddingHorizontal: 30,
                                paddingVertical: 10,
                            }}>
                            <TwitterSVG height={24} width={24} />
                        </TouchableOpacity>
                    </View>


                    <SignMessageButton onPress={handleSignUpClick}>
                        <SignMessageButtonText>Ainda não possui uma conta?</SignMessageButtonText>
                        <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
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


