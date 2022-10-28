//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet , TextInput} from 'react-native';
import {
    Container,
    SearchArea   

} from './styles';

import Feather from 'react-native-vector-icons/Feather';

// create a component
export default () => {


    return (
        <Container>
            
            <Text>Customer Profile</Text>           

        </Container>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app

