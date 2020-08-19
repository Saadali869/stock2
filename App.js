import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer,StackActions,NavigationActions} from 'react-navigation';
import Currentinfo from './components/currentinfo';
import Forecast from './components/forecast';
import History from './components/history';
import Home from './components/home';
import axios from 'axios'

const stack=createStackNavigator({

  home:Home,
  history:History,
  currentinfo:Currentinfo,
 forecast:Forecast,
                              },
                {
initialRouteName:'home'
                },
                   

)


  export default createAppContainer(stack);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
