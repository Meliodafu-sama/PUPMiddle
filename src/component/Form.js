import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {Actions} from 'react-native-router-flux';

export default class Logo extends Component<{}> {
    book() {
        Actions.book()
      }

    render() {
      return (
        <View style={styles.container}>
            <TextInput style ={styles.inputBox} 
                underlineColorAndroid = 'rgba(0,0,0,0)' 
                placeholder="Username"
                placeholderTextColor="#ffffff"
                selectionColor="#fff"
                keyboardType="email-address"
                onSubmitEditing={() => this.password.focus()}
                />
            <TextInput style ={styles.inputBox1} 
                underlineColorAndroid = 'rgba(0,0,0,0)' 
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor="#ffffff"
                ref={(input) => this.password = input}
                />
            <TouchableOpacity onPress = {this.book} style ={styles.button}>
                <Text style = {styles.buttonText}>
                    Log In
                </Text>
            </TouchableOpacity>
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    
    inputBox: {
        width: 310,
        flexDirection: 'row',
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 30,
        fontSize: 18,
        color: '#ffffff',
        marginVertical: 10,
        top: '50%'
    },

    inputBox1: {
        width: 310,
        flexDirection: 'row',
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 30,
        fontSize: 18,
        color: '#ffffff',
        marginVertical: 10,
        top: '50%'
    },

    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center',
        paddingVertical: 12
    },

    button: {
        width: 300,
        backgroundColor:'#1c313a',
        borderRadius:25,
        marginVertical: 10,
        top: '50%'
    }
  });
