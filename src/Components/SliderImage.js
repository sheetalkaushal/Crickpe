import { ScrollView, Image } from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import ImagePath from "../Constants/ImagePath";
import { Styles } from "./SliderImagesStyle";
export const SliderImage = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} pagingEnabled>
      <Image
        resizeMode="contain"
        source={ImagePath.icSocial}
        style={{ width: 400, height: 200 }}
      />
      <Image
        resizeMode="contain"
        source={ImagePath.icRating}
        style={{ width: 400, height: 200 }}
      />
      <Image
        resizeMode="contain"
        source={ImagePath.icEarn}
        style={{ width: 400, height: 200 }}
      />
      <Image
        resizeMode="contain"
        source={ImagePath.icPlay}
        style={{ width: 400, height: 200 }}
      />
    </ScrollView>
  );
};
