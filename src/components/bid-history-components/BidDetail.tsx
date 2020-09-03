import * as React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Separator from '../Separator'
import * as color from '../../Color'
const timeIcon = <Icon name="access-time" size={13} color='#868685' />;
export default class BidDetail extends React.Component<Props, {}>{
    constructor(props: any) {
        super(props)
    }
    render() {
        return (
            <View >
                <View style={styles.container}>
                    <View style={styles.subContainer}>
                        <Image style={styles.img} source={require('../../icons/netflixlogo.0.0.jpeg')} />
                    </View>

                    <View style={styles.subContainer2}>
                        <Text style={[{ fontSize: 16, fontWeight: "600" }, styles.fontWhiteColor]}>Netflix Premium Account</Text>
                        <View style={{flexDirection: 'row' , flex: 1, justifyContent: 'space-between'}}>

                            <View style={{justifyContent: 'space-around', paddingTop: 5}}>
                                <Text style={{ color: color.inactive }}>27-04-2020</Text>
                                <Text style={[styles.times, styles.fontWhiteColor]}>19 times</Text>
                            </View>
                            <View style={{justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                                <Text style={{ color: color.inactive, textDecorationLine: 'line-through' }}>15000 VND</Text>
                                <Text style={[styles.price]}>1200 VND</Text>
                            </View>

                        </View>

                    </View>

                </View>

            </View>
        )
    }
}

type Props = {

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        padding: 15,
        paddingVertical: 15,

        shadowColor: "#333",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 2,


        marginBottom: 10,
        borderRadius: 5,
        backgroundColor: color.dark
    },

    subContainer: {
        flexBasis: 80

    },
    subContainer2: {
        flex: 1,
        height: '100%',
        justifyContent: 'space-between'
    },
    logo: {
        width: 35,
        height: 35,
        resizeMode: 'contain',
        marginRight: 10,

    },


    img: {
        width: 70,
        height: 70,
        borderRadius: 5
    },
    price: {
        fontSize: 18,
        fontWeight: "600",
        color: color.primary
    },
    times: {
        fontSize: 16,
        fontWeight: '600'
    },
    fontWhiteColor: {
        color: 'white'
    }


})

