import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  Alert,
  Image,
  Dimensions,
  FlatList,
} from "react-native";
import {
  TextInput,
  Button,
  Card,
  Title,
  Paragraph,
  Appbar,
  TouchableRipple,
  List,
  RadioButton,
  Switch,
  Drawer,
} from "react-native-paper";
import axios from "axios";
import lodash from 'lodash';
const httpreq = axios.create({ baseURL: "http://192.168.1.3:5000" });

export default class Currentinfo extends Component {
  state = {
    company_srch: "",
    currmarketinfo: [],
  };
 





touchDATA(){console.log('touched')}
  presentmarkinfo() {
    let data = JSON.stringify({ company_name: this.state.company_srch });
    axios
      .post("http://192.168.1.2:5000/currmarket", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        
        this.setState({ currmarketinfo:response.data });
        console.log(this.state.currmarketinfo)
      })
      .catch((err) => console.log(err));
  }
  _listEmptyComponent = () => {
    return (
        <View>
           
        </View>
    )
}
  render() {
    
    const screenwidth = Dimensions.get("window").width;
    const screenheight = Dimensions.get("window").height;
    const markdata= this.state.currmarketinfo.map((markinfo)=>{
      return(
      <View key={markinfo.company_name} style={{
      flexDirection: "row",
      backgroundColor: "#fff",
      //justifyContent: "space-between",
      alignItems: "center",
      marginTop: 5,
    }}>
      <Text
      style={{
        borderWidth: 3,
        borderColor: "black",
        margin: 5,
        padding: 8,
      }}
    >
      {markinfo.company_name}
    </Text>
    <Text
      style={{
        borderWidth: 3,
        borderColor: "black",
        margin: 5,
        padding: 8,
      }}
    >
      {markinfo.open}
    </Text>
    <Text
      style={{
        borderWidth: 3,
        borderColor: "black",
        margin: 5,
        padding: 8,
      }}
    >
      {markinfo.high}
    </Text>
    <Text
      style={{
        borderWidth: 3,
        borderColor: "black",
        margin: 5,
        padding: 8,
      }}
    >
      {markinfo.low}
    </Text>
    <Text
      style={{
        borderWidth: 3,
        borderColor: "black",
        margin: 5,
        padding: 8,
      }}
    >
      {markinfo.current}
    </Text>

    </View>)})
    return (

      <View style={{ justifyContent: "space-between" }}>
        <ImageBackground
          source={require("../assets/hostel9.jpeg")}
          style={{ height: screenheight, width: screenwidth }}
        >
          <View style={{ marginTop: 34, alignItems: "center" }}>
            <View style={{ flexDirection: "row" }}>
              <TextInput
                placeholder="Enter Company Name"
                style={{ marginTop: 27, width: 250, height: 42 }}
                mode="outlined"
                value={this.state.text}
                onChangeText={(text) => this.setState({ company_srch: text })}
              />
              <Button
                mode="contained"
                style={{ marginTop: 34, marginLeft: 7, height: 42, padding: 5 }}
                onPress={this.presentmarkinfo.bind(this)}
              >
                Search
              </Button>
            </View>
            <Text>{this.state.company_srch}</Text>
            <ScrollView >
              <View
                style={{
                  flexDirection: "row",
                  backgroundColor: "#fff",
                  //justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 20,
                }}
              >
                <Text
                  style={{
                    borderWidth: 3,
                    borderColor: "black",
                    margin: 5,
                    padding: 10,
                  }}
                >
                  company_name
                </Text>
                <Text
                  style={{
                    borderWidth: 3,
                    borderColor: "black",
                    margin: 5,
                    padding: 10,
                  }}
                >
                  open
                </Text>
                <Text
                  style={{
                    borderWidth: 3,
                    borderColor: "black",
                    margin: 5,
                    padding: 10,
                  }}
                >
                  high
                </Text>
                <Text
                  style={{
                    borderWidth: 3,
                    borderColor: "black",
                    margin: 5,
                    padding: 10,
                  }}
                >
                  low
                </Text>
                <Text
                  style={{
                    borderWidth: 3,
                    borderColor: "black",
                    margin: 5,
                    padding: 10,
                  }}
                >
                  current
                </Text>
                
              </View>
              <View>{markdata}</View>
              
              
            </ScrollView>
            
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const customTheme = {
  dark: false,
  roundness: 4,
  colors: {
    primary: "#034748",
    accent: "#11B5E4",
    background: "#F1F7ED",
    surface: "#F1F7ED",
    text: "#001021",
    error: "#B71F0E",
    disabled: "#BEC6C6",
    placeholder: "#1481BA",
    backdrop: "#001021",
  },
  fonts: {
    regular: "Helvetica Neue",
    medium: "Helvetica Neue Light",
  },
};
