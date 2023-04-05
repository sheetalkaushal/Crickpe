import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./src/Components/Header";
import ImagePath from "./src/Constants/ImagePath";
import { Home } from "./src/Screens/Home/Home";

export default function App() {
  return (
    <View>
      <Header cricimg={ImagePath.iccripe} />
      <StatusBar style="inverted" backgroundColor="#0064b2" />
      <Home />
    </View>
  );
}
