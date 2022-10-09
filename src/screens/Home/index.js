//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet , TextInput} from 'react-native';
import {
    Container,
    SearchArea   

} from './styles';

import Feather from 'react-native-vector-icons/Feather';

// create a component
const MyComponent = () => {
    return (
        <Container>
            
            <Text>Home</Text>
            


            
            {/* <View
                style={{
                    flexDirection: 'row',
                    borderColor: '#C6C6C6',
                    borderWidth: 1,
                    borderRadius: 8,
                    paddingHorizontal: 10,
                    paddingVertical: 8,
                }}>
                <Feather
                    name="search"
                    size={20}
                    color="#C6C6C6"
                    style={{ marginRight: 5 }}
                />
                <TextInput placeholder="Search" />
            </View> */}


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
export default MyComponent;
