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
import flatListData from '../flatlist/flatListData';
import Swipeout from 'react-native-swipeout';
import AddModal from '../flatlist/AddModal';

class FlatListItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeRowKey: null
        };
    }

    render() {
        const swipeSettings = {
            autoClose: true,
            onClose: (secId,rowId,direction) => {
                if(this.state.activeRowKey != null) {
                    this.setState({activeRowKey:null});
                }
            },
            onOpen: (secId,rowId,direction) => {
                this.setState({activeRowKey : this.props.item.key});
            },
            right: [
                {
                    onPress: () => {
                            const deletingRow = this.state.activeRowKey;
                        Alert.alert(
                            'Alert',
                            'Are you sure you want to delete?',
                            [
                                {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                                {text: 'Yes', onPress: () => {
                                      flatListData.splice(this.props.index, 1);  
                                      //refresh flatlist
                                      this.props.parentFlatList.refreshFlatList()
                                }},
                            ],
                            {cancelable: true}
                        );
                    },
                    text: 'Delete', type: 'delete'
                }
            ],
            rowId: this.props.index,
            sectionId: 1
        };

        return(
        <Swipeout {...swipeSettings} style = {{backgroundColor:'transparent'}}>
        <View style = {{
            flex: 1,
            flexDirection: 'column',
        }}>
        <View style = {{
            height: 170,
            flex:1,
            backgroundColor: "#ecf0f1",
            marginTop: 10,
            borderRadius: 25,
            borderWidth: 3,
            width: 300,
            left:'9%'
            
        }}>
        <View style = {{
            flex: 1,
            flexDirection: 'column',
            height: 100
        }}>
        <Text style={styles.flatListItem}>
            Driver Name: {this.props.item.name}
        </Text>
        <Text style={styles.flatListItem}>
            Contact Number: {this.props.item.contact}
        </Text>
        <Text style={styles.flatListItem}>
            Vehicle: {this.props.item.vehicle}
        </Text>
        <Text style={styles.flatListItem}>
            Body Number:{this.props.item.bodynum}
        </Text>
        </View>
        </View>
        <View style = {{
            height: 1,
        }}>
        </View>
        </View>
        </Swipeout>
        );
    }}

const styles = StyleSheet.create({
    flatListItem:{
        color: 'black',
        padding: 10,
        fontSize: 16,
    },

    yeah:{
        flex: 1, 
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
      }
});

export default class FirstSlide extends React.Component{ 
    constructor(props) {
        super(props);
        this.state = ({
            deletedRowKey: null,
        });
        this._onPressAdd = this._onPressAdd.bind(this);
    }
    refreshFlatList = (deletedKey) => {   //change state when refreshed
        this.setState((prevState) => {
            return {
                deletedRowKey: deletedKey
            };
        });
        this.refs.flatlist.scrollToEnd();
    }
    _onPressAdd (){
        // alert("Adding A Driver");
        this.refs.addModal.showAddModal();
    }
    render(){
        return( //Sa taas nya
            <ImageBackground 
            source = {require('../images/homesplash.png')}
            style = {styles.image}>
            <View style = {{flex: 1, marginTop: Platform.OS === 'ios' ? 34:0}}>
            <View style = {{
                backgroundColor: 'gray',
                height: 64,
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center'
            }}>
            <TouchableHighlight style = {{marginRight: 10}}
            underlayColor = 'tomato'
            onPress = {this._onPressAdd}> 
            <Image
                style = {{width: 35, height: 35}}
                source = {require('../images/add-icon.png')}
            />   
            </TouchableHighlight>
            </View>
            <View style = {styles.yeah}>
                <FlatList
                    ref = {"flatlist"}
                    data = {flatListData}
                    renderItem = {({item, index}) => {
                //{console.log('Item = ${JSON.stringfy(item)}, index = ${index}');
                        return(
                            <FlatListItem item = {item} index = {index} parentFlatList = {this}> 

                            </FlatListItem>);
                    }}
                    >
                </FlatList>
                <AddModal ref={'addModal'} parentFlatList={this}> 

                </AddModal>
            </View>
            </View>
            </ImageBackground>
        );
    }
}
