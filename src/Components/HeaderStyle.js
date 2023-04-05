import { StyleSheet } from "react-native";
import {
  moderateVerticalScale,
  moderateScale,
} from "react-native-size-matters";
import Color from "../Screens/ColorStyles/Color";
export const Styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.WHITE,
    marginTop: moderateVerticalScale(45),
    paddingHorizontal: moderateScale(9),
    borderBottomColor: Color.GREY,
    borderBottomWidth: moderateScale(2),
    paddingBottom: moderateVerticalScale(16),
    paddingTop: moderateVerticalScale(8),
  },
  Leftcontainer: {
    flex: 0.2,
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },
  Centercontainer: {
    flex: 0.6,
    alignItems: "center",
  },
  Rightcontainer: {
    flex: 0.2,
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },
  menu: {
    height: moderateVerticalScale(27),
    width: moderateScale(27),
  },
  profile: {
    height: moderateVerticalScale(40),
    width: moderateScale(40),
    borderRadius: 50,
  },
  Crikimg: {
    width: moderateScale(90),
    height: moderateScale(30),
  },
  // crickpe: {
  //   color:Color.BLUE,
  //   fontSize:28,
  // },
  rupee: {
    color: Color.BLUE,
    fontSize: 17,
    gap: 7,
  },
  Wallet: {
    height: moderateVerticalScale(30),
    width: moderateScale(30),
  },
});
