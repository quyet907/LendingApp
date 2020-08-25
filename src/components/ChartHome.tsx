import React, { Component } from 'react'
import { View} from "react-native";
import {LineChart} from "react-native-chart-kit";
import { Line } from "react-chartjs-2";
import { IncomeService } from '../services/IncomeService';


const dataChart:any = {
    labels : ["cột1", "cột 2", "cột 3", "cột4"],
    datasets : [
        {
            label : "hàng 1",
            data : [1, 4, 2, 8],
            fill : true,
            backgroundColor :"rgba(242, 199, 58,0.1)",
            borderColor : "rgba(242, 199, 58,0.7)"

        },
        {
            label : "hàng 2",
            data : [2, 6, 5, 9],
            fill : true,
            backgroundColor :"rgba(0, 192, 135,0.1)",
            borderColor : "rgba(0, 192, 135,0.7)"
            

        },
        {
            label : "hàng 3",
            data : [3, 4, 8, 7],
            fill : true,
            backgroundColor :"rgba(229, 3, 113,0.1)",
            borderColor : "rgba(229, 3, 113,0.7)"

        }
    ]
}

export default class ChartHome extends Component<props, state> {
    
    constructor(props : any ){
        super(props);
        this.state ={
            data : dataChart
        }
    }

    componentDidMount(){
        IncomeService.getListCharIncome().then(res=>{

            if(res!= undefined){
                dataChart.datasets[0].data = IncomeService.createDataChart(res.all);
                dataChart.datasets[1].data = IncomeService.createDataChart(res.lending);
                dataChart.datasets[2].data = IncomeService.createDataChart(res.referal);
                
                dataChart.labels =IncomeService.getDayDataChar(res.all);
                dataChart.datasets[0].label = "total amount";
                dataChart.datasets[1].label = "leding";
                dataChart.datasets[2].label = "referal";
                this.setState({
                    data: dataChart
                })
            }
            
        })
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
    
}

type state = {
    data : any
}
