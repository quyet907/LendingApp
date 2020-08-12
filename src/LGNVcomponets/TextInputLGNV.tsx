import React, { Component } from 'react';
import { View , Text} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { IconProps } from 'react-native-vector-icons/Icon';

class TextInputLGNV extends Component<props , state> {
    constructor (props : any ){
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <View>
                <View>
                     <Text>{this.props.label}</Text>
                </View>
                <TextInput
                    style= {this.props.style}
                    maxLength = {this.props.maxLength}
                    secureTextEntry = {this.props.secureTextEntry}
                />
                <View>
                     <Text>{this.props.label}</Text>
                </View>
            </View>
        );
    }
}

export default TextInputLGNV;

type props = {
    style  : any,
    label : String,
    placeholder : String,
    maxLength : number,
    format : String,
    error : boolean,
    colorTextError : String,
    colorInputError : String ,
    errorLabel : String,
    iconLeft : IconProps,
    iconRight : IconProps,
    secureTextEntry: true
}

type state = {

}