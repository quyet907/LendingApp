import * as React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View, Image, ImageBackground, TouchableOpacity, Platform } from 'react-native';
import * as Color from '../Color'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import myStyle from '../style'
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import { uploadService } from '../services/UploadService';
import { User } from '@StockAfiCore/model/user/User';
import { Address } from '@Core/model/Address';
import { UserService } from '../services/UserService';
import * as action from "../Action/ActionLogin";
import { connect } from 'react-redux';
import * as actionPopup from "../Action/ActionPopup";
import I18n from '../i18n/i18n'



class Profile extends React.Component<Props, State> {
    thisUser = this.props.route.params.thisUser;
    avtDefault = 'https://i.picsum.photos/id/199/1000/500.jpg?hmac=FK68A1s1J9x0AXSbNfbsgWwUe80fJDlvGRQ5J0IvMAU';

    constructor(props: any) {
        super(props)
        this.state = {
            avtURL: this.avtDefault,
            name: '',
            address: {},
            identityCard: '',
            frontIdCard: '',
            backIdCard: '',
            nameDefault: 'Enter your name',
        }
    }



    componentDidMount() {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
            }
            if (status !== 'granted') {
                //alert('Sorry, we need camera roll permissions to make this work!');
            }
        })
        // console.log(this.thisUser);

        UserService.getMe().then(res => {
            if (res) {
                this.setState({
                    avtURL: res.avatar || this.avtDefault,
                    name: res.fullName || '',
                    address: res.address || {},
                    identityCard: res.identityCard || '',
                    frontIdCard: res.imgIdentityCards ? res.imgIdentityCards[0] : '',
                    backIdCard: res.imgIdentityCards ? res.imgIdentityCards[1] : '',
                })
            }
        })


    }



    pickImage = async (asideIdCard: string) => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });


        if (!result.cancelled) {
            console.log(result);
            this.uploadImage(result.uri, asideIdCard)
                .then(url => {
                    if (asideIdCard === 'front') this.setState({ frontIdCard: url })
                    else if (asideIdCard === 'back') this.setState({ backIdCard: url })
                    else this.setState({ avtURL: url })
                })
            // this.uploadImage(result.uri)
            //     .then(url => console.log(url))
            // console.log(typeof result.type);
        }
    };

    uploadImage = async (uri: string, asideIdCard: string) => {
        const response = await fetch(uri);
        const blob = await response.blob();
        if (asideIdCard === 'avt') {
            const url = await uploadService.upload("avatars", `${this.thisUser.username}-Avatar`, blob);
            return url
        } else {
            const url = await uploadService.upload("idCards", `${this.thisUser.username}-${asideIdCard}IdCard`, blob);
            return url
        }

    }


    render() {
        return (
            <ScrollView style={{ backgroundColor: Color.background_primary }}>
                <View style={{ height: 170, display: 'flex', justifyContent: 'center', position: 'relative' }}>
                    <ImageBackground source={{ uri: this.state.avtURL }} style={styles.image}>
                        <View style={{ position: 'absolute', top: 95 }}>
                            <Image
                                style={styles.tinyLogo}
                                source={{ uri: this.state.avtURL }}
                            />
                            <TouchableOpacity
                                style={{ padding: 10, position: 'absolute', right: 5, bottom: 5, borderRadius: 50, backgroundColor: Color.primary }}
                                onPress={() => this.pickImage('avt')}
                            >
                                <FontAwesome5 name={"camera"} size={15} color={'#000'} />
                            </TouchableOpacity>
                        </View>


                    </ImageBackground>

                </View>

                <View style={{ marginTop: 70, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: '#fff', fontSize: 20, fontWeight: '600' }}>{this.state.name ? this.state.name : this.state.nameDefault}</Text>
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
                                onChangeText={text => this.setState({ address: { ...this.state.address, address: text } })}
                                value={this.state.address.address || ''}
                                maxLength={35}
                                placeholder={'Enter your address'}
                            />
                        </View>
                    </View>

                    <View style={styles.info}>
                        <View>
                            <Text style={styles.title}>Identity Number</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <TextInput
                                style={styles.input}
                                onChangeText={text => {
                                    this.setState({ identityCard: text })
                                }}
                                value={this.state.identityCard}
                                maxLength={15}
                                keyboardType={'number-pad'}
                                placeholder={'Enter ID Card'}
                            />
                        </View>
                    </View>

                    <View style={styles.info}>
                        <View>
                            <Text style={styles.title}>Front ID Card</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-end', paddingLeft: 30 }}>
                            <TouchableOpacity
                                onPress={() => this.pickImage('front')}
                                style={{ flexDirection: 'row' }}
                            >
                                <View style={{ width: 30, height: "100%", paddingRight: 10 }}>
                                    <Image
                                        style={styles.imageIdCard}
                                        source={{ uri: this.state.frontIdCard }}
                                    />
                                </View>
                                <Text style={{ color: Color.primary, fontWeight: '500', fontSize: 16 }}>{this.state.frontIdCard ? 'Edit' : 'Add photo'} </Text>
                            </TouchableOpacity>
                        </View>
                    </View>


                    <View style={styles.info}>
                        <View>
                            <Text style={styles.title}>Back ID Card</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-end', paddingLeft: 30 }}>
                            <TouchableOpacity
                                onPress={() => this.pickImage('back')}
                                style={{ flexDirection: 'row' }}
                            >
                                <View style={{ width: 30, height: "100%", paddingRight: 10 }}>
                                    <Image
                                        style={styles.imageIdCard}
                                        source={{ uri: this.state.backIdCard }}
                                    />
                                </View>
                                <Text style={{ color: Color.primary, fontWeight: '500', fontSize: 16 }}>{this.state.backIdCard ? 'Edit' : 'Add photo'} </Text>
                            </TouchableOpacity>
                        </View>
                    </View>



                </View>


                <View style={{ paddingHorizontal: 25, marginTop: 10, marginBottom: 50 }}>

                    <View style={[myStyle.frbuttonLogin]}>
                        <TouchableOpacity
                            style={[myStyle.buttonLogin]}
                            activeOpacity={0.7}
                            onPress={this.updateInfo}
                        >
                            <Text style={[myStyle.textButton]}>UPDATE</Text>
                        </TouchableOpacity>
                    </View>

                </View>




            </ScrollView>

        )
    }

    updateInfo = () => {
        if (this.validationInfo()) {
            let imgIdentityCards = [this.state.frontIdCard, this.state.backIdCard];
            console.log(this.state.avtURL);
            
            let user: User = {
                avatar: this.state.avtURL,
                fullName: this.state.name,
                address: { ...this.state.address },
                identityCard: this.state.identityCard,
                imgIdentityCards: imgIdentityCards
            }
            UserService.updateInfoUser(user)
                .then(res => {
                    console.log(res.data)
                    actionPopup.showMessage(I18n.t('success.updateProfile'));
                })

        } else {
            actionPopup.showMessage(I18n.t('error.profile.fillOutAll'));
        }





        // console.log(user);



    }

    validationInfo = (): boolean => {
        let fullName = this.state.name,
            address = this.state.address,
            identityCard = this.state.identityCard,
            frontIdCard = this.state.frontIdCard,
            backIdCard = this.state.backIdCard;
        return (fullName && address && identityCard && frontIdCard && backIdCard) ? true : false
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
    idCard: {
        width: 20,
        height: 30,

        // borderWidth: 5,
        // borderColor: Color.background_primary

    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: 'center'
    },
    imageIdCard: {
        flex: 1,
        resizeMode: "contain",
        justifyContent: "center",
        alignItems: 'center'
    },
    input: {
        padding: 0,
        paddingLeft: 30,
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
        borderBottomColor: 'rgba(153,153,153, 0.4)  ',
        borderBottomWidth: 1
    },
    title: {
        color: '#999',
        fontSize: 16,
        flex: 1
    }
})


type Props = {
    route: any;
}

type State = {
    avtURL: string,
    name: string,
    address: Address,
    identityCard: string,
    nameDefault: string,
    frontIdCard: string,
    backIdCard: string,
}


export default Profile