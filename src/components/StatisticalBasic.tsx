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
            <View style={[myStyle.statisticalBasic, myStyle.row]}>
                <View style={[, myStyle.frImgStatisticalBasic]}>
                    <Image
                        source={require("../assets/icons8_average_2_75px.png")}
                        style={[myStyle.imgStatisticalBasic]}
                    />
                </View>
                <View style={[]}>
                    <View style={[,myStyle.flex3, myStyle.contentStatisticalBasic]}>
                        <Text style={[{color : "#5E5F61", fontSize : 10}]}>{this.props.content}</Text>
                    </View>
                    <View style={[myStyle.flex3, myStyle.contentStatisticalBasic]}>
                        <Text style={[myStyle.colorWhite]}>{this.props.money} COIN</Text>
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