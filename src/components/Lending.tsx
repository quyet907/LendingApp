import * as React from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  Button,
  Clipboard,
  CheckBox,
  Alert,
} from "react-native";
import Separator from "./Separator";
import {
  TouchableOpacity,
  ScrollView,
  FlatList,
  TouchableHighlight,
} from "react-native-gesture-handler";
import HistoryDetailLending from "./ref-components/HistoryDetailLending";
import Package from "./Package";
import { LendingPackageService } from "../services/LendingPackageService";
import { LendingPackage } from "@StockAfiCore/model/lending/LendingPackage";
import { LendingService } from "../services/LendingService";
import { Lending as LendingModel } from "@StockAfiCore/model/lending/Lending";
import PopupConfirm from "./PopupConfirm";
import * as color from '../Color'
import { IncomeService } from "../services/IncomeService";

export default class Lending extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      initialValue: 0,
      wallet: 0,
      isSelected: false,

      packageSelected: true,
      packageID: "",
      packages: [],

      minInvestment: 1,
      // maxInvestment: 1000,

      buttonInvest: false,
      confirmModal: false,

      myInvest: [],
    };
  }
  componentDidMount() {
    LendingPackageService.getLendingPackage().then((pagingLendingPackages) => {
      console.log(pagingLendingPackages.rows);
      this.setState({
        packages: pagingLendingPackages.rows,
        packageID: pagingLendingPackages.rows[0]._id,
        minInvestment: pagingLendingPackages.rows[0].minInvestment || 0,
        // maxInvestment: pagingLendingPackages.rows[0].maxInvestment || 0,
      });
    });
    LendingService.getMyInvest().then((res) => {
      this.setState({ myInvest: res.rows });
    });
    IncomeService.getFinance().then((res) => {
      this.setState({ wallet: res.remainAmount || 0 })
    })
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ backgroundColor: color.background_primary }}>
          <View style={styles.container}>
            <Text style={styles.textLabel}>INVEST</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginTop: 10,
              }}
            >
              <Text style={styles.textLabel}>CHOOSE ONE PACKAGE</Text>
            </View>

            <ScrollView
              horizontal
              contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
            >
              {this.state.packages.map((item: LendingPackage) =>
                item._id == this.state.packageID ? (
                  <Package
                    key={item._id}
                    package={item}
                    setSelection={this.state.packageSelected}
                    isSelected={() => {
                      this.setState({
                        packageSelected: this.state.packageSelected,
                        minInvestment: item.minInvestment || 0,
                      }, this.enableButtonInvest);
                    }}
                  />
                ) : (
                    <Package
                      key={item._id}
                      package={item}
                      setSelection={!this.state.packageSelected}
                      isSelected={() => {
                        this.setState({ packageID: item._id },
                          () => this.setState({
                            minInvestment: item.minInvestment || 0,
                            // maxInvestment: item.maxInvestment || 0
                          }, this.enableButtonInvest));
                      }}
                    />
                  )
              )}
            </ScrollView>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginTop: 30,
              }}
            >
              <Text style={styles.textLabel}>Wallet Balance: {this.state.wallet} COIN</Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                height: 35,
              }}
            >
              <View style={styles.lblCoin}>
                <Text style={styles.copyText}>COIN</Text>
              </View>
              <TextInput
                value={this.state.initialValue.toString()}
                keyboardType={"number-pad"}
                style={styles.inputCoin}
                onChangeText={(text) => {
                  this.setState(
                    {
                      initialValue: parseInt(text),
                    }, this.enableButtonInvest);
                }}
              />
              <TouchableOpacity
                style={styles.btnAll}
                onPress={() => this.allCoin()}
              >
                <Text style={styles.copyText}>ALL</Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginTop: 10,
                alignItems: "center",
              }}
            >
              {/* <CheckBox
                value={this.state.isSelected}
                onValueChange={() => this.checkCheckbox()}
                style={{
                  backgroundColor:"red",
                  borderColor:"red"
                }}
              />
              <Text
                style={{ color: "#fff", paddingLeft: 10 }}
                onPress={this.checkCheckbox}
              >
                I have read and understood your terms of use
              </Text> */}
            </View>

            <View style={styles.btnInvest}>
              <TouchableOpacity
                style={
                  this.state.buttonInvest
                    ? styles.buttonActive
                    : styles.buttonInactive
                }
                disabled={!this.state.buttonInvest}
                onPress={() => this.setState({ confirmModal: true })}
              >
                <Text
                  style={{
                    paddingHorizontal: 10,
                    paddingVertical: 6,
                    fontSize: 16,
                    fontWeight: "700",
                  }}
                >
                  INVEST
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.container2}>
            {/* <Text style={styles.textLabel}>My Investsment</Text>
            <Separator /> */}
            <FlatList
              data={this.state.myInvest}
              renderItem={({ item }) => (
                <HistoryDetailLending
                  title={item.lendingPackage?.name || "undefined"}
                  type={true}
                  typeLabel="AMOUNT"
                  time={
                    this.getTime(item.createdAt)


                  }
                  coin={item.loanAmount || 0}
                />
              )}
              keyExtractor={(item) =>
                item._id != undefined ? item._id : "null"
              }
            />
          </View>
        </ScrollView>
        <PopupConfirm
          confirmModal={this.state.confirmModal}
          hideBtnCancel={true}
          buttonOK={() => {
            this.invest();
            this.setState({ confirmModal: false });
          }}
          buttonCancel={() => {
            this.setState({ confirmModal: false });
          }}
          title="Confirm"
          message="Are you sure want to invest?"
        />
      </View>
    );
  }

  checkCheckbox = () => {
    console.log('click')
    this.setState(
      {
        isSelected: !this.state.isSelected,
      },
      this.enableButtonInvest
    );
  };

  updateLending = () => {
    LendingService.getMyInvest().then((res) => {
      this.setState({ myInvest: res.rows });
    });
  };

  getTime = (date: Date | undefined): String => {
    if (date !== undefined) return date.toString().substring(0, 10);
    else return "null";
  };

  getDaysLeft = (endAt: Date | undefined): number => {
    const currentDate: Date = new Date();

    if (endAt) {
      const daysLeft = Math.floor(
        (Date.parse(endAt.toString().substr(0, 10)) - Date.parse(currentDate.toJSON().substr(0, 10))) /
        (1000 * 60 * 60 * 24)
      );
      return daysLeft > 30 ? 30 : daysLeft;
    }
    return 0;
  };

  profits = (
    amount: number,
    getDaysLeft: number,
    profitsPerDay: number
  ): number => {
    let profit: number =
      amount * (1 + profitsPerDay / 100) * getDaysLeft - amount;
    return Math.ceil(profit);
  };

  invest = () => {
    const lending: LendingModel = {
      lendingPackageId: this.state.packageID,
      loanAmount: this.state.initialValue,
    };
    LendingService.createLending(lending).then(() => {
      this.updateLending();
    });
  };

  allCoin = () => {
    this.setState({
      initialValue: this.state.wallet,
    },
      this.enableButtonInvest);
  };

  onChangeText = (text: any) => { };

  enableButtonInvest = (): void => {

    this.setState({
      buttonInvest:
        this.state.initialValue >= this.state.minInvestment &&
        this.state.initialValue <= this.state.wallet
      // &&         this.state.initialValue <= this.state.maxInvestment
      //  &&           this.state.isSelected == true,
    });

  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 10,
    paddingBottom: 5,
    backgroundColor: color.background,
  },
  container2: {
    paddingVertical: 20,
    paddingBottom: 5,
    paddingTop: 10,

  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: "cover",
    marginRight: 10,
  },
  inputCoin: {
    width: "100%",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontWeight: "500",
  },
  copy: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: "#FB8C00",
    borderColor: "#fff",
    borderWidth: 1.5,
    // outline: 'none',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderLeftWidth: 0,
  },
  copyText: {
    fontSize: 16,
    fontWeight: "700",

  },
  refAbout: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 20,
  },
  textLabel: {
    paddingVertical: 15,
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  buttonActive: {
    backgroundColor: color.primary,
    paddingHorizontal: 10,
    borderRadius: 2,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonInactive: {
    backgroundColor: color.inactive,
    paddingHorizontal: 10,
    borderRadius: 2,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  confirmModalActive: {
    width: "100%",
    height: "100%",
    backgroundColor: color.background,
    position: "absolute",
    zIndex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  confirmModalInactive: {
    display: "none",
  },
  btnAll: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: color.primary,
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3,
    paddingHorizontal: 15,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  btnInvest: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
    alignItems: "center",
  },
  lblCoin: {
    flexGrow: 1,
    backgroundColor: color.primary,
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 3,
    paddingHorizontal: 12,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

type Props = {};

type State = {
  initialValue: any;
  isSelected: boolean;
  wallet: number;

  packageSelected: any;
  packageID: any;
  packages: LendingPackage[];
  minInvestment: number;
  // maxInvestment: number;
  buttonInvest: boolean;
  confirmModal: boolean;

  myInvest: LendingModel[];
};
