import React, { Component } from 'react'
import { View} from 'react-native'
import HistoryInterest from './HistoryInterest'
import myStyle from "../style"
import { UserService } from '../services/UserService';
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

    componentDidMount() {
       
    }
    render() {
        return (
            <View style = {myStyle.listHistoryInterest}>
               
                <HistoryInterest ></HistoryInterest>
                <HistoryInterest ></HistoryInterest>
            </View>
        )
    }
}

type props = {

}
type state = { 

}