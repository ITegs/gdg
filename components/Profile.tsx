import { StyleSheet, View, Text, TextInput, Share } from "react-native";
import { useEffect, useState } from "react";
import { Octicons } from "@expo/vector-icons";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { colors } from "../Variables/Theme";

export default function Profile() {
  const [userId, setUserId] = useState("");
  const [addId, setAddId] = useState("");

  function getId() {
    AsyncStorage.getItem("@userId").then((value) => {
      if (value != null) {
        setUserId(value);
      }
    });
  }

  useEffect(() => {
    getId();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dein Profil</Text>
      <View style={styles.idContainer}>
        <Text style={styles.idTitle}>Deine ID:</Text>
        <View style={styles.idTag}>
          <Octicons
            name="share"
            style={styles.copyIcon}
            onTouchStart={() =>
              Share.share({
                // message: "Hier ist meine 'gdg?'-ID: \n" + userId,
                message: userId,
              })
            }
          />
          <Text style={styles.id}>{userId}</Text>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="User ID"
          onChange={(e) => setAddId(e.nativeEvent.text)}
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="while-editing"
          selectTextOnFocus={true}
          maxLength={36}
          returnKeyType="done"
        />
        <Octicons name="person-add" style={styles.addIcon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.accent1,
    padding: 15,
    margin: 15,
    marginTop: 30,
    borderRadius: 15,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: colors.text,
    marginTop: 15,
  },
  idContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    padding: 10,
    borderRadius: 15,
    backgroundColor: colors.accent2,
  },
  idTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.text,
    alignSelf: "flex-start",
    paddingBottom: 7,
  },
  idTag: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  id: {
    fontSize: 15,
    color: colors.text,
    padding: 5,
  },
  copyIcon: {
    fontSize: 25,
    color: colors.accent3,
    padding: 10,
    marginLeft: 5,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    padding: 20,
    borderRadius: 15,
    backgroundColor: colors.accent3,
  },
  input: {
    fontSize: 25,
    fontWeight: "bold",
    color: colors.text,
    width: "80%",
  },
  addIcon: {
    fontSize: 40,
    color: colors.text2,
  },
});
