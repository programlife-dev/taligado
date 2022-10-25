//import liraries
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dimensions, View, Text, StyleSheet, TextInput, Image, FlatList, Alert } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import { WebView } from 'react-native-webview';

import Carousel from 'react-native-reanimated-carousel';
import Animated, {
    Extrapolate,
    interpolate,
    useAnimatedStyle,
    useSharedValue,
} from 'react-native-reanimated';

import Feather from 'react-native-vector-icons/Feather';
import {
    Container,
    SearchArea

} from './styles';



import item from './items';
import objects from './objects';

import Api from '../../api/Api';

// create a component
export default ({ navigation }) => {
    const BASE_API = 'https://api.programlife.com.br/taligado';

    // const base_img_uri = `https://api.programlife.com.br/taligado/public/assets/uploads`;

    const [search, setSearch] = useState('');
    const [customersList, setCustomersList] = useState('');
    const [customersSeachList, setCustomersSeachList] = useState(customersList);

    useEffect(() => {

        const getCustomers = async () => {

            //   const customers = await AsyncStorage.getItem('customers');
            const customers = null;
            // setCustomersList(customers);
            // console.log(customers);
            // setCustomersList(customers);

            if (!customers) {
                let req = await Api.getCustomers();


                if (req) {
                    // await AsyncStorage.setItem('customers', req); 
                    setCustomersList(req);


                } else {
                    Alert('Falha ao carregar lista de clientes!');
                }
            } else {
                setCustomersList(customers);
            }
        }

        getCustomers();

        if (search === '') {
            setCustomersSeachList(customersList);
        } else {
            setCustomersSeachList(
                customersList.filter(
                    (i) => i.customer_lastname.toLowerCase().indexOf(search.toLowerCase()) > -1
                )
            );
        }
    }, [search])

    useEffect(() => {

        const getCustomers = async () => {

            //   const customers = await AsyncStorage.getItem('customers');
            const customers = null;
            // setCustomersList(customers);
            // console.log(customers);
            // setCustomersList(customers);

            if (!customers) {
                let req = await Api.getCustomers();


                if (req) {
                    // await AsyncStorage.setItem('customers', req); 
                    setCustomersList(req);
                    setCustomersSeachList(req);


                } else {
                    Alert('Falha ao carregar lista de clientes!');
                }
            } else {
                setCustomersList(customers);
            }
        }

        getCustomers();

    }, [])

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
    const renderItem = ({ item }) => (

        <View style={{ flex: 1, marginBottom: 10, height: 100, flexDirection: "row", backgroundColor: '#fff', borderRadius: 10 }}>
            <View style={{ flex: 1 }}>
                <Image
                    style={styles.imgListStyle}
                    source={{
                        uri: `${BASE_API}/public/assets/uploads/customers/${item.idCustomer}/${item.customer_image}`,
                    }}
                />
            </View>
            <View style={{ flex: 3, marginStart: 10, marginTop: 10 }}>
                <Text>{item.customer_name}</Text>
                <Text>{item.customer_telephone}</Text>
                <Text>{item.customer_address}</Text>
            </View>

        </View>

    );

    return (
        <Container>

            <View style={{ flex: 1, marginTop: 20, }}>


                <SearchBar
                    inputContainerStyle={{ backgroundColor: 'white' }}
                    leftIconContainerStyle={{ backgroundColor: 'white' }}
                    inputStyle={{ backgroundColor: 'white' }}
                    containerStyle={{
                        backgroundColor: '#142340',
                        justifyContent: 'space-around',
                        borderTopWidth: 0,
                        borderBottomWidth: 0,
                    }}

                    round
                    searchIcon={{ size: 24 }}
                    onChangeText={t => setSearch(t)}
                    onClear={(text) => { }}
                    placeholder="Pesquisar"
                    value={search}
                />
                <Carousel

                    loop
                    width={width}
                    height={width / 3}
                    autoPlay={true}
                    data={objects}
                    scrollAnimationDuration={3000}
                    mode="parallax"
                    modeConfig={{
                        parallaxScrollingScale: 0.9,
                        parallaxScrollingOffset: 50,
                    }}

                    // onSnapToItem={objects => objects.id}
                    renderItem={renderItemC}
                />

                <View style={{ flex: 1, marginTop: 5, paddingStart: 10, paddingEnd: 10, }}>

                    {customersList != '' ?

                        < FlatList
                            style={{ marginTop: 10 }}
                            data={customersSeachList}
                            renderItem={renderItem}
                            keyExtractor={item => item.idCustomer}
                        />
                        : null
                    }



                </View>
            </View>
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    itemStyle: {
        padding: 10,
    },
    imgStyle: {
        flex: 1,
        width: '100%',
        height: 34,
        backgroundColor: 'white',
        borderRadius: 10,

    },
    imgListStyle: {
        flex: 1,
        width: '100%',
        height: 34,
        backgroundColor: 'white',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,

    }

});



