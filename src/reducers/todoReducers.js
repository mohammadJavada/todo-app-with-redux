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
const todoReducers = (state = initialTodos, action) => {
  switch (action.type) {
  }
};
