import * as React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import * as color from '../../Color'
export default class RefAbout extends React.Component<Props, {}>{
    constructor(props: any) {
        super(props)
    }

    render() {
        return (
            <View style={{ flexDirection: 'row' }}>
                  <View>
                        <FontAwesome5 name='user-friends' size={35} color={color.success}/>
                    </View>
                <View style={styles.subContainer}>
                    <Text style={{ color: '#868685', fontSize: 12 }}>{this.props.label}</Text>
                    <Text style={styles.amount}>{FormatService.roundingMoney(this.props.amount)}</Text>
                </View>
            </View>
        )
    }

    
}

type Props = {
    label: any
    amount: any
    urlIcon: any
}

const styles = StyleSheet.create({
    subContainer: {
        height: 50,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    logo: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        marginRight: 10
    },
    amount: {
        fontSize: 26,
        fontWeight: "600",
        color: '#fff'
    }


})

