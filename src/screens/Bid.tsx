import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import myStyle from "../style";
import Carousel from "react-native-snap-carousel";
import ListBidder from "../components/bid/ListBidder";
import * as color from "../Color";
import { BidProduct } from "@StockAfiCore/model/bid/BidProduct";
import { BidService } from "../services/BidService";
import { Product } from "@StockAfiCore/model/product/Product";
import { BidHistory } from "@StockAfiCore/model/bid/BidHistory";
import { Paging } from "@Core/controller/Paging";
import { MyFormat } from "../Helper/MyFormat";
import { firebase } from "../config/FirebaseConfig";
import { BaseUser } from "@Core/model/user/BaseUser";
import I18n from "../i18n/i18n";
import { User } from "@StockAfiCore/model/user/User";
import { UserService } from "../services/UserService";
import { ScrollView } from "react-native-gesture-handler";
import * as actionPopup from "../Action/ActionPopup";
import PopupConfirm from "../components/PopupConfirm";
import PopupShow from "src/components/PopupShow";
import Finance from "src/reducer/FinanceReducer";
import { IncomeService } from "../services/IncomeService";
// import PopupShow from 'src/components/PopupShow';
// import PopupConfirm from 'src/components/PopupConfirm';

// pageBid.render();
var timeahihi;
var bidProductId = "";
class Bid extends Component<props, state> {
  constructor(props: any) {
    super(props);
    this.state = {
      bidProduct: {},
      timeBid: 10,
      me: {},
      showConfirm: false,
      remainAmountMoney: 0,
    };

    bidProductId = this.props.route.params.bidProductId;
  }

  listenOnChange() {
    var copyBidProduct: BidProduct = this.state.bidProduct;
    var fireStoreFirebase = firebase.firestore();
    var getBidProductFirebase = fireStoreFirebase
      .collection("bidProduct")
      .doc(bidProductId);
    var self = this;
    getBidProductFirebase.onSnapshot(
      {
        includeMetadataChanges: true,
      },
      function (doc) {
        if (doc) {
          var firebaseBidProduct = doc.data();
          if (firebaseBidProduct) {
            copyBidProduct.endPrice = firebaseBidProduct.endPrice;
            let checkUniqueHistory = copyBidProduct?.listHistoryBid?.find(
              (index) => index._id == firebaseBidProduct?.lastHistoryId
            );
            if (!checkUniqueHistory) {
              var createObjectBidHistory: BidHistory = {};
              var createUser: BaseUser = {
                username: firebaseBidProduct.latestBidUser,
                _id: firebaseBidProduct.latestBidUserId,
              };
              createObjectBidHistory.user = createUser;
              createObjectBidHistory._id = firebaseBidProduct.lastHistoryId;
              createObjectBidHistory.bidPrice = copyBidProduct.stepPrice;
              copyBidProduct.listHistoryBid?.unshift(createObjectBidHistory);
            }
            if (firebaseBidProduct.latestBidAt) {
              copyBidProduct.latestBidAt = new Date(
                firebaseBidProduct.latestBidAt.seconds * 1000
              );
            }
            self.renderDataBid(copyBidProduct);
          }
        }
      }
    );
  }

  componentDidMount() {
    BidService.getBidInfo(bidProductId).then((bidProduct: BidProduct) => {
      bidProduct.listHistoryBid?.reverse();
      this.renderDataBid(bidProduct);
      this.listenOnChange();
    });

    UserService.getMe().then((getMe) => {
      this.setState({ me: getMe ? getMe : {} });
    });

    IncomeService.getFinance().then((finance) => {
      this.setState({
        remainAmountMoney: finance.remainAmount || 0,
      });
    });

    timeahihi = setInterval(() => {
      this.setState({
        timeBid: BidService.getTimeCalc(this.state.bidProduct),
      });
    }, 500);
  }

  renderDataBid(bidProduct: BidProduct) {
    this.setState({
      bidProduct: bidProduct,
    });
  }

  confirmReceiveBid() {
    BidService.receiveReward(bidProductId).then((bidProduct: BidProduct) => {
      if (bidProduct) {
        actionPopup.showMessage(I18n.t("popup.message.receiveAfter24h"));
        this.setState({
          bidProduct: bidProduct,
        });
      }
    });
  }

