import React, { Component } from 'react'
import { View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Line } from "react-chartjs-2";
import { IncomeService } from '../../services/IncomeService';
import I18n from "../../i18n/i18n";
import * as color from '../../Color';

const dataChart: any = {
    labels: [],
    datasets: [
        {
            label: "",
            data: [],
            fill: true,
            backgroundColor: "rgba(66, 135, 245,0.2)",
            borderColor: color.primary

        },
        {
            label: "",
            data: [],
            fill: true,
            backgroundColor: "rgba(46, 204, 113,0.2)",
            borderColor: color.success


        },
        // {
        //     label: "",
        //     data: [],
        //     fill: true,
        //     backgroundColor: "rgba(229, 2, 110,0.2)",
        //     borderColor: color.secondary

        // }
    ]
}

export default class ChartHome extends Component<props, state> {
    constructor(props: any) {
        super(props);
        this.state = {

        }
    }

    componentWillReceiveProps(nextProps: props) {
        // dataChart.datasets[2].data = IncomeService.createDataChart(nextProps.dataChart.all);
        dataChart.datasets[0].data = IncomeService.createDataChart(nextProps.dataChart.referal);
        dataChart.datasets[1].data = IncomeService.createDataChart(nextProps.dataChart.lending);

        dataChart.labels = IncomeService.getDayDataChar(nextProps.dataChart.all);
        // dataChart.datasets[0].label = I18n.t("screens.dashboard.chart.totalAmount");
        dataChart.datasets[0].label = I18n.t("screens.dashboard.chart.referralAmount");
        dataChart.datasets[1].label = I18n.t("screens.dashboard.chart.lendingAmount");
    }

    render() {
        return (
            <View >

                <Line
                    height={200}
                    data={dataChart}
                    options={
                        {
                            title: {
                                display: true,
                                text: I18n.t("screens.dashboard.chart.title"),
                                color: "white"
                            },
                            animation: {
                                duration: 3000
                            },
                            tooltips: {
                                mode: 'index',
                                axis: 'x'
                            },
                            responsive: true,
                            maintainAspectRatio: true,

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
