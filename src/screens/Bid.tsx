import React, { Component } from 'react'
import { View, Text , TouchableOpacity, Image} from 'react-native'
import myStyle from "../style"
import Carousel from 'react-native-snap-carousel';
export default class Bid extends Component {
    render() {
        return (
            <View style={[myStyle.containerLight]}>
                <View style={[myStyle.frHeader]}>
                    <TouchableOpacity
                        style={[myStyle.btnBack]}
                    >
                        <Text>Back</Text>
                    </TouchableOpacity>
                    <View style = {[myStyle.nameProductPageBid]}>
                        <Text style = {[myStyle.textNameProductPageBid]}>Con Heo</Text>
                    </View>
                    <TouchableOpacity
                        style={[myStyle.btnCountPeople]}
                    >
                        <Text>PeoPel : 100</Text>
                    </TouchableOpacity>
                </View>

                <View style={[myStyle.sliderBid]}>
                    <Carousel
                        layout={'tinder'}
                        style={[myStyle.sliderBid]}
                        data={[
                            "https://media.doanhnghiepvn.vn/Images/Uploaded/Share/2019/12/24/Dan-gai-xinh-em-chua-18-khien-dan-mang-lim-tim-lan-dau-gap-mat_3.jpg",
                            "https://media.doanhnghiepvn.vn/Images/Uploaded/Share/2019/12/24/Dan-gai-xinh-em-chua-18-khien-dan-mang-lim-tim-lan-dau-gap-mat_2.jpg",
                            "https://media.doanhnghiepvn.vn/Images/Uploaded/Share/2019/12/24/dan-gai-xinh-em-chua-18-khien-dan-mang-lim-tim-lan-dau-gap-mat.jpg",
                            "https://media.doanhnghiepvn.vn/Images/Uploaded/Share/2019/12/24/Dan-gai-xinh-em-chua-18-khien-dan-mang-lim-tim-lan-dau-gap-mat_2.jpg",

                        ]}

                        renderItem={({item})=>{
                            return (
                                <View style={[myStyle.frImgProdcurBid, {height : 400}]}>
                                    <Image
                                        style={[myStyle.imgProductBid]}
                                        source={{ uri: `${item}` }}
                                    />
                                </View>
                            )
                        }}
                        sliderWidth={"100%"}
                        itemWidth={350}
                        />
                </View>

                <View style= {[myStyle.infoStatusBid]}>
                    <View>
                        <Text style= {[myStyle.textPricePageBid]}>100.000</Text>
                    </View>
                    <View>
                        <Text style= {[myStyle.textTimePageBid]}>10s</Text>
                    </View>
                    <View>
                        <Text>Luong</Text>
                    </View>
                </View>


                <View>
                    <TouchableOpacity
                        style={[myStyle.btnMediumLight]}
                    >
                        <Text>Bid</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        )
    }
}
