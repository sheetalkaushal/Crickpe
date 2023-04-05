import { View, Text } from "react-native";
import React from "react";
import ImagePath from "../Constants/ImagePath";
import { Styles } from "./HeaderStyle";
import { Image } from "react-native";

export default Header = ({ cricimg, crictext }) => {
  return (
    <View style={Styles.header}>
      <View></View>
      <View style={Styles.Leftcontainer}>
        <Image style={Styles.menu} source={ImagePath.icMenu} />
        <Image style={Styles.profile} source={ImagePath.icProfile} />
      </View>
      <View style={Styles.Centercontainer}>
        {cricimg ? (
          <Image resizeMode="contain" style={Styles.Crikimg} source={cricimg} />
        ) : null}
        {crictext ? <Text style={Styles.crickpe}>{crictext}</Text> : null}
      </View>
      <View style={Styles.Rightcontainer}>
        <Image style={Styles.Wallet} source={ImagePath.icWallet} />
        <Text style={Styles.rupee}>₹75</Text>
      </View>
    </View>
  );
};
