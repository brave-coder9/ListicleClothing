import { StyleSheet, Platform, Dimensions } from 'react-native'

import {Fonts, Metrics, Colors} from '../../Themes/'

function isIphoneX() {
  const dim = Dimensions.get("window");

  return (
      // This has to be iOS
      Platform.OS === "ios" &&
      // Check either, iPhone X or XR
      (isIPhoneXSize(dim) || isIPhoneXrSize(dim))
  );
}

function isIPhoneXSize(dim) {
  return dim.height == 812 || dim.width == 812;
}

function isIPhoneXrSize(dim) {
  return dim.height == 896 || dim.width == 896;
}

export default StyleSheet.create({
  applicationView: {
    flex: 1,
    paddingTop: isIphoneX() ? 25 : 0
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.background
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: Fonts.type.base,
    margin: Metrics.baseMargin
  },
  myImage: {
    width: 200,
    height: 200,
    alignSelf: 'center'
  }
})
