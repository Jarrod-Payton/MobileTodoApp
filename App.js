import { useState } from "react";
import {
  Switch,
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
  Platform,
} from "react-native";
import ListPage from "./pages/ListPage";
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.pageContainer}>
        <ListPage />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d9d9d9",
    padding: 20,
    paddingTop: Platform.OS == "ios" ? 50 : 20,
  },
  pageContainer: {
    backgroundColor: "white",
    height: "100%",
    borderRadius: 20,
    padding: 20,
  },
});
