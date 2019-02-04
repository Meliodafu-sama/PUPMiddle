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
  TouchableHighlight
} from 'react-native';
import {Router, Stack, Scene} from 'react-native-router-flux';
import {Actions} from 'react-native-router-flux';
import flatListData1 from '../flatlist/flatListData1';

class FlatListItem extends Component {
    render() {
        return (
            <View style = {{
                flex: 1,
                backgroundColor: "#ecf0f1",
                marginTop: 10,
                borderRadius: 25,
                borderWidth: 3,
                width: 310,
                left:'7.5%',
                height: 225
            }}>
                <Text style={styles.flatListItem}>
                    Driver: {this.props.item.name}
                </Text>
                <Text style={styles.flatListItem}>
                    Contact: {this.props.item.contact}
                </Text>
                <Text style={styles.flatListItem}>
                    Vehicle Number: {this.props.item.bodynum}
                </Text>
                <Text style={styles.flatListItem}>
                    Origin: {this.props.item.origin}
                </Text>
                <Text style={styles.flatListItem1}>
                    Destination: {this.props.item.desti}
                </Text>
                <Text style={styles.flatListItem2}>
                    Vehicle: {this.props.item.vehicle}
                </Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    flatListItem:{
        color: 'black',
        padding: 10,
        fontSize: 16,
    },
    flatListItem1:{
        color: 'black',
        padding: 10,
        fontSize: 16,
        left: '42%',
        bottom: '18.75%'
    },
    flatListItem2:{
        color: 'black',
        padding: 10,
        fontSize: 16,
        bottom: '17%'
    },

    yeah:{
        flex: 1, 
    },
    textfont: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 28,
        color: 'white',
        left: '2%'
    },
});

export default class ThirdSlide extends Component {
    render() {
        return (
            <View style = {{flex: 1, marginTop: 22}}>
                <Text style = {styles.textfont}>Accepted Requests</Text>
                <FlatList
                    data = {flatListData1}
                    renderItem = {({item, index}) => {
                        return(
                            <FlatListItem
                            item = {item} index = {index}>
                            </FlatListItem>
                        );
                    }}
                >

                </FlatList>
            </View>
        );
    }
}