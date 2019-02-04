import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

export default class SignupForm extends Component<{}> {

    constructor(props) {
        super(props)
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
            <TextInput style ={styles.inputBox1 } 
                underlineColorAndroid = 'rgba(0,0,0,0)' 
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor="#ffffff"
                ref={(input) => this.password = input}
                />
             <TextInput style ={styles.inputBox2 } 
                underlineColorAndroid = 'rgba(0,0,0,0)' 
                placeholder="First Name"
                placeholderTextColor="#ffffff"
                ref={(input) => this.password = input}
                />
             <TextInput style ={styles.inputBox3 } 
                underlineColorAndroid = 'rgba(0,0,0,0)' 
                placeholder="Last Name"
                placeholderTextColor="#ffffff"
                ref={(input) => this.password = input}
                />
             <TextInput style ={styles.inputBox4 } 
                underlineColorAndroid = 'rgba(0,0,0,0)' 
                placeholder="Contact Number"
                placeholderTextColor="#ffffff"
                ref={(input) => this.password = input}
                />
            <TouchableOpacity style = {styles.button}>
                <Text style= {styles.buttonText}>
                    {this.props.type}
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
      alignItems: 'center'
    },
    
    inputBox: {
        width: 310,
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 18,
        color: '#ffffff',
        marginVertical: 10,
        top: '11%'
    },

    inputBox1: {
        width: 310,
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 18,
        color: '#ffffff',
        marginVertical: 10,
        top: '11%'
    },
    inputBox2: {
        width: 310,
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 18,
        color: '#ffffff',
        marginVertical: 10,
        top: '11%'
    },
    inputBox3: {
        width: 310,
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 18,
        color: '#ffffff',
        marginVertical: 10,
        top: '11%'
    },
    inputBox4: {
        width: 310,
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 18,
        color: '#ffffff',
        marginVertical: 10,
        top: '11%'
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
        backgroundColor:'maroon',
        borderRadius:25,
        marginVertical: 10,
        top: '15%'
    }
  });