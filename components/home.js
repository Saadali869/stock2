import React, { Component } from 'react';
import { StyleSheet, Text, View ,ScrollView,ImageBackground, Alert,Image,Dimensions} from 'react-native';
import {TextInput,Button,Card, Title, Paragraph,Appbar,TouchableRipple,List,RadioButton,Switch,Drawer} from 'react-native-paper'


export default class Home extends Component {

render(){

  const screenwidth=Dimensions.get('window').width
  const screenheight=Dimensions.get('window').height
return(

<View style={{width:screenwidth,height:screenheight}}>
  <ImageBackground source={require('../assets/hostel8.jpeg')} style={{height:screenheight,width:screenwidth}} >
<View style={{alignItems:"center",marginTop:83}}>
<View style={{borderWidth:4,borderColor:'white',width:200,height:150,borderRadius:22,padding:28,marginBottom:22,alignItems:"center"}}>
<TouchableRipple
    onPress={() => this.props.navigation.navigate('currentinfo')}
    rippleColor="rgba(0, 0, 0, .32)"
  >
    <Text style={{color:'white',fontSize:33,fontWeight:"bold"}}>Current Info</Text>
  </TouchableRipple>
  </View>
  


<View style={{borderWidth:4,borderColor:'white',width:200,height:150,borderRadius:22,padding:28,marginBottom:22,alignItems:"center"}}>
<TouchableRipple
  onPress={() => this.props.navigation.navigate('history')}
  rippleColor="rgba(0, 0, 0, .32)"
>
  <Text style={{color:'white',fontSize:33,fontWeight:"bold",marginTop:18}}>History</Text>
</TouchableRipple>
</View>



<View style={{borderWidth:4,borderColor:'white',width:200,height:150,borderRadius:22,padding:28,marginBottom:22,alignItems:"center"}}>
<TouchableRipple
    onPress={() => this.props.navigation.navigate('forecast')}
    rippleColor="rgba(0, 0, 0, .32)"
  >
    <Text style={{color:'white',fontSize:33,fontWeight:"bold",marginTop:18}}>Forecast</Text>
  </TouchableRipple>
  </View>

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