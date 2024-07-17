import {
  View,
  Text,
  TouchableWithoutFeedback,
  Dimensions,
  Image,
} from "react-native";
import React from "react";
import tw from "twrnc";
import Carousel from "react-native-snap-carousel-new";
import { useNavigation } from "@react-navigation/native";

var { width, height } = Dimensions.get("window");
export default function TrendingMovies({ data }) {
  const navigation = useNavigation();
  const handleClick = () => {
    navigation.navigate("Movie", item);
  };
  return (
    <View style={tw`mb-8`}>
      <Text style={tw`text-white text-xl mx-4 mb-5`}> Trending </Text>
      <Carousel
        data={data}
        renderItem={({ item }) => (
          <MovieCard item={item} handleClick={handleClick} />
        )}
        firstItem={1}
        inactiveSlideOpacity={0.6}
        sliderWidth={width}
        itemWidth={width * 0.62}
        slideStyle={{ display: "flex", alignItems: "center" }}
      />
    </View>
  );
}

const MovieCard = ({ item, handleClick }) => {
  return (
    <TouchableWithoutFeedback onPress={handleClick}>
      <Image
        source={require("../assets/images/WhatsApp Image 2024-05-01 at 16.35.20.png")}
        style={{ width: width * 0.6, height: height * 0.4, ...tw`rounded-3xl` }}
      />
    </TouchableWithoutFeedback>
  );
};
