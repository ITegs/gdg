import { StyleSheet, View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  JustAnotherHand_400Regular,
} from "@expo-google-fonts/just-another-hand";
import { colors } from "../Variables/Theme";

export default function Header() {
  let [fontsLoaded] = useFonts({
    JustAnotherHand_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>geht's dir gut?</Text>
      <MaterialIcons name="supervised-user-circle" style={styles.icon} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors.accent2,
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
