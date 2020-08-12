import * as React from 'react';
import { View, StyleSheet } from 'react-native';



export default class Profile extends React.Component {
    render() {
        return (
            <View>
                <View style={styles.separator} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    separator: {
        borderBottomWidth: 1,
        borderColor: '#868685'
    }
})





