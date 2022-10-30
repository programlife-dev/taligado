//import liraries
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dimensions, View, Text, StyleSheet, Image, FlatList, Alert, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
import Carousel from 'react-native-reanimated-carousel';
import { Container } from './styles';
import objects from './objects';
import { SeparatorItem } from '../../components/SeparatorItem';
import Api, { BASE_API } from '../../api/Api';


export const useDebounce = (value, delay) => {
    const [debouncedValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebounceValue(value);
        }, delay);

        return () => clearTimeout(timeoutId);
    }, [value])
 
    return debouncedValue;
}

export default ({ navigation }) => {

    const [search, setSearch] = useState('');
    const [customersList, setCustomersList] = useState('');
    const [customersSearchList, setCustomersSearchList] = useState(customersList);    
    const debouncedValue = useDebounce(search, 1000);





    useEffect(() => {
        const getCustomers = async () => {

            const customersStorage = await AsyncStorage.getItem('customers');
            const customers = (customersStorage && customersStorage != '' ? JSON.parse(customersStorage) : null);

            if (customers) {
                setCustomersList(customers);
                setCustomersSearchList(customers);

                let req = await Api.getCustomers();

                if (req.success === true) {
                    const jsonReq = JSON.stringify(req.data)
                    await AsyncStorage.setItem('customers', jsonReq);
                    setCustomersList(req.data)
                    setCustomersSearchList(req.data)
                }

            } else {

                let req = await Api.getCustomers();

                if (req.success === true) {
                    const jsonReq = JSON.stringify(req.data)
                    await AsyncStorage.setItem('customers', jsonReq);
                    setCustomersList(req.data)
                    setCustomersSearchList(req.data)
                } else {
                    Alert.alert('Ops, falha ao carregar lista.', 'Por favor, verifique sua conexão com a internet!', [
                        { text: 'Entendido', onPress: () => console.log('alert closed') },
                    ]);
                }
            }
        }

        getCustomers();

    }, [])

    useEffect(() => {
        // console.log('Executando...');

        if (search === '') {
            setCustomersSearchList(customersList);
        } else {
            if (customersList !== '') {
                setCustomersSearchList(
                    customersList.filter(
                        (i) =>
                            i.customer_lastname.toLowerCase().indexOf(search.toLowerCase()) > -1 ||
                            i.customer_telephone.toLowerCase().indexOf(search.toLowerCase()) > -1 ||
                            i.customer_address.toLowerCase().indexOf(search.toLowerCase()) > -1
                    )
                );
            } else {
                Alert.alert('Ops, falha ao carregar lista.', 'Por favor, verifique sua conexão com a internet!', [
                    { text: 'Entendido', onPress: () => console.log('alert closed') },
                ]);
            }

        }

    }, [debouncedValue])


    const getCustomer = async (data) => {
        let req = await Api.getCustomer(data.idCustomer)
        // console.log(req);
        Alert.alert(`${data.customer_lastname}`, '', [
            { text: 'Ok', onPress: () => console.log('alert closed') },
        ]);
    }

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

    const renderItem = ({ item }) => (



        <TouchableOpacity onPress={() => getCustomer(item)} style={{ flex: 1, marginBottom: 10, height: (item.customer_nivel === '5' ? 100 : 80), flexDirection: "row", backgroundColor: (item.customer_nivel === '5' ? '#f4fe96' : '#fff'), borderRadius: 10 }}>
            <View style={{ flex: 1, padding: 10 }}>
                <Image

                    style={styles.imgListStyle}
                    source={{
                        uri: (item.customer_image !== null ? `${BASE_API}/public/assets/uploads/customers/${item.idCustomer}/${item.customer_image}` : `${BASE_API}/public/assets/images/noPhoto.png`),
                    }}
                />
            </View>
            <View style={{ flex: 3, marginStart: 10, marginTop: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>{item.customer_name}</Text>
                <Text>{item.customer_telephone}</Text>
                {item.customer_nivel === '5' ? <Text>{item.customer_address}</Text> : null}

            </View>

        </TouchableOpacity>

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
                    placeholder="O que você precisa?"
                    value={search}
                />
                <Carousel

                    loop
                    width={width}
                    height={width / 3}
                    autoPlay={true}
                    data={objects}
                    scrollAnimationDuration={10000}
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
                            ItemSeparatorComponent={SeparatorItem}
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
        height: '100%',
        backgroundColor: 'white',
        borderRadius: 10,


    },
    imgListStyle: {
        flex: 1,
        width: '100%',
        height: 24,
        backgroundColor: 'white',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        padding: 10,
        alignSelf: 'flex-start',

    }

});



