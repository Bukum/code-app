// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open bukunmi App.js thho start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
import AppNavigation from "./navigation/appNavigation";
import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";

export default function App() {
  return <AppNavigation />;
}
