import { StyleSheet, Text, View } from "react-native";
import TodoList from "../components/TodoList";
import { useRef, useState } from "react";

export default function ListPage() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  return (
    <View>
      <TodoList />
    </View>
  );
}

const styles = StyleSheet.create({});
