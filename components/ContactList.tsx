import { useState } from "react";
import { StyleSheet, View } from "react-native";

import ContactBox from "./ContactBox";

export default function ContactList() {
  let curTime = new Date();

  const [contacts, setContacts] = useState([
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

  return (
    <View style={styles.container}>
      {contacts.map((contact) => (
        <ContactBox
          key={contact.id}
          name={contact.name}
          lastOK={contact.lastOk}
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
