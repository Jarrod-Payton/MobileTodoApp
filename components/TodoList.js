import { View } from "react-native";
import InputTodo from "./InputTodo";
import { useRef, useState } from "react";
import ListTodos from "./ListTodos";

export default function TodoList({ listId }) {
  const [todos, setTodos] = useState([]);

  async function makeId() {
    let id = 0;
    await todos.forEach((todo) => {
      if (todo.id >= id) {
        id = todo.id + 1;
      }
    });
    return id;
  }

  async function clear() {
    console.log("clear");
  }

  async function addTodo(todoName) {
    console.log("add Todo", todoName);
    const todoId = await makeId();
    console.log(todoId);
    if (todoName !== "") {
      const todo = { id: todoId, name: todoName, completed: false };
      setTodos((previousTodos) => {
        const newTodos = [...previousTodos, todo];
        return newTodos;
      });
    }
  }

  async function toggleComplete(id) {
    console.log("Completed Todo", id);
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
    console.log(todos);
  }

  return (
    <View>
      <InputTodo clear={clear} add={addTodo} />
      <ListTodos todos={todos} toggleComplete={toggleComplete} />
    </View>
  );
}
