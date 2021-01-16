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
import moment from "moment";
import { time } from "console";

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
      remainTime: 100,
      me: {},
      showConfirm: false,
      isShowConfirmPaid: false,
      isShowExhauseTimeBid: false,
      remainAmountMoney: 0,
      remainTimeBid: 0,
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
    UserService.getMe().then((getMe) => {
      this.setState({ me: getMe ? getMe : {} });

      BidService.getBidInfo(bidProductId).then((bidProduct: BidProduct) => {
        bidProduct.listHistoryBid?.reverse();
        this.renderDataBid(bidProduct);
        this.listenOnChange();
      });

      IncomeService.getFinance().then((finance) => {
        this.setState({
          remainAmountMoney: finance.remainAmount || 0,
        });
      });

      timeahihi = setInterval(() => {
        const remainTime =
          this.state.bidProduct && this.state.bidProduct.endBidAt
            ? Math.round(
                (new Date(this.state.bidProduct.endBidAt).getTime() -
                  new Date().getTime()) /
                  1000
              )
            : 1000;
        this.setState({
          timeBid: BidService.getTimeCalc(this.state.bidProduct),
          remainTime: remainTime,
        });
      }, 1000);
    });
  }

  renderDataBid(bidProduct: BidProduct) {
    let remainTimeBid = bidProduct.maxTimeBid || 100000;
    let timeBid = 0;
    bidProduct.listHistoryBid?.forEach((item) => {
      if (item.userId === this.state.me.id) timeBid++;
    });
    remainTimeBid = remainTimeBid - timeBid;
    if (remainTimeBid < 0) remainTimeBid = 0;
    this.setState({
      bidProduct: bidProduct,
      remainTimeBid: remainTimeBid,
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
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    flex: 1,
                  }}
                >
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
                    style={{
                      color: color.inactive,
                      textTransform: "capitalize",
                    }}
                  >
                    {BidService.changeTextStatus(this.state.timeBid)}
                  </Text>
                </View>
                {this.state.bidProduct.endBidAt && (
                  <View>
                    <Text
                      style={{
                        color: color.warning,
                        fontSize: 10,
                        marginTop: 5,
                      }}
                    >
                      Kết thúc:{" "}
                      {moment(this.state.bidProduct.endBidAt).format(
                        "hh:mm DD/MM"
                      )}{" "}
                      {this.state.remainTime < 60 && this.state.remainTime > 0
                        ? ` (${this.state.remainTime}s)`
                        : ""}
                    </Text>
                  </View>
                )}
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
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  textAlign: "center",
                  color: color.text,
                  fontWeight: "500",
                  flex: 1,
                }}
              >{`${BidService.getNameBidProduct(this.state.bidProduct)}`}</Text>

              <Text
                style={{
                  fontSize: 12,
                  textAlign: "center",
                  color: color.text,
                  fontWeight: "500",
                  flex: 1,
                }}
              >{`${this.state.bidProduct.product?.desc}`}</Text>
            </View>
            <View style={{ flex: 1, display: "flex", flexDirection: "column" }}>
              <Text style={{ color: color.primary, textAlign: "center" }}>
                {MyFormat.roundingMoney(this.state.bidProduct.stepPrice || 100)}{" "}
                xu/lượt
              </Text>
              {this.state.bidProduct.maxTimeBid && (
                <Text
                  style={{
                    color: color.primary,
                    textAlign: "center",
                    fontSize: 12,
                  }}
                >
                  Lựơt chơi: {MyFormat.roundingMoney(this.state.remainTimeBid)}/
                  {MyFormat.roundingMoney(
                    this.state.bidProduct.maxTimeBid || 10000
                  )}{" "}
                  lần
                </Text>
              )}
              <Text
                style={{
                  color: "#fff",
                  textAlign: "center",
                  marginTop: 5,
                  marginBottom: 5,
                }}
              ></Text>
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
                {countBid}
                {this.state.bidProduct &&
                this.state.bidProduct.startPrice &&
                this.state.bidProduct.stepPrice
                  ? "/" +
                    Math.round(
                      this.state.remainAmountMoney /
                        this.state.bidProduct.stepPrice
                    ) +
                    " lần"
                  : " lần"}
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
              this.state.bidProduct._id != null &&
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
                if (this.state.remainTimeBid <= 0) {
                  actionPopup.showMessage(
                    `Mỗi tài khoản, trong phiên này chỉ được đấu giá ${this.state.bidProduct.maxTimeBid} lần. Bạn đã hết lượt chơi cho phiên đấu giá này.`
                  );
                } else
                  BidService.BidAction(bidProductId)
                    .then((resp) => {
                      console.log(resp);
                      this.setState({
                        remainAmountMoney:
                          this.state.remainAmountMoney -
                          (this.state.bidProduct?.stepPrice || 0),
                      });
                    })
                    .catch((e) => {
                      if (e.response.status == 405) {
                        console.log(e.response?.data?.type);
                        if (e.response && e.response.data && e.response.data.type && e.response.data.type == "pending") {
                          this.setState({
                            isShowConfirmPaid: true,
                          });
                        } else {
                          this.setState({
                            isShowExhauseTimeBid: true,
                          });
                        }
                      }
                    });
              }
            }}
            disabled={
              !this.state.bidProduct._id &&
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

        <PopupConfirm
          confirmModal={this.state.isShowConfirmPaid}
          hideBtnCancel={true}
          textButtonLeft={I18n.t("popup.yesNo.no")}
          textButtonRight={I18n.t("popup.yesNo.yes")}
          buttonOK={() => {
            BidService.BidAction(bidProductId, true).then((value) => {
              this.setState({ isShowConfirmPaid: false });
            });
          }}
          buttonCancel={() => {
            this.setState({ isShowConfirmPaid: false });
          }}
          title="Confirm"
          message={`Bạn đã sử dụng hết lượt đấu giá miễn phí trong ngày. Tuy nhiên tài khoản của bạn còn ${this.state.me.paidTimeBid} lượt chơi đã mua. Nếu tham gia, bạn sẽ bị trừ đi ${this.state.bidProduct.feeTimeBid} lượt. Bạn có muốn tham gia lượt chơi này không?`}
        />

        <PopupConfirm
          confirmModal={this.state.isShowExhauseTimeBid}
          hideBtnCancel={true}
          textButtonLeft={"Không tham gia"}
          textButtonRight={"Mua thêm lượt"}
          buttonOK={() => {
            window.open(
              "https://m.me/106388164626050?ref=mua_them_luot",
              "_blank"
            );
            this.setState({ isShowExhauseTimeBid: false });
          }}
          buttonCancel={() => {
            this.setState({ isShowExhauseTimeBid: false });
          }}
          title="Confirm"
          message={`Bạn đã hết số lần tham gia đấu giá. Mỗi tài khoản mỗi ngày chỉ có thể tham gia 3 phiên miễn phí. Bạn có thể mua thêm số lượt chơi để tham gia phiên đấu giá này.`}
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
  remainTime: number;
  me: User;
  showConfirm: boolean;
  isShowConfirmPaid: boolean;
  isShowExhauseTimeBid: boolean;
  remainAmountMoney: number;
  remainTimeBid: number;
};

export default function (props: any) {
  return <Bid {...props} />;
}
