import * as React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';


export default class RefAbout extends React.Component<Props, {}>{
    constructor(props: any) {
        super(props)
    }

    render() {
        return (
            <View style={{ flexDirection: 'row' }}>
                <View>
                    <Image style={styles.logo} source={require('../../icons/icons8_user_groups_80px_1.png')} />
                </View>
                <View style={styles.subContainer}>
                    <Text style={{ color: '#868685', fontSize: 12 }}>{this.props.label}</Text>
                    <Text style={styles.amount}>{this.props.amount}</Text>
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

