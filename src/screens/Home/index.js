//import liraries
import React, { useState, useEffect } from 'react';
import { Dimensions, View, Text, StyleSheet, TextInput, Image, FlatList } from 'react-native';
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

// create a component
export default ({ navigation }) => {


    const [search, setSearch] = useState('');
    const [list, setList] = useState(item);

    useEffect(() => {

        if (search === '') {
            setList(item);
        } else {
            setList(
                item.filter(
                    (i) => i.title.toLowerCase().indexOf(search.toLowerCase()) > -1
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
                        uri: item.avatar,
                    }}
                />
            </View>
            <View style={{ flex: 3, marginStart: 10, marginTop: 10 }}>
                <Text>{item.title}</Text>
                <Text>{item.subtitle}</Text>
                <Text>{item.subtitle}</Text>
            </View>

        </View>

    );

    return (
        <Container>

            <View style={{ flex: 1, marginTop: 20, }}>
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

                <View style={{ flex: 1, marginTop: 5, paddingStart: 10, paddingEnd: 10, }}>

                    <FlatList
                        style={{ marginTop: 10 }}
                        data={list}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />

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



