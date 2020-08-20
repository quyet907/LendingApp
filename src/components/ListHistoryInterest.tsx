import React, { Component } from 'react'
import { View} from 'react-native'
import HistoryInterest from './HistoryInterest'
import myStyle from "../style"
export default class ListHistoryInterest extends Component<props , state> {
    constructor(props : any ) {
        super(props);
        this.state = {
            dataList : [
                {
                    id : "",
                    name : "ahihi"
                }
            ]
        }
    }
    render() {
        return (
            <View style = {myStyle.listHistoryInterest}>
               
                
            </View>
        )
    }
}

type props = {

}
type state = { 

}