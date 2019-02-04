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
import flatListData from '../flatlist/flatListData';

var screen = Dimensions.get('window');

export default class AddModal extends Component{
    constructor(props) {
        super(props);
        this.state = {
            newName: '',
            newContact: '',
            newVehicle: '',
            newBodyNum: '',
        };
    }
    showAddModal = () => {
        this.refs.myModal.open(); //opens modal
    }
    generateKey = (numberOfCharacters) => {
        return require('random-string')
                ({length: numberOfCharacters});
    }
    render(){
        return(
            <Modal
                ref = {"myModal"} //Modal reference
                style = {{
                    justifyContent: 'center',
                    borderRadius: Platform.OS === 'ios' ? 30 : 0, // 30 for ios and 0 for android
                    shadowRadius: 10,
                    borderRadius: 25,
                    width: screen.width - 60, //for modal screen
                    height: 450
                }}
                position = 'center'
                backdrop = {true}
                onClosed = {() => {
                    // alert("New Driver Added")s
                }}
            >
                <Text style = {{
                    fontSize: 16,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 10
                }}> Add A Driver </Text>
                <TextInput
                    style = {{
                        height: 40,
                        borderBottomColor: 'gray',
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 20,
                        marginBottom: 10,
                        borderBottomWidth: 1
                    }}
                    onChangeText = {(text) => this.setState({newName: text})}
                    placeholder = "Enter Driver Name"
                    value = {this.state.newName}
                />
                <TextInput
                    style = {{
                        height: 40,
                        borderBottomColor: 'gray',
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 20,
                        marginBottom: 10,
                        borderBottomWidth: 1
                    }}
                    onChangeText = {(text) => this.setState({newContact: text})}
                    placeholder = "Enter Driver's Contact Number"
                    value = {this.state.newContact}
                />
                <TextInput
                    style = {{
                        height: 40,
                        borderBottomColor: 'gray',
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 20,
                        marginBottom: 10,
                        borderBottomWidth: 1
                    }}
                    onChangeText = {(text) => this.setState({newVehicle: text})}
                    placeholder = "Enter Driver's Vehicle Type"
                    value = {this.state.newVehicle}
                />
                <TextInput
                    style = {{
                        height: 40,
                        borderBottomColor: 'gray',
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 20,
                        marginBottom: 10,
                        borderBottomWidth: 1
                    }}
                    onChangeText = {(text) => this.setState({newBodyNum: text})}
                    placeholder = "Enter Vehicle Number"
                    value = {this.state.newBodyNum}
                />
                <Button
                    style = {{ fontSize: 18, color: 'white'}}  
                    containerStyle = {{
                        padding: 8,
                        marginLeft: 70,
                        marginRight: 70,
                        marginTop: 20,
                        height: 40,
                        borderRadius: 15,
                        backgroundColor: 'mediumseagreen'
                    }}
                    onPress = {() => {
                        if (this.state.newName.length == 0 || 
                            this.state.newContact == 0)
                            {
                                alert("Provide the Credentials Needed");
                                return;
                            }
                            const newKey = this.generateKey(24);
                            const newDriver = {
                                key: newKey,
                                name: this.state.newName,
                                contact: this.state.newContact,
                                vehicle: this.state.newVehicle,
                                bodynum: this.state.newBodyNum
                            };
                            flatListData.push(newDriver);
                            this.props.parentFlatList.refreshFlatList(newKey);
                            this.refs.myModal.close();
                    }}            
                    >
                    Save Driver Info
                </Button>
            </Modal>
        );
    }
}
