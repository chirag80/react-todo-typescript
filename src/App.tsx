import * as React from "react";
import "./styles.css";
import { TodoList } from "./TodoList";
import { Todo, ToggleTodo } from "./types";

const initialTodos: Array<Todo> = [
  { text: "first todo", complete: true },
  { text: "two", complete: false },
  { text: "three", complete: false }
];

const App: React.FC = () => {
  const [todos, setTodos] = React.useState(initialTodos);

  const toggleTodo: ToggleTodo = selectedTodo => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(newTodos);
  };
  return (
    <div className="App">
      <h1>Todo list using typescript</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
};

export default App;
