import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import style from '../style';
import { LendingPackage } from '@StockAfiCore/model/lending/LendingPackage';




export default class Package extends Component<Props, State> {
    constructor(props: any) {
        super(props);
        // this.state = {
        //     isSelected: false

        // }
    }
    render() {
        return (
            <TouchableOpacity style={this.props.setSelection == true ? styles.itemContainerSe : styles.itemContainer} onPress={() => {
                this.props.isSelected();

            }}>
                <View style={this.props.setSelection == true ? styles.pakageSelected : styles.pakage}>
                    <Text style={this.props.setSelection == true ? styles.itemLabelSe : styles.itemLabel}>
                        {this.props.package.name}
                    </Text>
                </View>
                <View style={{ backgroundColor: '#2E2D2A', alignItems: 'center', justifyContent: 'space-around', paddingVertical: 10 }}>
                    <Text style={styles.text}>Min {this.props.package.minInvestment}</Text>
                    <Text style={styles.text}>Max {this.props.package.maxInvestment}</Text>
                    <Text style={styles.text}>Profits {typeof this.props.package.profitPerDay == 'number' ? 
                    Math.ceil(this.props.package.profitPerDay * 30) : 0}%</Text>
                    <Text style={styles.text}>BackIn {typeof  this.props.package.cappitalBackIn == 'number' ? 
                    this.props.package.cappitalBackIn/3600/24/45 : 0}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

type Props = {
    setSelection: boolean
    package: LendingPackage
    isSelected: any
}
type State = {
    isSelected: any,

}

const styles = StyleSheet.create({

    itemContainer: {
        flex: 1,
        opacity: 0.5,
        marginHorizontal: 6,
    
     

    },
    itemContainerSe: {
        flex: 1,
        marginHorizontal: 6,
        borderWidth: 1,
        borderColor: '#ddd',
        opacity: 1
    },
    pakageSelected: {
        backgroundColor: '#f2c73a', alignItems: 'center', justifyContent: 'center', paddingVertical: 3
    },
    pakage: {
        backgroundColor: '#FA801', alignItems: 'center', justifyContent: 'center', paddingVertical: 3
    },
    itemLabel: {
        color: '#fff',
        fontSize: 17,
        fontWeight: '600'

    },
    itemLabelSe: {
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
