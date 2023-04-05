import React from "react";
import { View } from "react-native";
import Carousel from "react-native-snap-carousel";
import Card, { SLIDER_WIDTH } from "./Card";
const CardCarousel = ({imgdata}) => {
  const isCarousel = React.useRef(null);

  return (
    <View>
      <Carousel
        layout="default"
        ref={isCarousel}
        data={imgdata}
        renderItem={Card}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={400}
        autoplay={true}
        loop={true}
        autoplayDelay={0}
        pagingEnabled
      />
    </View>
  );
};
export default CardCarousel;