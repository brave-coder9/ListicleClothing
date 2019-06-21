import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingVertical: 5,
    borderColor: Colors.border,
    borderWidth: 1,
  },
  headerText: {
    color: Colors.black,
    fontSize   : Fonts.size.regular,
    fontFamily : Fonts.type.base,
    textAlign: 'center'
  },
  content: {
    paddingHorizontal: Metrics.baseMargin,
    paddingVertical: Metrics.basePadding,
    backgroundColor: Colors.grey
  },
  content_item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: Metrics.baseMargin
  },
  content_item_lable: {
    width: '35%',
    color: Colors.greyDark,
    fontSize   : Fonts.size.medium,
    fontFamily : Fonts.type.bold,
    marginRight: Metrics.baseMargin
  },
  content_item_txt: {
    flex: 1,
    color: Colors.black,
    fontSize   : Fonts.size.medium,
    fontFamily : Fonts.type.base,
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
})
