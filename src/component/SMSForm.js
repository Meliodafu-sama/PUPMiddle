import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Share
} from 'react-native';

export default class SMSForm extends Component {

    constructor(props) {
        super(props);
        this._shareMessage = this._shareMessage.bind(this);
        this._showResult = this._showResult.bind(this);
        this._fancyshareMessage = this._fancyshareMessage.bind(this);
        this.state = { result:'' }
    }
    _shareMessage() {
        Share.share({ 
            message: 'This is a word' }).then(this._showResult);
    }
    _showResult() {
        this.setState({result})
    }
    _fancyshareMessage() {
        Share.share({
            message: 'a fancy one',
            url: 'http://codecookbook.co'
        }).then(this._showResult);
    }

    render() {
        return (
            <View style = {styles.container}>
                <TouchableHighlight onPress = {this._shareMessage}>
                <Text style = {styles.welcome}>
                    Hello World
                </Text>
                </TouchableHighlight>

                <TouchableHighlight onPress = {this._fancyshareMessage}>
                <Text style = {styles.welcome}>
                    Fancy Hello
                </Text>
                </TouchableHighlight>

                <Text>
                    {JSON.stringify(this.state.result)}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
});