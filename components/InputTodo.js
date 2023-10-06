import { useRef } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function InputTodo({ clear, add }) {
  const todoNameRef = useRef();

  async function clearBtn() {
    clear();
  }

  async function addTodo() {
    await add(todoNameRef.current.value);
    todoNameRef.current.value = "";
  }

  return (
    <View style={styles.parent}>
      <Pressable style={styles.clearBtn} onPress={clearBtn}>
        <Text>Clear</Text>
      </Pressable>

      <TextInput style={styles.inputField} ref={todoNameRef} />

      <Pressable style={styles.addBtn} onPress={addTodo}>
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
