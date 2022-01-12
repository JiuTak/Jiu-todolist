import React, { useState } from "react";
import PropTypes from "prop-types";
import { RiCloseCircleLine } from "react-icons/ri";
import { RiEditLine } from "react-icons/ri";
import { RiSave3Line } from "react-icons/ri";
// import Wrapper from "./Components/Wrapper";

function Todo({ todo, deleteTodo, checkingCompleted }) {
  const [editing, setEditing] = useState(false);
  const [editDescription, setEditDescription] = useState(todo.description);
  const [editDeadline, setEditDeadline] = useState(todo.deadline);

  const handleCheckbox = (e) => {
    checkingCompleted(todo.id);
  };
  return (
    <div className="todolist-container">
      <li>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleCheckbox}
        />
        {!editing ? (
          <span
            style={{
              marginInline: "10px",
              textDecoration: todo.completed ? "line-through" : null,
              color: todo.completed ? "red" : "black",
            }}
          >
            <span>
              {editDescription} | {editDeadline}
            </span>
          </span>
        ) : (
          <>
            <input
              type="text"
              onChange={(e) => {
                setEditDescription(e.target.value);
              }}
              value={editDescription}
            ></input>
            <input
              type="date"
              onChange={(e) => {
                setEditDeadline(e.target.value);
              }}
              value={editDeadline}
            ></input>
          </>
        )}
        <button
          className="edit-btn"
          onClick={() => {
            setEditing(!editing);
          }}
        >
          {editing ? <RiSave3Line /> : <RiEditLine />}
        </button>

        {/* <RiEditLine
          className="edit-btn"
          onClick={() => {
            setEditing(!editing);
          }}
        >
          {editing ? <RiSave3Line /> : null}
        </RiEditLine> */}
        <span>
          <RiCloseCircleLine
            onClick={() => deleteTodo(todo.id)}
            style={{ float: "right", fontSize: "20px" }}
          />
        </span>
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
