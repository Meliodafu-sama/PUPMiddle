import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  ScrollView,
  AppRegistry,
  TouchableOpacity,
  Image,
  Picker,
  Item,
  FlatList,
  Alert,
  TouchableHighlight,
  Dimensions,
  TextInput
} from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import RequestData from '../flatlist/RequestData';

var screen = Dimensions.get('window');

export default class SecondModal extends Component {
    constructor(props) {
        super(props);
    }
    showSecondModal = () => {
        this.refs.mysec.open();
    }
    render() {
        return (
            <Modal 
            ref = {"mysec"}
            style = {{
                    justifyContent: 'center',
                    borderRadius: Platform.OS === 'ios' ? 30:0,
                    shadowRadius: 10,
                    width: screen.width -80,
                    height: 280

            }}
            position = 'center'
            backdrop = {true}
            onClosed = {() => {
                alert("Modal Closed");
            }}
            >
                <Text>Give A Driver</Text>

            </Modal>
        );
    }
}