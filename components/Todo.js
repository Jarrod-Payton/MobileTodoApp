import { View, Text } from "react-native";

export default function Todo({ todo, markComplete }) {
  return (
    <View>
      <Text>{todo.name}</Text>
    </View>
  );
}
