import React, { Component } from 'react'
import { View} from 'react-native'
import HistoryInterest from './HistoryInterest'
import myStyle from "../style"
export default class ListHistoryInterest extends Component {
    render() {
        return (
            <View style = {myStyle.listHistoryInterest}>
                <HistoryInterest ></HistoryInterest>
                <HistoryInterest ></HistoryInterest>
                <HistoryInterest ></HistoryInterest>
                <HistoryInterest ></HistoryInterest>
                <HistoryInterest ></HistoryInterest>
                <HistoryInterest ></HistoryInterest>
                <HistoryInterest ></HistoryInterest>
                <HistoryInterest ></HistoryInterest>
                <HistoryInterest ></HistoryInterest>
            </View>
        )
    }
}
