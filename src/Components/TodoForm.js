import React, { useState } from "react";
// import "../App.sass";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCalendarPlus } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faCalendarPlus);

function getDate() {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return `${year}-${month < 10 ? `0${month}` : `${month}`}-${date}`;
}

function TodoForm({ addTodo }) {
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState(getDate());

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description !== "") {
      addTodo(description, deadline);
      setDescription("");
      setDeadline(getDate());
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="todo-text-input"
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Add todo"
        label="description"
      />
      <br />
      <div className="date-and-save">
        <input
          className="todo-deadline-input"
          label="deadline"
          type="date"
          name="deadline"
          value={deadline}
          onChange={(e) => {
            setDeadline(e.currentTarget.value);
          }}
          // style={{ width: "150px", height: "30px"  }}
        />

        <button
          className="add-todo-btn"
          type="submit"
          style={{ backgroundColor: "transparent", border: "none" }}
        >
          <FontAwesomeIcon
            icon={faCalendarPlus}
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
