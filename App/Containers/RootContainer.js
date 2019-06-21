import React, { Component } from 'react'
import { View, StatusBar, Platform, Alert } from 'react-native'
import ReduxNavigation from '../Navigation/ReduxNavigation'
import { connect } from 'react-redux'
import Permissions from 'react-native-permissions'
import StartupActions from '../Redux/StartupRedux'
import ReduxPersist from '../Config/ReduxPersist'

// Styles
import styles from './Styles/RootContainerStyles'

class RootContainer extends Component {
  constructor(props) {
      super(props);
  }

  componentDidMount () {
    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      this.props.startup()
    }
    var self = this
    Permissions.check('camera').then(response => {
      // Response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
      if(response !='authorized'){
        if(response == 'undetermined') {
          self.requestPermission()
        }
        else{
          if(Platform.OS == 'android'){
            Alert.alert(
              'Can we access your camera?',
              'We need to set camera permission so you can scan a QRcode. Please Open setting.',
              [
                {
                  text: 'OK',
                  onPress: () => console.log('Open setting')
                },
              ],
            )
          }
          else {
            Permissions.openSettings()
          }
        }
      }
    })
  }
  
  requestPermission = () => {
    Permissions.request('camera').then(response => {
      // Returns once the user has chosen to 'allow' or to 'not allow' access
      // Response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'      
    })
  }

  render () {
    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle='light-content' />
        <ReduxNavigation />
      </View>
    )
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup())
})

export default connect(null, mapDispatchToProps)(RootContainer)
