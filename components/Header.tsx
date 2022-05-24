import { StyleSheet, View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  JustAnotherHand_400Regular,
} from "@expo-google-fonts/just-another-hand";

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
    backgroundColor: "#AEC3B0",
    maxHeight: 110,
  },
  title: {
    fontSize: 45,
    fontWeight: "bold",
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 10,
    color: "#124559",
    fontFamily: "JustAnotherHand_400Regular",
    textShadowColor: "#EFF6E0",
    textShadowOffset: { width: 3, height: 2 },
    textShadowRadius: 2,
  },
  icon: {
    fontSize: 40,
    paddingTop: 30,
    paddingRight: 20,
    color: "#124559",
  },
});
