import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import ContactBox from "./ContactBox";

export default function ContactList({ refresh, setRefreshing }: any) {
  const [value, setValue] = useState({});

  const reload = () => {
    // re-renders the component
    setValue({});
  };

  let curTime = new Date();

  const [contacts, setContacts] = useState<any>([
    {
      name: "Max Mustermann",
      id: "462edac0db5d11ecab4d33d651ddc544",
      lastOk: curTime.getHours() + ":" + curTime.getMinutes() + "Uhr",
    },
    {
      name: "Bob Bobberson",
      id: "c6e870d0db6311ec82a719991b8924e5",
      lastOk: curTime.getHours() + ":" + curTime.getMinutes() + "Uhr",
    },
  ]);

  const fetchContacts = async () => {
    AsyncStorage.getItem("@PublicUserID").then((publicID) => {
      AsyncStorage.getItem("@PrivateUserID").then((privateID) => {
        fetch(
          "https://api.jo-dev.de/gdg/getContactData.php?publicID=" +
            publicID +
            "&privateID=" +
            privateID
        )
          .then((response) => response.text())
          .then(
            (result) => (
              setContacts(JSON.parse(result)), console.log("refreshed")
            )
          )
          .catch((error) => console.log("error", error));
      });
    });
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  if (refresh) {
    fetchContacts().then(() => setRefreshing(false));
  }

  return (
    <View style={styles.container}>
      {contacts.map((contact: any) => (
        <ContactBox
          key={contact.id}
          name={contact.name}
          lastOK={contact.timestamp}
          ok={contact.ok}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
  },
});
