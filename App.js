import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';
import {StackNavigator,DrawerNavigator} from 'react-navigation';
import Routes from './src/Routes';

export default class App extends Component<{}> {
  render() {
    return (
      <Routes/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#455A64',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
