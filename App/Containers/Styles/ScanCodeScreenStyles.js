import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
  },
  camera: {
    alignSelf: 'center',
    width: '98%',
    margin: 'auto'
  },
  btnWrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  btnCancel: {
    width: '30%',
    margin: 0,
    backgroundColor: Colors.greyDark
  },
  btnTypeName: {
    width: '60%',
    margin: 0,
    backgroundColor: Colors.green
  },
  modalContainer: {
    backgroundColor: Colors.white,
    borderRadius: Metrics.borderRadius,
    paddingHorizontal: Metrics.basePadding,
    paddingVertical: Metrics.section,
  },
  btnModalCancel: {
    width: '40%',
    margin: 0,
    backgroundColor: Colors.greyDark
  },
  btnModalAdd: {
    width: '40%',
    margin: 0,
    backgroundColor: Colors.blue
  },
  searchView: {
    flexDirection: 'row',
    alignItems: 'center',    
    paddingHorizontal: Metrics.section

  },
  txtLabel: {
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
    paddingVertical : Metrics.smallMargin,
    color: Colors.black,
    fontSize   : Fonts.size.medium,
    fontFamily : Fonts.type.base,
  },
  modalBody: {    
    marginBottom: Metrics.baseMargin,
  },
  productStyle: {
    paddingHorizontal : Metrics.baseMargin,
    paddingVertical : Metrics.basePadding,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageWrapper: {
    borderWidth: 1,
    borderColor: Colors.border,
    marginRight: Metrics.basePadding
  },
  image: {
    width: Metrics.screenWidth* 0.2,
    height: Metrics.screenWidth* 0.2,
  },
  detailWrapper: {
    // flex: 1,
  },
  content_item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2
  },
  content_item_lable: {
    width: '45%',
    color: Colors.greyDark,
    fontSize   : Fonts.size.small,
    fontFamily : Fonts.type.base,
    marginRight: Metrics.baseMargin
  },
  content_item_txt: {
    flex: 1,
    color: Colors.black,
    fontSize   : Fonts.size.small,
    fontFamily : Fonts.type.base,
  },
})
