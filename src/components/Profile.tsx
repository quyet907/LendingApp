import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet, Button } from 'react-native';

import Carousel from 'react-native-snap-carousel'; // Version can be specified in package.json





export default class Profile extends Component<Props, {}> {
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <View>
                <Text>Hello</Text>
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
            </View>
        );
    }
}

type Props = {
    navigation: any
}

const styles = StyleSheet.create({
    carouselContainer: {

    },

    itemLabel: {
        color: '#000',
        fontSize: 17,
        fontWeight: '700'

    },
    counter: {
        marginTop: 25,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    text: {
        color: '#fff',

    }
});
