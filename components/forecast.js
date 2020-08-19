import React, { Component } from 'react';
import { StyleSheet, Text, View ,ScrollView,ImageBackground, Alert,Image,Dimensions} from 'react-native';
import {TextInput,Button,Card, Title, Paragraph,Appbar,TouchableRipple,List,RadioButton,Switch,Drawer} from 'react-native-paper'
import axios from 'axios';

export default class Forecast extends Component {
state={  
  company_src:"",
  company_forecast:[],
}
_listEmptyComponent = () => {
  return (
      <View>
         
      </View>
  )
}
predmarkinfo() {
  let data = JSON.stringify({ company_name: this.state.company_src });
  axios
    .post("http://192.168.1.2:5000/forecast", data, {
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => {
      
      this.setState({ company_forecast:response.data });
      console.log(this.state.company_forecast)
    })
    .catch((err) => console.log(err));
}
render(){
  const screenwidth=Dimensions.get('window').width
  const screenheight=Dimensions.get('window').height
  const markdata= this.state.company_forecast.map((markinfo)=>{
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
      padding: 10,
    }}
  >
    {markinfo.company_name}
  </Text>
  
  <Text
    style={{
      borderWidth: 3,
      borderColor: "black",
      margin: 5,
      padding: 10,
    }}
  >
    {markinfo.prediction}
  </Text>

  </View>)})
return(

<View>
  <ImageBackground source={require('../assets/brown.jpeg')} style={{height:screenheight,width:screenwidth}} >
<View style={{marginTop:34,alignItems:'center',}}>
   
    
    <View style={{flexDirection:'row'}}>
        <TextInput
       
      placeholder='Enter Company Name'
      style={{marginTop:27,width:250,height:42}}
      mode='outlined'
        value={this.state.text}
        onChangeText={text => this.setState({ company_src:text })}
      />
       <Button  mode="contained" style={{marginTop:34,marginLeft:7,height:42,padding:5}} onPress={this.predmarkinfo.bind(this)} >
    Search
  </Button>
      </View>
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
                  prediction
                </Text>
                
              </View>
              <View>{markdata}</View>
              
              
            </ScrollView>
</View>
</ImageBackground>
</View>

)
}
}
  


const customTheme = {
    dark: false,
    roundness: 4,
    colors: {
      primary: '#034748',
      accent: '#11B5E4',
      background: '#F1F7ED',
      surface: '#F1F7ED',
      text: '#001021',
      error: '#B71F0E',
      disabled: '#BEC6C6',
      placeholder: '#1481BA',
      backdrop: '#001021',
    },
    fonts: {
      regular: 'Helvetica Neue',
      medium: 'Helvetica Neue Light',
    },
  }