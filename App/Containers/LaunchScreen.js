import React, { Component } from 'react'
import { ImageBackground, Text, Image, View } from 'react-native'
import { Images } from '../Themes'
import Button from '../Components/Button'
// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  onPress = () => {
    this.props.navigation.navigate('LoginScreen')
  }

  render () {
    return (
      <View style={styles.container}>
          <ImageBackground source={Images.bg} style={styles.bg_container}>
            <Image source={Images.logo} style={styles.logo}/>
            <View style={styles.btnLogin}>
              <Button title={'Login'} onPress={this.onPress} />
            </View>
          </ImageBackground>
      </View>
    )
  }
}
