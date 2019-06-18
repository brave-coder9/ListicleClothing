import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: Metrics.buttonRadius,
    margin: Metrics.section,
    shadowColor: Colors.textHintColor,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 2,
  },
  contentContainer: {
    alignSelf: 'center',
    alignItems: 'center',
  },
  title: {
    margin: Metrics.baseMargin,
    textAlign: 'center',
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.regular,
    fontWeight: 'bold',
    color: Colors.black
  },
})
