import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";
import React from "react";
import tw from "twrnc";
import { styles } from "../theme";
import { useNavigation } from "@react-navigation/native";
const { width, height } = Dimensions.get("window");

export default function MovieList({ title, data }) {
  let movieName = "Ant-Man and the wasp: Quantumania";
  const navigation = useNavigation();
  return (
    <View style={tw`mb-8 space-y-4`}>
      <View style={tw`mx-4 flex-row justify-between items-center`}>
        <Text style={tw`text-white text-xl`}>{title}</Text>
        <TouchableOpacity>
          <Text style={[styles.text, tw`text-lg`]}>See All</Text>
        </TouchableOpacity>
      </View>
      {/* movie row */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {data.map((item, index) => {
          return (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => navigation.navigate("Movie", item)}
            >
              <View style={tw`space-y-1 mr-4`}>
                <Image
                  source={require("../assets/images/WhatsApp Image 2024-05-09 at 15.05.39.png")}
                  style={{
                    width: width * 0.33,
                    height: height * 0.22,
                    ...tw`rounded-3xl`,
                  }}
                />
              </View>
              <Text style={tw`text-neutral-300 ml-l`}>{movieName}</Text>
            </TouchableWithoutFeedback>
          );
        })}
      </ScrollView>
    </View>
  );
}
