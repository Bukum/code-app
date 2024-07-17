import {
  View,
  Text,
  StatusBar,
  Platform,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { useState } from "react";

import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";

import {
  MagnifyingGlassIcon,
  Bars3CenterLeftIcon,
} from "react-native-heroicons/outline";
import { styles } from "../theme";
import TrendingMovies from "../components/trendingMovies";
import MovieList from "../components/movieList";

const ios = Platform.OS == "ios";
export default function HomeScreen() {
  const [trending, setTrending] = useState([1, 2, 3]);
  const [upcoming, setUpcoming] = useState([1, 2, 3]);
  const [topRated, setTopRated] = useState([1, 2, 3]);
  return (
    <View style={tw`flex-1 bg-neutral-800 `}>
      {/* search bar and logo*/}
      <SafeAreaView style={ios ? tw`-mb-2` : tw`mb-3`}>
        <StatusBar style="light" />
        <View style={tw`flex-row justify-between items-center mx-4`}>
          <Bars3CenterLeftIcon size="30" strokeWidth={2} color="white" />
          <Text style={tw`text-white text-3xl font-bold`}>
            <Text style={styles.text}>M</Text>OVIES
          </Text>
          <TouchableOpacity>
            <MagnifyingGlassIcon size="30" strokeWidth={2} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
      >
        {/* Trending movies carousel */}
        <TrendingMovies data={trending} />

        {/* upcoming movies row */}
        <MovieList title="Upcoming" data={upcoming} />
      </ScrollView>
    </View>
  );
}
