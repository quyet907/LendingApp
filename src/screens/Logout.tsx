import React, { Component } from "react";
import {
  View,
  Button,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import myStyle from "../style";
import { UserService } from "../services/UserService";
import { Actions } from "react-native-router-flux";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import * as Color from "../Color";
import Separator from "../components/Separator";

export default class Logout extends Component<props, state> {
  constructor(props: any) {
    super(props);
    this.state = {
      getPhone: "",
    };
  }
  componentDidMount() {
    UserService.getMe().then((res) => {
      if (res != null) {
        if (res.username != null) {
          this.setState({ getPhone: res.username || "" });
        }
      }
    });
  }

  render() {
    return (
      <View style={[myStyle.container]}>
        <View style={[styles.header]}>
          <Text style={[styles.contentHeader]}>Account</Text>
        </View>

        <View style={[myStyle.row, styles.layoutAccout]}>
          <View style={[styles.containerAvt]}>
            {/* <Image
              style={[styles.imgAvt]}
              source={require("../icons/05-your-face-is-rad-san-diego-headshot-and-business-branding-photographer-gallery.jpg")}
            /> */}
          </View>
          <View style={{ justifyContent: "space-around", height: "100%" }}>
            <Text style={[styles.contentAccount]}>{this.state.getPhone}</Text>
          </View>
        </View>

        {/* <View style = {{marginTop: 12}}>
          <TouchableOpacity style={[myStyle.row, styles.layoutAccout]}>
            <FontAwesome name={"user"} size={30} color={"white"} />
            <Text style={[styles.contentFuture]}>Future 1</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={[myStyle.row, styles.layoutAccout]}>
            <FontAwesome name={"user"} size={30} color={"white"} />
            <Text style={[styles.contentFuture]}>Future 1</Text>
          </TouchableOpacity>
        </View> */}

        <View style={{ marginTop: 12 }}>
          <TouchableOpacity style={[myStyle.row, styles.layoutAccout]}
            onPress = {()=>{
                UserService.setJWT("").then(res =>{
                    Actions.home()
                })
            }}
          >
            <FontAwesome name={"sign-out"} size={30} color={Color.primary} />
            <Text style={[styles.contentFuture]}>Log out</Text>
            
          </TouchableOpacity>

          {/* <TouchableOpacity style={[styles.buttonLogout]}>
            <Text style={[styles.contentButtonLogout]}>Logout</Text>
          </TouchableOpacity> */}

        </View>
      </View>
    );
  }
}
type props = {};

type state = {
  getPhone: string;
};

const styles = StyleSheet.create({
  header: {
    padding: 20,

    margin: 2,
    // backgroundColor : Color.dark,
  },
  contentHeader: {
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "white",
  },
  layoutAccout: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
    // justifyContent: "center",
    borderRadius: 5,
    backgroundColor: Color.dark,
    borderBottomWidth: 1,
    borderColor: Color.inactive,
  },
  contentAccount: {
    color: "white",
    paddingLeft: 17,
    fontSize: 16,
    fontWeight: 'bold'
  },
  contentFuture: {
    color: "white",
    paddingLeft: 17,
    fontSize: 16, 
  }  ,
  buttonLogout: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Color.primary,
    margin: 20,
  },
  contentButtonLogout: {
    fontSize: 16,
    color: Color.primary,
    textTransform: "uppercase",
  },
  containerAvt: {
    backgroundColor: 'gray',
    borderRadius: 50,
    width: 55,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
  },
  imgAvt: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 50,
  },
});
