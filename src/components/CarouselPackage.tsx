import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet } from 'react-native';

import Carousel from 'react-native-snap-carousel'; // Version can be specified in package.json

import { scrollInterpolator, animatedStyles } from '../utils/animations';

const SLIDER_WIDTH = Dimensions.get('window').width -40;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.4);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 0.9);




export default class CarouselPackage extends Component<Props, {}> {
    carousel: Carousel<any> | null;
    constructor(props: any) {
        super(props);
        this._renderItem = this._renderItem.bind(this)
    }
    state = {
        index: 1
    }



    _renderItem({ item, index }) {
        return (
            <View style={styles.itemContainer}>
                <View style={{backgroundColor: '#FAC801', alignItems: 'center', justifyContent: 'center', paddingVertical: 3}}>
                    <Text style={styles.itemLabel}>
                        {item.name}
                    </Text>
                </View>
                <View style={{backgroundColor: '#2E2D2A', alignItems: 'center', justifyContent: 'space-around', paddingVertical: 10}}>
                    <Text style={styles.text}>Min {item.min}</Text>
                    <Text style={styles.text}>Profits {item.profits}%</Text>
                    <Text style={styles.text}>Days {item.days}</Text>
                </View>
            </View>
        );
    }

    render() {
        return (
            <View>
                <Carousel
                    ref={(c) => this.carousel = c}
                    data={DATA}
                    renderItem={this._renderItem}
                    sliderWidth={SLIDER_WIDTH}
                    itemWidth={ITEM_WIDTH}
                    containerCustomStyle={styles.carouselContainer}
                    //inactiveSlideShift={0}
                    //onSnapToItem={(index) => this.setState({ index })}
                    //scrollInterpolator={scrollInterpolator}
                    //slideInterpolatedStyle={animatedStyles}
                    //useScrollView={true}
                    firstItem={1}

                />

            </View>
        );
    }
}

type Props = {

}

const styles = StyleSheet.create({
    carouselContainer: {
        
    },
    itemContainer: {
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        paddingHorizontal: 5,
    

    },
    itemLabel: {
        color: '#000',
        fontSize: 17,
        fontWeight:'700'

    },
    counter: {
        marginTop: 25,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    text: {
        color: '#fff',
        fontWeight: 600

    }
});
