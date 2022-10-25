//import liraries
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dimensions, View, Text, StyleSheet, Image, FlatList, Alert } from 'react-native';
import { SearchBar } from 'react-native-elements';
import Carousel from 'react-native-reanimated-carousel';
import { Container } from './styles';
import objects from './objects';
import Api, { BASE_API } from '../../api/Api';

export default ({ navigation }) => {
    
    const [search, setSearch] = useState('');
    const [customersList, setCustomersList] = useState('');
    const [customersSearchList, setCustomersSearchList] = useState(customersList);

    useEffect(() => {
        const getCustomers = async () => {
            let req = await Api.getCustomers()

            if (!req) {
                const jsonReq = JSON.stringify(req)
                await AsyncStorage.setItem('customers', jsonReq);
                setCustomersList(req)
                setCustomersSearchList(req)
            } else {
                const customersStorage = await AsyncStorage.getItem('customers')
                const customers = (customersStorage && customersStorage != '' ? JSON.parse(customersStorage) : null)

                if (customers) {
                    setCustomersList(customers);
                    setCustomersSearchList(customers);
                } else {
                    alert('Falha ao carregar lista de lojas e contatos!');
                }
            }
        }
        getCustomers();
    }, [])

    useEffect(() => {

        if (search === '') {
            setCustomersSearchList(customersList);
        } else {
            setCustomersSearchList(
                customersList.filter(
                    (i) =>
                        i.customer_lastname.toLowerCase().indexOf(search.toLowerCase()) > -1 ||
                        i.customer_telephone.toLowerCase().indexOf(search.toLowerCase()) > -1 ||
                        i.customer_address.toLowerCase().indexOf(search.toLowerCase()) > -1
                )
            );
        }

    }, [search])

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
                            data={customersSearchList}
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



