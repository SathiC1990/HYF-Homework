"use client";

import React, { createContext, useReducer, useContext } from "react";

// Define a reducer function to handle increment and decrement actions
export const CounterReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// Create context
export const CounterContext = createContext();

// Corrected Provider name
export const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CounterReducer, { count: 0 });

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => useContext(CounterContext);
