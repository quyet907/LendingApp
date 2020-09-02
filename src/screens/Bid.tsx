import React, { Component } from 'react'
import { View, Text , TouchableOpacity, Image} from 'react-native'
import myStyle from "../style"
import Carousel from 'react-native-snap-carousel';
import ListBidder from '../components/ListBidder';
import * as color from "../Color"
import {Actions} from "react-native-router-flux"
export default class Bid extends Component <props, state>{
    constructor(props: any) {
        super(props)
        this.state= {
            data : [
                "https://media.doanhnghiepvn.vn/Images/Uploaded/Share/2019/12/24/Dan-gai-xinh-em-chua-18-khien-dan-mang-lim-tim-lan-dau-gap-mat_3.jpg",
                "https://media.doanhnghiepvn.vn/Images/Uploaded/Share/2019/12/24/Dan-gai-xinh-em-chua-18-khien-dan-mang-lim-tim-lan-dau-gap-mat_2.jpg",
                "https://media.doanhnghiepvn.vn/Images/Uploaded/Share/2019/12/24/dan-gai-xinh-em-chua-18-khien-dan-mang-lim-tim-lan-dau-gap-mat.jpg",
                "https://media.doanhnghiepvn.vn/Images/Uploaded/Share/2019/12/24/Dan-gai-xinh-em-chua-18-khien-dan-mang-lim-tim-lan-dau-gap-mat_2.jpg",

            ],
            bidders : [
                { id  : 1, img : "", name : "Hieu Ho 1", price : 10},
                { id  : 2, img : "", name : "Hieu Ho 2"},
                { id  : 3, img : "", name : "Hieu Ho 3"},
                { id  : 4, img : "", name : "Hieu Ho 4"},
                { id  : 5, img : "", name : "Hieu Ho 5"},
                { id  : 6, img : "", name : "Hieu Ho 6"},
                { id  : 7, img : "", name : "Hieu Ho 7"},
                { id  : 8, img : "", name : "Hieu Ho 8"},
            ]
        }
    }
    render() {
        return (
            <View style={[myStyle.containerLight]}>
                 <View style = {[myStyle.btnCloseBid    ]}>
                     <TouchableOpacity style ={[]}
                        onPress={()=>{
                            Actions.home();
                        }}
                     >
                        <Text>X</Text>
                     </TouchableOpacity>
                 </View>
                 <View style={[{alignItems: "center"}]}>
                    
                    <Carousel
                        layout={'tinder'}
                        style={[]}
                        data ={this.state.data}

                        renderItem={({item})=>{
                            return (
                                <View style={[myStyle.frImgProdcurBid, {height : 300}]}>
                                    <Image
                                        style={[myStyle.imgProductBid]}
                                        source={{ uri: `${item}` }}
                                    />
                                </View>
                            )
                        }}
                        sliderWidth={window.innerWidth}
                        itemWidth={window.innerWidth}
                        />

                        <View style = {[myStyle.frPriceAndTimePageBid]}>
                            <View style = {[myStyle.childFrPriceAndTimePageBid]}>
                                <Text style = {{color : color.warning, fontWeight : "bold", fontSize : 20, }}>10s</Text>
                                <Text style = {{color : color.inactive}}>Happenning</Text> 
                            </View>
                            <View style = {[myStyle.childFrPriceAndTimePageBid]}>
                                <Text style = {{color : color.text_primary, fontWeight : "bold", fontSize : 20,}}>$60</Text>
                                <Text style = {{color : color.inactive}}>Price bid</Text> 
                            </View>
                        </View>
                </View>

                <View style ={[myStyle.nameProductPageBid]}>
                    <Text style ={{fontSize: 20, color: color.text, fontWeight:"500"}}>Chicken red</Text>
                </View>

       
                <View style ={[myStyle.frListBidder]}>
                    <Text style ={[myStyle.headerBidder]}>Bidder</Text>
                    <ListBidder
                        bidders = {this.state.bidders}
                    ></ListBidder>
                </View>
                
                <View style={[myStyle.frButtonBid]}>
                    <TouchableOpacity
                        style = {[myStyle.buttonBid]}
                    >
                        <Text style={[myStyle.btnSmall]}>Palce A Bid</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        )
    }
}

type props = {

}

type state ={
    data : Array<any>
    bidders :Array<any>
}