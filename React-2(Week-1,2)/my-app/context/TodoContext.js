"use client";
import React, { createContext, useReducer, useContext } from "react";
//Define a reducer function to handle actions related to todos (add, remove, toggle)

const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";

const initialState = [];

function todoReducer(state, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        { id: Date.now(), text: action.payload, completed: false },
      ];

    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);

    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );

    default:
      return state;
  }
}
const TodoContext = createContext();
const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
//hook to use the Todo context
const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodo must be used within a TodoProvider");
  }
  return context;
};
export { TodoProvider, useTodo };
