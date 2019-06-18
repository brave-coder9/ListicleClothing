import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,    
  },
  bg_container: {
    flex: 1,
    resizeMode: 'cover',
    paddingHorizontal: Metrics.doubleSection,
  },
  logo: {
    marginTop: Metrics.screenHeight * 0.13,
    width: '100%',
    resizeMode: 'contain'
  },
  btnLogin: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: Metrics.screenHeight * 0.2,
  }
})
