import "./App.sass";
import TodoList from "./Components/TodoList";
import TodoForm from "./Components/TodoForm";
import { useState, useEffect } from "react";
import Timer from "./Components/Timer";
import { nanoid } from "nanoid";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faClipboardList);

const API_URL =
  "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  // const [edit, setEdit] = useState(false);
  const [todos, setTodos] = useState({
    completed: false,
    description: "",
    deadline: "",
    edit: false,
  });

  async function fectchingTodos() {
    const response = await fetch(API_URL);
    const result = await response.json();
    result.forEach((i) => (i.completed = false));
    setTodos(result);
    setIsLoading(false);
  }

  useEffect(() => {
    fectchingTodos();
  }, []);

  function addTodo(description, deadline) {
    setTodos([...todos, { id: nanoid(), description, deadline }]);
  }

  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  function checkingCompleted(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  }

  return (
    <div className="App">
      <h1 className="title-header">
        My Todo List <FontAwesomeIcon icon={faClipboardList} />
      </h1>
      <TodoForm addTodo={addTodo} />
      <Timer />

      <br />
      {isLoading ? (
        "Loading....."
      ) : (
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          checkingCompleted={checkingCompleted}
        />
      )}
    </div>
  );
}

export default App;
