import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    paddingHorizontal: Metrics.doubleSection,
    justifyContent: 'center'
  },
  loginForm: {
  },
  title: {
    color: Colors.black,
    fontSize   : Fonts.size.h5,
    fontFamily : Fonts.type.emphasis,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: Metrics.bigSection
  },
  input_area: {
    backgroundColor : Colors.inputBox,
    borderRadius : Metrics.buttonRadius,
    paddingHorizontal : Metrics.basePadding,
    paddingVertical : Metrics.baseMargin,
    color: Colors.black,
    fontSize   : Fonts.size.regular,
    fontFamily : Fonts.type.base,
    marginTop : Metrics.doubleBaseMargin,
    shadowColor: Colors.textHintColor,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 2,
  },
  btnLogin: {
    marginTop : Metrics.doubleSection,
  },
  login: {
      margin: 0,
  }
})
