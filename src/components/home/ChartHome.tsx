import React, { Component } from 'react'
import { View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Line } from "react-chartjs-2";
import { IncomeService } from '../../services/IncomeService';


const dataChart: any = {
    labels: [],
    datasets: [
        {
            label: "",
            data: [],
            fill: true,
            backgroundColor: "rgba(242, 199, 58,0.1)",
            borderColor: "rgba(242, 199, 58,0.7)"

        },
        {
            label: "",
            data: [],
            fill: true,
            backgroundColor: "rgba(0, 192, 135,0.1)",
            borderColor: "rgba(0, 192, 135,0.7)"


        },
        {
            label: "",
            data: [],
            fill: true,
            backgroundColor: "rgba(229, 3, 113,0.1)",
            borderColor: "rgba(229, 3, 113,0.7)"

        }
    ]
}

export default class ChartHome extends Component<props, state> {

    constructor(props: any) {
        super(props);
        this.state = {

        }
    }



    componentWillReceiveProps(nextProps: props) {
        dataChart.datasets[0].data = IncomeService.createDataChart(nextProps.dataChart.all);
        dataChart.datasets[1].data = IncomeService.createDataChart(nextProps.dataChart.lending);
        dataChart.datasets[2].data = IncomeService.createDataChart(nextProps.dataChart.referal);

        dataChart.labels = IncomeService.getDayDataChar(nextProps.dataChart.all);
        dataChart.datasets[0].label = "Total Amount";
        dataChart.datasets[1].label = "Leding";
        dataChart.datasets[2].label = "Referal";
    }

    render() {
        return (
            <View >

                <Line
                    data={dataChart}
                    options={
                        {
                            title: {
                                display: true,
                                text: "Chart",
                                color: "white"
                            },
                            animation: {
                                duration: 3000
                            },
                            tooltips: {
                                mode: 'index',
                                axis: 'x'
                            },
                            layout: {
                                padding: {
                                    left: 50,
                                    right: 0,
                                    top: 0,
                                    bottom: 0
                                }
                            }
                        }
                    }
                />

            </View>
        )
    }
}

type props = {
    dataChart: any
}

type state = {

}
