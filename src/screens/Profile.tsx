import * as React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import * as Color from '../Color'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import myStyle from '../style'


export default class Profile extends React.Component<Props, State> {
    constructor(props: any) {
        super(props)
        this.state = {
            imageURL: 'https://i.picsum.photos/id/199/1000/500.jpg?hmac=FK68A1s1J9x0AXSbNfbsgWwUe80fJDlvGRQ5J0IvMAU',
            name: '',
            nameDefault: 'Enter your name',
        }
    }

    render() {
        return (
            <ScrollView style={{ backgroundColor: Color.background_primary }}>
                <View style={{ height: 170, display: 'flex', justifyContent: 'center', position: 'relative' }}>
                    <ImageBackground source={{ uri: this.state.imageURL }} style={styles.image}>
                        <View style={{ position: 'absolute', top: 95 }}>
                            <Image
                                style={styles.tinyLogo}
                                source={{ uri: this.state.imageURL }}
                            />
                            <View style={{ padding: 10, position: 'absolute', right: 5, bottom: 5, borderRadius: 50, backgroundColor: Color.primary }}>
                                <FontAwesome5 name={"camera"} size={15} color={'#000'} />
                            </View>
                        </View>


                    </ImageBackground>

                </View>

                <View style={{ marginTop: 70, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: '#fff', fontSize: 20, fontWeight: '600' }}>{this.state.nameDefault}</Text>
                </View>

                <View style={{ marginTop: 30, paddingHorizontal: 27 }}>
                    <View style={styles.info}>
                        <View>
                            <Text style={styles.title}>Name</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <TextInput
                                style={styles.input}
                                onChangeText={text => this.setState({ name: text })}
                                value={this.state.name}
                                maxLength={35}
                                placeholder={'Enter your name'}
                            />
                        </View>
                    </View>

                   

                    <View style={styles.info}>
                        <View>
                            <Text style={styles.title}>Address</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <TextInput
                                style={styles.input}
                                onChangeText={text => this.setState({ name: text })}
                                value={this.state.name}
                                maxLength={35}
                                placeholder={'Enter your address'}
                            />
                        </View>
                    </View>

                    <View style={styles.info}>
                        <View>
                            <Text style={styles.title}>Bank Account Number</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <TextInput
                                style={styles.input}
                                onChangeText={text => this.setState({ name: text })}
                                value={this.state.name}
                                maxLength={35}
                                placeholder={'xxx xxx xxx xxx'}
                            />
                        </View>
                    </View>



                </View>


                <View style={{ paddingHorizontal: 25, marginTop: 10 , marginBottom: 50}}>

                    <View style={[myStyle.frbuttonLogin]}>
                        <TouchableOpacity                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
                            style={[myStyle.buttonLogin]}
                            activeOpacity={0.7}
                            onPress={() => console.warn('click')
                            }                                                                                                                                                                                                                                                                                                                                                                   
                        >
                            <Text style={[myStyle.textButton]}>UPDATE</Text>                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                        </TouchableOpacity>
                    </View>

                </View>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         




            </ScrollView>

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
        padding: 0,
        paddingLeft: 10,
        outlineWidth: 0,
        textAlign: 'right',
        flex: 1,
        fontSize: 16,
        color: '#fff'
    },
    info: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingVertical: 20,
        borderBottomColor: 'rgba(153,153,153, 0.4)  '      ,
        borderBottomWidth: 1
    },
    title: {
        color: '#999',
        fontSize: 16,
        flex: 1
    }
})


type Props = {

}

type State = {
    imageURL: string,
    name: string,
    nameDefault: string,
}