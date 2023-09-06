import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Pressable } from "react-native";

export default function App() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center",
    },
    button: {
      padding: 10,
      marginTop: 10,
      borderRadius: "20%",
      backgroundColor: "red",
    },
  });

  async function styleFip(clicked) {
    if (clicked) {
      return styles.container;
    } else {
      return styles.button;
    }
  }

  async function pressIn() {
    console.log("Pressing IN");
  }

  async function pressOut() {
    console.log("Pressing Out");
  }

  async function press() {
    console.log("Regular Press");
  }

  async function longPress() {
    console.log("Long Press");
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! Friend </Text>
      <Pressable
        onLongPress={longPress}
        onPress={press}
        onPressIn={pressIn}
        onPressOut={pressOut}
        hitSlop={1000}
        style={styles.button}
      >
        <Text>Howdy</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}
