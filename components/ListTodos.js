import { Text, View } from "react-native";
import Todo from "./Todo";

function LoopedTodos({ todos, markComplete }) {
  return todos.map((todo) => {
    return <Todo key={todo.id} markComplete={markComplete} todo={todo} />;
  });
}

export default function ListTodos({ todos, markComplete }) {
  return (
    <View>
      <LoopedTodos todos={todos} markComplete={markComplete} />
    </View>
  );
}
