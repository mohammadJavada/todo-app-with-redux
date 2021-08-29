import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Todo from "./component/Todo";
import TodoInput from "./component/TodoInput";
const App = () => {
  const todos = useSelector((state) => state.todos);
  return (
    <div>
      <div className="page-content page-container" id="page-content">
        <div className="row container d-flex justify-content-center">
          <div className="col-md-12">
            <div className="card px-3">
              <div className="card-body">
                <h4 className="card-title">Awesome Todo list</h4>
                <TodoInput />
                <div className="list-wrapper">
                  <ul className="d-flex flex-column todo-list">
                    {todos.map((todo) => (
                      <Todo todo={todo} />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
