import React, { Component } from 'react'
import { View, Text, Image } from "react-native";
import myStyle from "../style"
export default class StatisticalBasic extends Component <props, state>{
    constructor(props : any ){
        super(props)
        this.state = {
            
        }
    }
    render() {
        var img:any = this.props.img;
        console.log(img);
        return (
            <View style={[myStyle.flex3, myStyle.row]}>
                <View style={[myStyle.flex3, myStyle.frImgStatisticalBasic]}>
                    <Image
                        source={require("../assets/icons8_average_2_75px.png")}
                        style={[myStyle.imgStatisticalBasic]}
                    />
                </View>
                <View style={[myStyle.flex3]}>
                    <View style={[myStyle.flex3, myStyle.contentStatisticalBasic]}>
                        <Text style={[myStyle.colorWhite]}>{this.props.content}</Text>
                    </View>
                    <View style={[myStyle.flex3, myStyle.contentStatisticalBasic]}>
                        <Text style={[myStyle.colorWhite]}>{this.props.money}</Text>
                    </View>

                </View>
            </View>
        )
    }
}

type props = {
    img : any,
    money : String,
    content : String
}
type state = {
    
}