  render() {
    console.log(this.state.bidProduct.listHistoryBid);
    const countBid =
      this.state.bidProduct.listHistoryBid?.filter(
        (item) => item.user?._id === this.state.me._id
      ).length || 0;
    return (
      <View style={[myStyle.containerLight]}>
        {/* <View style={[myStyle.btnCloseBid]}>
                    <TouchableOpacity style={[]}
                        onPress={() => {
                            Actions.home();
                        }}
                    >
                        <Text>X</Text>
                    </TouchableOpacity>
                </View> */}
        <ScrollView>
          <View style={[{ alignItems: "center" }]}>
            <Carousel
              layout={"tinder"}
              style={[]}
              data={this.state?.bidProduct?.product?.thumbImagesUrl}
              renderItem={(item: any) => {
                return (
                  <View style={[myStyle.frImgProdcurBid, { height: 300 }]}>
                    <Image
                      style={[myStyle.imgProductBid]}
                      source={{ uri: `${item.item}` }}
                    />
                  </View>
                );
              }}
              sliderWidth={window.innerWidth}
              itemWidth={window.innerWidth}
            />

            <View style={[myStyle.frPriceAndTimePageBid]}>
              <View style={[myStyle.childFrPriceAndTimePageBid]}>
                <Text
                  style={{
                    color: color.warning,
                    fontWeight: "bold",
                    fontSize: 20,
                  }}
                >
                  {BidService.changeTextTime(this.state.timeBid)}
                </Text>
                <Text
                  style={{ color: color.inactive, textTransform: "capitalize" }}
                >
                  {BidService.changeTextStatus(this.state.timeBid)}
                </Text>
              </View>
              <View style={[myStyle.childFrPriceAndTimePageBid]}>
                <Text
                  style={{
                    color: color.text_primary,
                    fontWeight: "bold",
                    fontSize: 20,
                  }}
                >
                  {MyFormat.roundingMoney(
                    BidService.getPriceBidProduct(this.state.bidProduct)
                  )}
                </Text>
                <Text
                  style={{
                    color: color.inactive,
                    textDecorationLine: "line-through",
                  }}
                >
                  {MyFormat.roundingMoney(
                    this.state.bidProduct.startPrice || 0
                  )}
                </Text>
              </View>
            </View>
          </View>

          <View style={[myStyle.nameProductPageBid]}>
            <Text
              style={{
                fontSize: 16,
                textAlign: "center",
                color: color.text,
                fontWeight: "500",
                flex: 1,
              }}
            >{`${BidService.getNameBidProduct(this.state.bidProduct)}`}</Text>
            <View style={{ flex: 1, display: "flex", flexDirection: "column" }}>
              <Text style={{ color: color.primary, textAlign: "center" }}>
                {MyFormat.roundingMoney(100)} xu/lượt
              </Text>
              <Text
                style={{
                  color: "#fff",
                  textAlign: "center",
                  marginTop: 5,
                  marginBottom: 5,
                }}
              >
                {MyFormat.roundingMoney(this.state.remainAmountMoney)} xu
              </Text>
              <Text style={{ color: "#fff", textAlign: "center" }}>
                {" "}
                {countBid} lần
              </Text>
            </View>
          </View>

          <View style={[myStyle.frListBidder]}>
            <Text style={[myStyle.headerBidder]}>
              {I18n.t("screens.bidDetail.bidderTitle")}
            </Text>
            <ListBidder
              bidders={this.state?.bidProduct?.listHistoryBid || []}
            ></ListBidder>
          </View>
        </ScrollView>

        <View style={[myStyle.frButtonBid]}>
          <TouchableOpacity
            style={
              BidService.checkButton(this.state.bidProduct, this.state.me)
                ? [myStyle.buttonBid]
                : [myStyle.buttonBid, myStyle.ButtonBidDisabled]
            }
            onPress={(event) => {
              if (BidService.getTimeCalc(this.state.bidProduct) < 0) {
                this.setState({
                  showConfirm: true,
                });
              } else {
                BidService.BidAction(bidProductId).then(_ => {
                    this.setState({
                        remainAmountMoney: this.state.remainAmountMoney - (this.state.bidProduct?.stepPrice || 0)
                    })
                });
              }
            }}
            disabled={
              !BidService.checkButton(this.state.bidProduct, this.state.me)
            }
          >
            <Text style={[myStyle.btnSmall]}>
              {BidService.changTextButtonBid(
                this.state.bidProduct,
                this.state.me
              )}
            </Text>
          </TouchableOpacity>
        </View>

        <PopupConfirm
          confirmModal={this.state.showConfirm}
          hideBtnCancel={true}
          textButtonLeft={I18n.t("popup.yesNo.no")}
          textButtonRight={I18n.t("popup.yesNo.yes")}
          buttonOK={() => {
            this.confirmReceiveBid();
            this.setState({ showConfirm: false });
          }}
          buttonCancel={() => {
            this.setState({ showConfirm: false });
          }}
          title="Confirm"
          message={I18n.t("popup.message.deduction")}
        />
      </View>
    );
  }
}

type props = {
  route: any;
};

type state = {
  bidProduct: BidProduct;
  timeBid: number;
  me: BaseUser;
  showConfirm: boolean;
  remainAmountMoney: number;
};

export default function (props: any) {
  return <Bid {...props} />;
}
