import React, { Component } from 'react'
import { View, Text, Image } from "react-native"
import myStyle from "../style";
export default class HistoryInterest extends Component {
    render() {
        return (
            <View style={myStyle.HistoryInterest}>
                <View style = {[myStyle.row]}>
                    <View style={[myStyle.leftHistoryInterest]}>
                        <View> 
                            <Text style = {[{color:"#575959"}]}>
                                11/01/2020
                            </Text>
                        </View>

                        <View style = {[myStyle.row]}>
                            <Image
                                style = {[myStyle.iconHistoryInterest]}
                                source={require("../assets/icons8_up_26px.png")}
                            />
                            <Text style = {[{color : "#34FF08", fontWeight : "bold", fontSize : 20}]}>30</Text>
                        </View>
                    </View>

                    <View style = {[myStyle.row , myStyle.centerHistoryInterest]}>
                        <Text style = {[{color : "#66686A", fontWeight : "bold", fontSize: 20, textTransform : "uppercase"}]}>
                            3000
                        </Text>
                        <Image
                            style = {[myStyle.iconHistoryInterest, {margin : 10}]}
                            source={require("../assets/icons8_right_26px.png")}
                        />
                        <Text style = {[{color : "#C5710C", fontWeight : "bold", fontSize: 20, textTransform : "uppercase"}]}>3200</Text>
                    </View>

                    <View style = {[myStyle.rightHistoryInterest]}> 
                        <Text style = {[{color : "#E63034", fontSize : 20, fontWeight : "bold"}]}>
                            25day
                        </Text>
                    </View>
                </View>                                     
            </View>
        )
    }
}
