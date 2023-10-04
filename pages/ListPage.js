import { StyleSheet, Text, View } from "react-native";
import TodoList from "../components/TodoList";

export default function ListPage() {
  const listId = 1;

  return (
    <View>
      <TodoList listId={listId} />
    </View>
  );
}

const styles = StyleSheet.create({});
