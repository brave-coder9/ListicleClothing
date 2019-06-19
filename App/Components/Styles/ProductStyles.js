import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal : Metrics.baseMargin,
    paddingVertical : Metrics.basePadding,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: Colors.border
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
    flex: 1,
  },
  content_item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2
  },
  content_item_lable: {
    width: '35%',
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
  deleteWrapper: {
    padding: Metrics.smallMargin
  },
  remove_icon: {
    width: 20,
    height: 20,
  }
})
