import { StyleSheet, Text, TextInput, View } from "react-native";

export default function InputTodo() {
  return (
    <View style>
      <Text>Todo Input</Text>
      <TextInput defaultValue="Hello World" />
    </View>
  );
}

const styles = StyleSheet.create({});
