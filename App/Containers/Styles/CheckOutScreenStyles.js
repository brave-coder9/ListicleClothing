import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1, 
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: Metrics.borderRadius,
    padding: Metrics.basePadding,
    alignSelf: 'center',
    margin: Metrics.doubleBaseMargin
  },
  bottom: {
    flex: 0,
    flexDirection: 'row', 
    justifyContent: 'center'
  },
  bottomText: {
    color : Colors.black,
    fontSize : Fonts.size.regular,
    fontFamily : Fonts.type.base,
  },
  top: {
    flex: 0,
    flexDirection: 'row', 
  },
  backBtn: {
    flex: 0,
    padding: Metrics.smallMargin,
    alignSelf: 'center',
    marginLeft: Metrics.baseMargin,
    marginVertical: Metrics.baseMargin
  },
  icon_back: {
    color : Colors.black,
    fontSize : Fonts.size.h4,
  }
})
