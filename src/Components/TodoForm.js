import React, { useState } from "react";

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
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Add todo"
        label="description"
        style={{ width: "200px", height: "30px", margin: "10px" }}
      />
      <br />
      <input
        label="deadline"
        type="date"
        name="deadline"
        value={deadline}
        onChange={(e) => {
          setDeadline(e.currentTarget.value);
        }}
        style={{ width: "150px", height: "30px" }}
      />
      <button
        type="submit"
        style={{ marginInline: "10px", width: "50px", height: "25px" }}
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
