import { bindActionCreators } from "redux";
import store from "./../store/index";

const add = (todo) => ({ type: "add", payload: todo });
const deleteTodos = (todo) => ({ type: "delete", payload: todo });
const changeStatus = (todo) => ({ type: "changeStatus", payload: todo });

const todoActions = bindActionCreators(
  { add, deleteTodos, changeStatus },
  store.dispatch
);
export default todoActions;
