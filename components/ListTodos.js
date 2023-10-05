import { Text, View } from "react-native";
import Todo from "./Todo";

function LoopedTodos({ todos, toggleComplete }) {
  return todos.map((todo) => {
    return <Todo key={todo.id} toggleComplete={toggleComplete} todo={todo} />;
  });
}

export default function ListTodos({ todos, toggleComplete }) {
  return (
    <View>
      <LoopedTodos todos={todos} toggleComplete={toggleComplete} />
    </View>
  );
}
