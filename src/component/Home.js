import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
  ScrollView,
  AppRegistry,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  Image
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import {DrawerNavigator} from 'react-navigation';
import {TabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import FirstSlide from '../drawerfiles/FirstSlide';
import SecondSlide from '../drawerfiles/SecondSlide';
import ThirdSlide from '../drawerfiles/ThirdSlide'

export default class Home extends React.Component{
    render(){
        return (
            <ImageBackground 
            source = {require('../images/homesplash.png')}
            style = {styles.image}>
            <AppDrawerNavigator/>
            </ImageBackground>
    );
}
}
const AppDrawerNavigator = DrawerNavigator({
    Requests: {screen: SecondSlide},
    Drivers: { screen: FirstSlide},
    'Accepted Booking': {screen: ThirdSlide}
});
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1D283B'
    },

    largetxt: {
        flex: 1,
        fontSize: 52,
        paddingTop: 40,
        paddingRight: 12
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
      }
});
