import React, { Component } from 'react'
import { View, Text, Image } from "react-native"
import myStyle from "../style";
// import FontAwesome, {
//     SolidIcons,
//     RegularIcons,
//     BrandIcons,
//     parseIconFromClassName,
//   } from 'react-native-fontawesome';
  import Icon from 'react-native-vector-icons/MaterialIcons';
  import axios from "axios";



export default class HistoryInterest extends Component<props ,state> {
    constructor(props : any ){
        super(props);
        this.state= {

        }
    }

    

    render() {
        return (
            <View style={myStyle.HistoryInterest}>
                <View style = {[myStyle.row]}>
                    <View style={[myStyle.leftHistoryInterest]}>
                        <View style = {[myStyle.row]}> 
                            <Icon name="access-time" size={11} color='#575959'  />
                            <Text style = {[{color:"#575959",fontSize:10}]}>
                                11/01/2020
                            </Text>
                        </View>

                        <View style = {[myStyle.row, {marginTop : 10}]}>
                            <Image
                                style = {[myStyle.iconHistoryInterest]}
                                source={require("../assets/icons8_up_26px.png")}
                            />

                            <Text style = {[myStyle.contentHistoryInterest,{color : "#34FF08", alignSelf : "center", justifyContent : "center", marginLeft : 10},]}>30</Text>


                        </View>
                    </View>

                    <View style = {[myStyle.row , myStyle.centerHistoryInterest]}>
                        <Text style = {[{color : "#646b75"}, myStyle.contentHistoryInterest]}>
                            3000
                        </Text>
                        <Image
                            style = {[myStyle.iconHistoryInterest, {margin : 10}]}
                            source={require("../assets/icons8_right_26px.png")}
                        />
                        <Text style = {[{color : "#ecb510", }, myStyle.contentHistoryInterest]}>3200</Text>
                    </View>

                    <View style = {[myStyle.rightHistoryInterest]}> 
                        <Text style = {[{color : "#e5026e", fontSize : 16, }]}>
                            25 days
                        </Text>
                    </View>
                </View>                                     
            </View>
        )
    }
}

type props = {
   
    
}
type state = {

}