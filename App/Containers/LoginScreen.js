import React, { Component } from 'react'
import { ImageBackground, Text, Image, View } from 'react-native'
import { Images } from '../Themes'
import Button from '../Components/Button'
// Styles
import styles from './Styles/LoginScreenStyles'

export default class LoginScreen extends Component {
  onPress = () => {
    console.log("onPress");
  }

  render () {
    return (
      <View style={styles.container}>
          
      </View>
    )
  }
}
