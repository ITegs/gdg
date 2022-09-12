import { Button, StyleSheet, Text, View } from "react-native";
import { colors } from "../Variables/Theme";

export default function AlertBox() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Geht es dir gut?</Text>
      <View style={styles.buttons}>
        <View style={styles.ok} onTouchStart={() => console.log("ok!")}>
          <Text style={styles.emoji}>&#128077;</Text>
        </View>
        <View style={styles.notOk} onTouchStart={() => console.log("notok!")}>
          <Text style={styles.emoji}>&#128078;</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.accent3,
    margin: 15,
    padding: 10,
    borderRadius: 15,
    height: 200,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    paddingTop: 20,
    color: colors.text2,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  ok: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    margin: 10,
    padding: 5,
    borderRadius: 15,
    height: 100,
  },
  notOk: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    margin: 10,
    padding: 5,
    borderRadius: 15,
    height: 100,
  },
  emoji: {
    fontSize: 40,
  },
});
