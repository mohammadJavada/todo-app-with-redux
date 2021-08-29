import { v4 as uuid } from "uuid";
const initialTodos = [
  {
    id: uuid(),
    title: "clean the house",
    isCompleted: false,
  },
  {
    id: uuid(),
    title: "buy a new car",
    isCompleted: false,
  },
  {
    id: uuid(),
    title: "buy a new laptop",
    isCompleted: false,
  },
];
export const todoReducers = (state = initialTodos, action) => {
  const todo = action.payload;
  switch (action.type) {
    case "add":
      return [todo, ...state];

    default:
      return state;
  }
};
