//import liraries
import React, { Component } from 'react';
import { Dimensions, View, Text, StyleSheet, TextInput, Image } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { SeparatorItem } from '../../components/SeparatorItem';
import {
    Container,
} from './styles';
import objects from '../Home/objects';
import { useNavigation } from '@react-navigation/native';

// import Feather from 'react-native-vector-icons/Feather';

// create a component
export default ({ navigation, route }) => {

    const currentCustomer = route.params.customer;


    const width = Dimensions.get('window').width;

    const renderItemC = ({ item }) => (
        <View
            style={{
                flex: 1,
                borderWidth: 1,
                justifyContent: 'center',
                backgroundColor: '#fff',
                borderRadius: 15,
                borderColor: 'rgba(158, 150, 150, .1)',
                padding: 10,
                resizeMode: 'cover',
            }}
        >
            <Image
                style={styles.imgStyle}
                source={{
                    uri: item.avatar,
                }}
            />
        </View>
    );

    return (
        <Container>

            <Carousel

                loop
                width={width}
                height={width / 3}
                autoPlay={true}
                data={objects}
                scrollAnimationDuration={5000}
                // mode="parallax"
                modeConfig={{
                    parallaxScrollingScale: 0.9,
                    parallaxScrollingOffset: 50,
                }}

                // onSnapToItem={objects => objects.id}
                renderItem={renderItemC}
            />
            <View style={styles.customerNameArea}>
                <Text style={styles.customerNameText}>{currentCustomer.customer_lastname}</Text>
            </View>
            <View style={styles.customerInfoArea}>
                <View style={styles.customerTextArea}>
                    <Text style={styles.customerInfoTitle}>Telefone:</Text>
                    <Text style={styles.customerInfoSubTitle}>{currentCustomer.customer_telephone}</Text>
                </View>
                <SeparatorItem />
                <View style={styles.customerTextArea}>
                    <Text style={styles.customerInfoTitle}>Endereço:</Text>
                    <Text style={styles.customerInfoSubTitle}>{currentCustomer.customer_address}</Text>
                </View>
                <SeparatorItem />
                <View style={styles.customerTextArea}>
                    <Text style={styles.customerInfoTitle}>Horário de atendimento:</Text>
                    <Text style={styles.customerInfoSubTitle}>Segunda à sexta das 8:00h às 21:00h</Text>
                    <Text style={styles.customerInfoSubTitle}>Sábado das 8:00h às 12:00h</Text>

                </View>
                <SeparatorItem />
                <View style={styles.customerTextArea}>
                    <Text style={styles.customerInfoTitle}>Sobre:</Text>
                    <Text style={styles.customerInfoSubTitle}>A {currentCustomer.customer_lastname} é sua melhor opção. Temos novidades toda semana, venham conferir!</Text>

                </View>
                <SeparatorItem />
            </View>

        </Container>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    imgStyle: {
        flex: 1,
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        borderRadius: 10,

    },
    customerNameArea: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 50,
        backgroundColor: '#142340',
    },
    customerNameText: {
        color: 'white',

    },
    customerInfoArea: {
        flex: 1,
        padding: 10,
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
    },
    customerTextArea: {
        marginTop: 15,
        marginBottom: 15,
    },
    customerInfoTitle: {
        color: '#000',
        fontWeight: 'bold',
        marginBottom: 5,
    }, customerInfoSubTitle: {
        color: '#000',
        marginBottom: 5,
    },

});



