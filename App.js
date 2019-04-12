import React, { Component } from 'react';
//import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';
import GetAllUser from './requests/getAllUser'

import {createBottomTabNavigator, createStackNavigator, createAppContainer} from 'react-navigation';
import BlueRed from './screens/BlueRedScreen'
import UserScreen from './screens/UserScreen'
import HomeScreen from './screens/HomeScreen'

const MainNavigator = createBottomTabNavigator({
  BlueRed: {screen: BlueRed},
  Home: {screen: HomeScreen},
  GetReuest: {screen: UserScreen},
});

const App = createAppContainer(MainNavigator);

export default App;