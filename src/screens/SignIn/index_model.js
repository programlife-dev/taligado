//import liraries
import React, { useState, useContext, useEffect } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import Api from '../../api/Api';

// create a component
const MyComponent = () => {

    const [emailField, setEmailField] = useState('thiago@gmail.com');
    const [passwordField, setPasswordField] = useState('passsaa');

    const [text, onChangeText] = React.useState("Useless Text");
    const [number, onChangeNumber] = React.useState(null);

    const handleSignClick = async () => {
        // http://api.localhost/taligado/public/assets/uploads/json/users.json
        // fetch('http://localhost:80/api/taligado/products', { method: 'GET' })
        //     .then((response) => response.json())
        //     .then((json) => console.log(json));

            let json = await Api.getProducts();
            console.log(json);

        // let url = "https://api.programlife.com.br/taligado/products";
        // fetch(url)
        //     .then(function (response) {

        //         return response.json();
        //     })
        //     .then(function (json) {
        //         alert(JSON.stringify(json))
        //         console.log(json)
        //     })
        //     .catch(function (error) {
        //         console.log('There has been a problem with your fetch operation: ' + error.message);
              
        //         // ADD THIS THROW error
        //         throw error;
        //     });
    }
    return (
        <SafeAreaView>
            <TextInput
                style={styles.input}
                onChangeText={t => setEmailField(t)}
                placeholder="Email"
                keyboardType="text"
            />
            <TextInput
                style={styles.input}
                onChangeText={t => setPasswordField(t)}
                placeholder="Senha"
                keyboardType="text"
            />
            <TouchableOpacity onPress={handleSignClick}>
                <Text>Entrar</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});



//make this component available to the app
export default MyComponent;
