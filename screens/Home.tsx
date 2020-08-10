import React, { Component } from 'react'
import { View } from 'react-native'
import myStyle from "../style"
import ChartHome from '../components/ChartHome';
import ListStatisticalBasic from '../components/ListStatisticalBasic';
export default class Home extends Component<props , state> {
    constructor(props : any ){
        super(props );
        this.state = {
            data : [20, 15,1,29,29,22,42,12]
        }
    }
    render() {
        return (
            <View style = {[myStyle.container]}>
                <View style = {[myStyle.flex4 ]}>
                    <ChartHome
                        data = {[20, 15,1,29,29,22,42,12]}
                    ></ChartHome>
                </View>
                <View style = {[myStyle.flex2]}>
                    <ListStatisticalBasic></ListStatisticalBasic>
                </View>
                <View style = {[myStyle.flex4]}>

                </View>
                
            </View>
        )
    }
}

type props = {

}
type state = {
    data : Array<any>
}