import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";

import AlertBox from "./components/StateBox";
import ContactList from "./components/ContactList";
import Header from "./components/Header";
import Profile from "./components/Profile";

import { colors } from "./Variables/Theme";

export default function App() {
  const [PublicUserID, setPublicUserID] = useState("");
  const [PrivateUserID, setPrivateUserID] = useState("");

  const checkID = async () => {
    // check if user id are stored in the local storage
    console.log("Checking for user id");
    AsyncStorage.getItem("@PublicUserID").then((publicID) => {
      if (publicID != null) {
        AsyncStorage.getItem("@PrivateUserID").then((privateID) => {
          if (privateID != null) {
            console.log("found UserIDs");
            setPublicUserID(publicID);
            setPrivateUserID(privateID);
          } else {
            console.log("No PrivateUserID found");
            generatePrivateID().then(() => {
              checkID();
            });
          }
        });
      } else {
        console.log("No PublicUserID found");
        generatePublicID().then(() => {
          checkID();
        });
      }
    });
  };

  const generateUUID = () => {
    return uuid.v4().toString();
  };

  const generatePublicID = async () => {
    console.log("generating PublicID");
    AsyncStorage.setItem("@PublicUserID", generateUUID());
  };
  const generatePrivateID = async () => {
    console.log("generating PrivateID");
    const privateID = generateUUID();
    AsyncStorage.setItem("@PrivateUserID", privateID).then(() => {
      AsyncStorage.getItem("@PublicUserID").then((publicID) => {
        const url =
          "https://api.jo-dev.de/gdg/addUser.php?publicID=" +
          publicID +
          "&privateID=" +
          privateID;
        fetch(url)
          .then((response) => response.text())
          .then((result) => console.log("SERVER: " + result))
          .catch((error) => console.log("error", error));
      });
    });
  };

  useEffect(() => {
    checkID();
  }, []);

  const [showProfile, setShowProfile] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  return (
    <View style={styles.container}>
      <Header setShowProfile={setShowProfile} />
      {showProfile && <Profile />}
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => {
              setRefreshing(true);
            }}
          />
        }
      >
        <AlertBox />
        <ContactList refresh={refreshing} setRefreshing={setRefreshing} />
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
