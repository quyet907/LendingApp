import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import style from '../style';




export default class Package extends Component<Props, {}> {
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <TouchableOpacity style={styles.itemContainer} onPress={(e)=>{
                {e.target.add}
            }}>
                <View style={{ backgroundColor: '#FAC801', alignItems: 'center', justifyContent: 'center', paddingVertical: 3 }}>
                    <Text style={styles.itemLabel}>
                        {this.props.package.name}
                    </Text>
                </View>
                <View style={{ backgroundColor: '#2E2D2A', alignItems: 'center', justifyContent: 'space-around', paddingVertical: 10 }}>
                    <Text style={styles.text}>Min {this.props.package.min}</Text>
                    <Text style={styles.text}>Profits {this.props.package.profits}%</Text>
                    <Text style={styles.text}>Days {this.props.package.days}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

type Props = {
    isSelected: any,
    package: any
}

const styles = StyleSheet.create({

    itemContainer: {
        flex: 1,
      
        paddingHorizontal: 6,
    

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
        fontWeight: 600,
       fontSize: 12

    }
});
