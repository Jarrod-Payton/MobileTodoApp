import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button, Pressable } from "react-native";
import { Switch } from "react-native-web";

export default function App() {
  const [flipable, flipFlipable] = useState(false);
  async function styleFip(clicked) {
    if (clicked) {
      return styles.container;
    } else {
      return styles.button;
    }
  }

  async function pressIn(event) {
    // console.log("Pressing IN", event);
  }

  async function pressOut(event) {
    // console.log("Pressing Out", event);
  }

  async function press(event) {
    // console.log("Regular Press", event);
  }

  async function longPress(event) {
    // console.log("Long Press", event);
  }

  async function hoverIn(event) {
    // console.log("Hover In", event);
    return styles.button_hover_in;
  }

  async function hoverOut(event) {
    // console.log("Hover Out", event);
  }

  async function switchFlip() {
    flipFlipable(!flipable);
    // console.log("Switch Flip", flipable);
  }

  return (
    <View style={styles.container}>
      <Text>
        Open up App.js to start working on your app! Frienderino Friend
      </Text>
      <Pressable
        onLongPress={longPress}
        onPress={press}
        onPressIn={pressIn}
        onPressOut={pressOut}
        onHoverIn={hoverIn}
        onHoverOut={hoverOut}
        hitSlop={1000}
        style={styles.button}
      >
        <Text>Howdy</Text>
      </Pressable>
      {/* <Switch onValueChange={switchFlip} value={flipable} /> */}
      {/* <StatusBar style="auto" /> */}
    </View>
    // <View style={styles.container}>
    //   <Text>Hello</Text>
    // </View>
  );
}

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
  button_hover_in: {
    padding: 10,
    marginTop: 10,
    borderRadius: "20%",
    backgroundColor: "blue",
  },
});
