import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";

import AlertBox from "./components/AlertBox";
import ContactList from "./components/ContactList";
import Header from "./components/Header";

import { colors } from "./Variables/Theme";

export default function App() {
  const [userId, setUserId] = useState("");
  const checkUserId = async () => {
    // check if a user id is stored in the local storage
    // if not, create a new one using uuid v4
    // and store it in the local storage
    console.log("Checking for user id");
    AsyncStorage.getItem("@userId").then((value) => {
      if (value != null) {
        console.log("Found userId: " + value);
        setUserId(value);
      } else {
        console.log("No userId found");
        const newUserId = uuid.v4().toString();
        AsyncStorage.setItem("@userId", newUserId);
        console.log("Created new userId: " + newUserId);
        setUserId(newUserId);
      }
    });
  };

  useEffect(() => {
    checkUserId();
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <AlertBox />
        <ContactList />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    minHeight: 1000,
  },
});
