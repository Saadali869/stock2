import React, { Component } from 'react';
import { StyleSheet, Text, View ,ScrollView,ImageBackground, Alert,Image,Dimensions} from 'react-native';
import {TextInput,Button,Card, Title, Paragraph,Appbar,TouchableRipple,List,RadioButton,Switch,Drawer} from 'react-native-paper'
import axios from 'axios';
import { FlatList } from 'react-native-gesture-handler';
import moment from 'moment';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
export default class History extends Component {
state={  
  company_src:"",
  company_history:[],
  plot:false,
  xdat:[1],
  ydat:[1],
  plotted:false,
};
_listEmptyComponent = () => {
  return (
      <View>
         
      </View>
  )
}

pstmarkinfo() {
  let data = JSON.stringify({ company_name: this.state.company_src });
  axios
    .post("http://192.168.1.2:5000/history", data, {
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => {
      
      this.setState({ company_history:response.data });
      this.state.xdat.length=0;
      this.state.ydat.length=0;
      this.setState({plotted:false})
      this.setState({plot:true});
      console.log(this.state.company_history)
    })
    .catch((err) => console.log(err));
}
plotter(){
  this.state.company_history.map((item)=>{const time=moment(item.dated).format('YYYY-MM-DD');
this.state.xdat.push(time);});
this.state.company_history.map((item)=>{
this.state.ydat.push(item.close)});
console.log(this.state.xdat);
console.log(this.state.ydat);
  this.setState({plotted:true})
}
render(){
  const screenwidth=Dimensions.get('window').width
  const screenheight=Dimensions.get('window').height
  
  
  
  const markdata= this.state.company_history.map((markinfo)=>{
    let time=moment(markinfo.dated).format('YYYY-MM-DD')
    return(
    <View style={{
    flexDirection: "row",
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
  }}>
    <Text
    style={{
      borderWidth:1,
      margin: 3,
      padding: 1,
    }}
  >
    {time}
  </Text>
  <Text
    style={{
      borderWidth:1,
      margin: 3,
      padding: 1,
    }}
  >
    {markinfo.open}
  </Text>
  <Text
    style={{
      borderWidth:1,
      margin: 3,
      padding: 1,
    }}
  >
    {markinfo.high}
  </Text>
  <Text
    style={{
      
      borderWidth:1,
      margin: 3,
      padding: 1,
    }}
  >
    {markinfo.low}
  </Text>
  <Text
    style={{
      
      borderWidth:1,
      margin: 3,
      padding: 1,
    }}
  >
    {markinfo.close}
  </Text>

  </View>)})
return(

<View>
  <ImageBackground source={require('../assets/hostel10.jpeg')} style={{height:screenheight,width:screenwidth}} >
<View style={{marginTop:34,alignItems:'center',}}>
   
     
    <View style={{flexDirection:'row'}}>
        <TextInput
       
      placeholder='Enter Company Name'
      style={{marginTop:27,width:250,height:42}}
      mode='outlined'
        value={this.state.text}
        onChangeText={text => this.setState({ company_src:text })}
      />
       <Button  mode="contained" style={{marginTop:34,marginLeft:7,height:42,padding:5}} onPress={this.pstmarkinfo.bind(this)} >
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
                  date
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
                  close
                </Text>
                
              </View>
                <View>{markdata}</View>
                {
                  this.state.plot ? <View><Button  mode="contained" style={{marginTop:34,marginLeft:7,height:42,padding:5}} onPress={this.plotter.bind(this)} >
                  plot
                </Button></View> :null
                }
              <View>{this.state.plotted ? <LineChart data={{
      labels: this.state.xdat,
      datasets: [
        {
          data: this.state.ydat
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={220}
    yAxisLabel="close"
    yAxisSuffix=""
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "#fb8c00",
      backgroundGradientTo: "#ffa726",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />:null}</View>
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