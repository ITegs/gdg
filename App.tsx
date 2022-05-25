import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import AlertBox from "./components/AlertBox";
import ContactBox from "./components/ContactBox";
import ContactList from "./components/ContactList";
import Header from "./components/Header";

export default function App() {
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
    backgroundColor: "#EFF6E0",
  },
});
