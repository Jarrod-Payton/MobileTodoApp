import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function InputTodo() {
  return (
    <View style={styles.parent}>
      <Pressable style={styles.clearBtn}>
        <Text>Clear</Text>
      </Pressable>

      <TextInput style={styles.inputField} defaultValue="Hello World" />

      <Pressable style={styles.addBtn}>
        <Text>Add</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    width: "100%",
    backgroundColor: "gray",
    display: "flex",
    flexDirection: "row",
    alignitems: "center",
    justifyContent: "space-between",
  },
  inputField: {},
  clearBtn: {
    backgroundColor: "red",
    padding: 10,
  },
  addBtn: {
    backgroundColor: "blue",
    padding: 10,
  },
});
