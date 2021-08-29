import React, { useState } from "react";
import todoActions from "../actions/todoActions";
import { v4 as uuid } from "uuid";
const TodoInput = () => {
  const [inputData, setInputData] = useState("");
  const handleAddTodo = () => {
    todoActions.add({ id: uuid(), title: inputData, isCompleted: false });
    setInputData("");
  };
  return (
    <div>
      <div className="add-items d-flex">
        <input
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
          type="text"
          className="form-control todo-list-input"
          placeholder="What do you need to do today?"
        />
        <button
          onClick={handleAddTodo}
          className="add btn btn-primary font-weight-bold todo-list-add-btn"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default TodoInput;
