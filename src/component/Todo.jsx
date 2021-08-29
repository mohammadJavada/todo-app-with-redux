import React from "react";
import todoActions from "../actions/todoActions";

const Todo = ({ todo }) => {
  return (
    <div>
      <li>
        <div className="form-check">
          <label className="form-check-label">
            <input
              className="checkbox"
              type="checkbox"
              checked={todo.isCompleted}
              onClick={() => todoActions.changeStatus(todo)}
            />
            {todo.title}
            <i className="input-helper"> </i>
          </label>
        </div>
        <i className="remove mdi mdi-close-circle-outline"></i>
      </li>
    </div>
  );
};

export default Todo;
