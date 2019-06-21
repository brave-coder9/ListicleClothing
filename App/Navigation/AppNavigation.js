import { createStackNavigator, createAppContainer } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'
import LoginScreen from '../Containers/LoginScreen'
import CartScreen from '../Containers/CartScreen'
import ScanCodeScreen from '../Containers/ScanCodeScreen'
import CheckOutScreen from '../Containers/CheckOutScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  LoginScreen: { screen: LoginScreen },
  CartScreen: { screen: CartScreen },
  ScanCodeScreen: { screen: ScanCodeScreen },
  CheckOutScreen: { screen: CheckOutScreen },
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  },
  defaultNavigationOptions: {
    gesturesEnabled: false
  }
})

export default createAppContainer(PrimaryNav)
