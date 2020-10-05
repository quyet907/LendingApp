import * as React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View, Image, ImageBackground } from 'react-native';
import * as Color from '../../Color'

export default class Profile extends React.Component<Props, State> {
    constructor(props: any) {
        super(props)
        this.state = {
            name: ''
        }
    }

    render() {
        return (
            <View style={styles.input}>
                <Text style={{ color: '#999', fontSize: 16 }}>{this.props.title}</Text>
                <TextInput
                    style={{ padding: 0, outlineWidth: 0, textAlign: 'right', flex: 1, flexGrow: 1, fontSize: 16, color: '#fff' }}
                    onChangeText={text => this.setState({ name: text })}
                    value={this.state.name}
                    maxLength={35}
                    placeholder={this.props.placeholder}
                />
            </View>

        )
    }

}

const styles = StyleSheet.create({
    tinyLogo: {
        width: 130,
        height: 130,
        borderRadius: 65,
        borderWidth: 5,
        borderColor: Color.background_primary

    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: 'center'
    },
    input: {
        flexDirection: 'row',
        paddingVertical: 18,
        borderBottomColor: '#999',
        borderBottomWidth: 1
    }
})


type Props = {
    title: string,
    placeholder: string,
}

type State = {
    name: string,

}