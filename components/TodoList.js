import { View } from "react-native";
import InputTodo from "./InputTodo";
import { useRef, useState } from "react";
import ListTodos from "./ListTodos";

export default function TodoList({ listId }) {
  const [todos, setTodos] = useState([]);

  async function clear() {
    console.log("clear");
  }

  async function addTodo(todoName) {
    console.log("add Todo", todoName);
  }

  async function completeTodo(id) {
    console.log("Completed Todo", id);
  }

  return (
    <View>
      <InputTodo clear={clear} add={addTodo} />
      <ListTodos todos={todos} markComplete={completeTodo} />
    </View>
  );
}
