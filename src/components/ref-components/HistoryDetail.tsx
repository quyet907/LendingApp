import * as React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Separator from '../Separator'

const timeIcon = <Icon name="access-time" size={13} color='#868685' />;
export default class HistoryDetail extends React.Component<Props, {}>{
    constructor(props: any) {
        super(props)
    }
    render() {
        return (
            <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 , paddingVertical: 10}}>
                <View>
                    <Image style={styles.logo} source={require('../../assets/icons8_male_user_32px_1.png')} />
                </View>

                <View style={{flexDirection: 'column', justifyContent: 'space-between', height: 42  }}>
                    <Text style={styles.title}>{this.props.title}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                        {timeIcon}<Text style={styles.time}>{this.props.time}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'colum', alignItems: 'flex-end', flex: 1 }}>
                    <Text style={styles.time}>EARNED</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                        <Text style={styles.coin}>+{this.props.coin} COIN</Text>
                    </View>
                </View>
                
            </View>
            <Separator/>
            </View>
        )
    }
}

type Props = {
    title: any,
    time: any,
    coin: number
}

const styles = StyleSheet.create({

   
    subContainer: {
        height: 50,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    logo: {
        width: 35,
        height: 35,
        resizeMode: 'contain',
        marginRight: 10,
       
    },
    amount: {
        fontSize: 28,
        fontWeight: 'bold'

    },
    title: {
        color: '#fff',
        fontSize: 15,
        fontWeight: "600",
     
    }, 
    time: {
        color: '#868685',
        fontSize: 10,
        marginLeft: 3
    },
    coin: {
        fontSize: 15,
        color: '#00FE00',
        fontWeight: "600"
    }


})

