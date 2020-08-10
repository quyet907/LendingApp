import React, { Component } from 'react'
import { View} from "react-native";
import {LineChart} from "react-native-chart-kit";
import { Line } from "react-chartjs-2";

export default class ChartHome extends Component<props, state> {
    constructor(props : any ){
        super(props);
        this.state ={
            data : {
                labels : ["cột1", "cột 2", "cột 3", "cột4"],
                datasets : [
                    {
                        label : "hàng 1",
                        data : [1, 4, 2, 8],
                        fill : false,
                        backgroundColor :"rgba(1,92,192,1)",
                        borderColor : "rgba(1,92,192,1)"

                    },
                    {
                        label : "hàng 2",
                        data : [2, 6, 5, 9],
                        fill : false,
                        backgroundColor :"rgba(75,192,192,1)",
                        borderColor : "rgba(75,192,192,1)"

                    },
                    {
                        label : "hàng 3",
                        data : [3, 4, 8, 7],
                        fill : false,
                        backgroundColor :"rgba(90,192,92,1)",
                        borderColor : "rgba(90,192,92,1)"

                    }
                ]
            }
        }
    }
    
    render() {
        return (
            <View>

                <Line
                    data = {this.state.data}
                    options ={
                        {
                            title :{
                                display:true,
                                text : "Chart",
                                color : "white"
                            },
                            animation : { 
                                duration : 3000
                            },
                            tooltips: {
                                mode: 'index',
                                axis: 'y'
                            }
                        }
                    }
                />



               



            </View>
        )
    }
}

type props ={
    data : any
}

type state = {
    data : any
}
