import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    paddingHorizontal: Metrics.basePadding,
    paddingVertical: Metrics.doubleSection
  },
  txtLabel: {
    color: Colors.black,
    fontSize   : Fonts.size.medium,
    fontFamily : Fonts.type.base,
  },
  controlWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: Metrics.smallMargin,
  },
  controlInfo: {
    marginTop: Metrics.doubleBasePadding,
    borderWidth: 1,
    borderColor: Colors.border
  },
  dropdownContainer: {
    flex: 1,    
  },
  inputContainer: {
    marginTop: Metrics.baseMargin,
    borderWidth: 1,
    borderColor: Colors.border,
    paddingLeft: Metrics.baseMargin,
    borderRadius : Metrics.buttonRadius,
  },
  input_area: {
    flex: 1,
    borderColor : Colors.border,
    borderWidth: 1,
    borderRadius : Metrics.buttonRadius,
    paddingHorizontal : Metrics.baseMargin,
    paddingVertical : 9,
    color: Colors.black,
    fontSize   : Fonts.size.medium,
    fontFamily : Fonts.type.base,
  },
  total_item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal : Metrics.baseMargin,
    paddingVertical : Metrics.basePadding,
  },
  total_item_lable: {
    width: '70%',
    color: Colors.greyDark,
    fontSize   : Fonts.size.regular,
    fontFamily : Fonts.type.bold,
    textAlign: 'right'
  },
  total_item_txt: {
    flex: 1,
    color: Colors.black,
    fontSize   : Fonts.size.regular,
    fontFamily : Fonts.type.bold,
    textAlign: 'right'
  },
  btnWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: Metrics.doubleBasePadding
  },
  btnAdd: {
    width: '45%',
    margin: 0,
    backgroundColor: Colors.green
  },
  btnSubmit: {
    width: '45%',
    margin: 0,
    backgroundColor: Colors.blue
  },
})
