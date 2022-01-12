import React from "react";
import Todo from "./Todo";

function TodoList({ todos, deleteTodo, checkingCompleted, editToggle }) {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <ul key={todo.id}>
            <Todo
              todo={todo}
              deleteTodo={deleteTodo}
              checkingCompleted={checkingCompleted}
              editToggle={editToggle}
            ></Todo>
          </ul>
        );
      })}
    </div>
  );
}

export default TodoList;
