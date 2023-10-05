import { View, Text, Switch } from "react-native";

export default function Todo({ todo, toggleComplete }) {
  async function complete() {
    toggleComplete(todo.id);
  }

  return (
    <View>
      <Switch value={todo.completed} onValueChange={complete} />
      <Text>{todo.name}</Text>
    </View>
  );
}
