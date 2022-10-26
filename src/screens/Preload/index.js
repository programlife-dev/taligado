
import React from 'react';
// import { View, Text } from 'react-native';
import { Container, LoadingIcon } from './styles';


import LoginSVG from '../../assets/images/misc/login.svg';

export default () => {


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


