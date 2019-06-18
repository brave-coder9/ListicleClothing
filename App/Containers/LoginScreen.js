import React, { Component } from 'react'
import { ImageBackground, Text, TextInput, View } from 'react-native'
import { Colors } from '../Themes'
import Button from '../Components/Button'
// Styles
import styles from './Styles/LoginScreenStyles'

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
          _email : '',
          _password : '',
        };
    }
    onPress = () => {
        this.props.navigation.navigate('CartScreen')
    }

    render () {
        return (
            <View style={styles.container}>
                <View style={styles.loginForm}>
                    <Text style={styles.title}>I am returning customer</Text>
                    <TextInput
                        ref = {'email'}
                        name = {'Email' }
                        type = {'TextInput'}
                        underlineColorAndroid = {Colors.transparent}
                        autoCapitalize = {'none'}
                        autoCorrect = {false}
                        placeholder = {'Email'}
                        validators = {'isEmail'}
                        placeholderTextColor = {Colors.textHintColor}
                        style = {styles.input_area}
                        returnKeyType = 'go'
                        selectionColor = {Colors.textHintColor}
                        onChangeText = {(_email) => { this.setState({_email: _email})}}
                        maxLength = {100}/>
                    
                    <TextInput
                        ref = {'password'}
                        name = {'Password' }
                        secureTextEntry={true}
                        underlineColorAndroid = {Colors.transparent}
                        autoCapitalize = {'none'}
                        autoCorrect = {false}
                        placeholder = {'Password'}
                        placeholderTextColor = {Colors.textHintColor}
                        style = {styles.input_area}
                        returnKeyType = 'go'
                        selectionColor = {Colors.textHintColor}
                        onChangeText = {(_password) => { this.setState({_password: _password})}}
                        maxLength = {100}/>
                    <View style={styles.btnLogin}>
                        <Button title={'Login'} style={styles.login} onPress={this.onPress} />
                    </View>
                </View>
            </View>
        )
    }
}
