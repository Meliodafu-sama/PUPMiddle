import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ImageBackground
} from 'react-native';

import {Actions} from 'react-native-router-flux';

import Form from '../component/Form';

export default class Login extends Component<{}> {

  signup() {
    Actions.signup()
  }

    render() {
      return (
        <ImageBackground 
            source = {require('../images/driversplash.png')}
            style = {styles.image}>

        <View style={styles.container}>
          <Form type = "Login"/>

        <View style={styles.signupTextCont}>
                    <Text style ={styles.signupText}>
                        Don't Have An Account?
                    </Text>
                    <TouchableOpacity onPress={this.signup}>
                    <Text style = {styles.signupbutton}>
                      SignUp
                    </Text>
                    </TouchableOpacity>
        </View>

        </View>
        </ImageBackground>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },

    signupTextCont: {
      flexGrow: 1,
      alignItems: 'flex-end',
      justifyContent: 'center',
      paddingVertical: 16,
      flexDirection: 'row'
    },

    signupText: {
      color: 'rgba(255,255,255, 0.7)',
      fontSize: 16,
    },

    signupbutton: {
      color: '#ffffff',
      fontSize: 16,
      fontWeight: '500'
    },

    image: {
      flex: 1,
      width: '100%',
      height: '100%',
    }
  });