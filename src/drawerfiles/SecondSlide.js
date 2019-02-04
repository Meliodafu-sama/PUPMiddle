import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  ScrollView,
  AppRegistry,
  TouchableOpacity,
  Button,
  Image,
  ImageBackground,
  Picker,
  Item,
  FlatList,
  Alert,
  Dimensions,
  TouchableHighlight,
  processColor
} from 'react-native';
import {Router, Stack, Scene} from 'react-native-router-flux';
import {Actions} from 'react-native-router-flux';
import RequestData from '../flatlist/RequestData';
import Swipeout from 'react-native-swipeout';
// import SecondModal from '../flatlist/SecondModal';

class RequestDataItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeRowKey: null
        };
    }
    render() {
        const swipeSettings = {
            autoClose: true,
            onClose: (secId, rowId, direction) => {
                if(this.state.activeRowKey != null) {
                    this.setState({ activeRowKey:null });
                }
            },
            onOpen: (secId, rowId, direction) => {
                this.setState({ activeRowKey: this.props.item.key });
            },
            right: [
                {
                    onPress: () => {
                        const acceptedRow = this.state.activeRowKey
                        // this._onPressAdd
                        Alert.alert(
                            'Alert',
                            'Do you wish to accept the request?',
                            [
                                { text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                                { text: 'Yes', onPress: () => {
                                        RequestData.splice(this.props.index, 1);
                                        //Refresh data
                                        this.props.parentFlatList.refreshRequestData(acceptedRow);
                                }},
                            ],
                            { cancelable: true }
                        )
                    },
                    text: 'Accept', type: 'accept'
                }
            ],
            rowId: this.props.index,
            sectionId: 1
        };
        return (
        <Swipeout {...swipeSettings} style = {{backgroundColor:'transparent'}}>
            <View style = {{
                flex:1,
                flexDirection: 'column',
                backgroundColor: "#ecf0f1",
                marginTop: 5,
                borderRadius: 25,
                borderWidth: 3,
                width: 280, 
                left:'11%',
                height: 180
            }}>
                <Text style = {styles.upper}>
                       Your Current Trip
                </Text>
                <Text style = {styles.requesttext}>
                    Name: {this.props.item.name}
                </Text>
                <Text style = {styles.requesttext}>
                    Origin: {this.props.item.Origin}
                </Text>
                <Text style = {styles.requesttext}>
                    Destination: {this.props.item.Destination}
                </Text>
                <Text style = {styles.requesttext1}>
                    Vehicle:{this.props.item.Vehicle}
                </Text>
                <Text style = {styles.requesttext2}>
                    Price: {this.props.item.TransType}
                </Text>
            </View>
        </Swipeout>
        );
    }
}
const styles = StyleSheet.create({
    requesttext: {
        color: 'black',
        padding: 8,
        fontSize: 14,
    },
    requesttext1: {
        color: 'black',
        padding: 8,
        fontSize: 14,
        left: '50%'
    },
    requesttext2: {
        color: 'black',
        padding: 8,
        fontSize: 14,
        bottom: '20%'
    },

    textfont: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 28,
        color: 'white',
    },

    upper: {
        fontSize: 20,
        left: '9%'
    }
});

export default class SecondSlide extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            AcceptedRowKey: null,
        });
        // this._onPress = this._onPress.bind(this);
    }
    // _onPressAdd () {
    //     this.refs.secmod.showSecondModal();
    // }
    refreshRequestData = (acceptedKey) => {
        this.setState((prevState) => {
            return {
                AcceptedRowKey: acceptedKey
            };
        });
    }
    render() {
        return (
            <View style = {{flex: 1}}>
                <Text style = {styles.textfont}>Booking Requests</Text>
                <FlatList data = {RequestData}
                        renderItem = {({item, index}) => {
                            return(
                                <RequestDataItem item = {item} index = {index} parentFlatList = {this}>

                                </RequestDataItem>
                            );
                        }}
                >
                
                </FlatList>
                {/* <SecondModal ref={'secmod'} parentFlatList={this}>

                </SecondModal> */}
            </View>
        )
    }
}
