import { combineReducers, createStore } from "redux";
import { todoReducers } from "../reducers/todoReducers";

const reducers = combineReducers({
  todos: todoReducers,
});
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
