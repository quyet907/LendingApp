import React, { Component } from 'react'
import { View, Text, Button } from 'react-native';
import { firebase } from "../../FirebaseConfig";

var storage = firebase.database().ref("product");


export default class TestFireBase extends Component<props, state> {
    constructor(props: any) {
        super(props);
        this.state = {
            count : 1,
            getCount : 0
        }


    }

    addNew() {
        storage.set({
            count : this.state.count
        })
    }

    pushNew() {
        storage.push({
            name: "vanluong",
            time: 1,
            age: 18,
        })
    }

    onget(){

    }
    render() {
        

        return (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text>{
                    storage.child("count").on("value", snapshot=>{
                        return (snapshot)
                    })
                    }</Text>
                <Button
                    title="up"
                    onPress={() => { 
                        this.addNew();
                        this.setState({
                            count : this.state.count+1
                        })
                     }}

                />

                <Button
                    title="push"
                    onPress={() => { this.pushNew() }}

                />
            </View>
        )
    }
}
type props = {

}

type state = {
    count : number,
    getCount : number
}