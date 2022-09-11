import { StyleSheet, View, Text } from "react-native";
import { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import AppLoading from "expo-app-loading";

import {
  useFonts,
  JustAnotherHand_400Regular,
} from "@expo-google-fonts/just-another-hand";
import { colors } from "../Variables/Theme";

import { globalShowProfile } from "../App";

export default function Header() {
  const [showProfile, setShowProfile] = useState(false);

  let [fontsLoaded] = useFonts({
    JustAnotherHand_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>geht's dir gut?</Text>
      <MaterialIcons
        name="supervised-user-circle"
        style={styles.icon}
        onPress={() => setShowProfile(!showProfile)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.accent1,
    paddingTop: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    maxHeight: 110,
  },
  title: {
    fontSize: 45,
    fontWeight: "bold",
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 10,
    color: colors.text,
    fontFamily: "JustAnotherHand_400Regular",
    textShadowColor: colors.background,
    textShadowOffset: { width: 3, height: 2 },
    textShadowRadius: 2,
  },
  icon: {
    fontSize: 40,
    paddingTop: 30,
    paddingRight: 20,
    color: colors.text,
  },
});
