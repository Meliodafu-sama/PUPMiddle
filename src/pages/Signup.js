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

import SignupForm from '../component/SignupForm';

export default class Signup extends Component<{}> {

  goback() {
    Actions.pop();
  }
    render() {
      return (
        <ImageBackground 
            source = {require('../images/driversignsplash.png')}
            style = {styles.image}>

        <View style={styles.container}>
          <SignupForm type = "Signup"/>

          <View style={styles.signupTextCont}>
                    <Text style ={styles.signupText}>
                        Already Have An Account?
                    </Text>
                    <TouchableOpacity onPress={this.goback}>
                    <Text style = {styles.signupbutton}>
                      Sign In
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