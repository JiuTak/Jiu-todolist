import React, { useState } from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faPenSquare,
  faTrash,
  faSave,
} from "@fortawesome/free-solid-svg-icons";

library.add(fab, faPenSquare, faTrash, faSave);
function Todo({ todo, deleteTodo, checkingCompleted }) {
  const [editing, setEditing] = useState(false);
  const [editDescription, setEditDescription] = useState(todo.description);
  const [editDeadline, setEditDeadline] = useState(todo.deadline);

  const handleCheckbox = (e) => {
    checkingCompleted(todo.id);
  };
  return (
    <div className="todolist-container">
      <li
        className="todolist-single-line"
        style={{
          color: todo.completed ? "white" : "black",
          backgroundColor: todo.completed ? "green" : null,
        }}
      >
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleCheckbox}
        />
        {!editing ? (
          <div
            className="todo-contents"
            style={{
              marginInline: "10px",
              textDecoration: todo.completed ? "line-through" : null,
              color: todo.completed ? "white" : "black",
              backgroundColor: todo.completed ? "green" : null,
            }}
          >
            <div
              className="todo-text"
              style={{
                color: todo.completed ? "white" : "black",
                backgroundColor: todo.completed ? "green" : null,
              }}
            >
              {editDescription}
            </div>
            <div
              className="todo-deadline"
              style={{
                color: todo.completed ? "white" : "black",
                backgroundColor: todo.completed ? "green" : null,
              }}
            >
              {editDeadline}
            </div>
          </div>
        ) : (
          <div>
            <input
              className="todo-text"
              type="text"
              onChange={(e) => {
                setEditDescription(e.target.value);
              }}
              value={editDescription}
              style={{ fontFamily: "'Mitr', sans-serif" }}
            ></input>
            <input
              className="todo-deadline"
              type="date"
              onChange={(e) => {
                setEditDeadline(e.target.value);
              }}
              value={editDeadline}
              style={{ fontFamily: "'Mitr', sans-serif" }}
            ></input>
          </div>
        )}
        <button
          className="edit-btn"
          onClick={() => {
            setEditing(!editing);
          }}
        >
          {editing ? (
            <FontAwesomeIcon icon={faSave} />
          ) : (
            <FontAwesomeIcon icon={faPenSquare} />
          )}
        </button>
        <button
          className="delete-btn"
          style={{
            color: todo.completed ? "black" : "black",
            backgroundColor: todo.completed ? "green" : null,
          }}
        >
          <FontAwesomeIcon
            icon={faTrash}
            onClick={() => deleteTodo(todo.id)}
            style={{ float: "right", fontSize: "20px" }}
          />
        </button>
      </li>
    </div>
  );
}

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  completed: PropTypes.bool,
};
export default Todo;
