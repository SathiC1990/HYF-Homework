"use client";

import React from "react";
import { useCounter } from "@/context/CounterContext";

const CounterComponent = () => {
  const { state, dispatch } = useCounter(); // Destructure from context
  const { count } = state; // Destructure count from state

  return (
    <div>
      <h2>Current Count: {count}</h2>

      <button onClick={() => dispatch({ type: "increment" })}>+1</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-1</button>
    </div>
  );
};

export default CounterComponent;
