import { ViewPropTypes } from "deprecated-react-native-prop-types";
import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
export const SLIDER_WIDTH = Dimensions.get("window").width;
const Card = ({ item }) => {
  imgdata = [{ img: "url" }];
  return (
    <View style={styles.container}>
      <Image
        resizeMode="cover"
        source={{ uri: item.img }}
        style={styles.image}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 8,
    width: 400,
  },
  image: {
    width: 400,
    height: 250,
  },
});

export default Card;
