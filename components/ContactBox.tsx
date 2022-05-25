import { StyleSheet, View, Text, Button } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../Variables/Theme";

export default function ContactBox(props: any) {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.lastOk}>Letztes "OK!": {props.lastOK}</Text>
      </View>
      <View style={styles.button}>
        <MaterialCommunityIcons
          name="account-question-outline"
          style={styles.icon}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.accent2,
    maxHeight: 110,
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    padding: 10,
    borderRadius: 15,
  },
  info: {
    padding: 10,
  },
  name: {
    fontSize: 25,
    fontWeight: "bold",
    color: colors.text,
  },
  lastOk: {
    fontSize: 15,
    color: "#547B84",
  },
  button: {
    marginRight: 15,
    padding: 10,
    backgroundColor: colors.accent1,
    borderRadius: 15,
  },
  icon: {
    fontSize: 40,
    color: colors.text2,
  },
});
