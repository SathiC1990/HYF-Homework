"use client";
import React, { useState } from "react";

import { useTodo } from "@/context/TodoContext";

export default function TodoList() {
  const { state: todos, dispatch } = useTodo();
  const [newTodo, setNewTodo] = useState("");

  // Function to handle adding a new todo
  const handleAddTodo = () => {
    if (newTodo.trim()) {
      dispatch({ type: "ADD_TODO", payload: newTodo });
      setNewTodo("");
    }
  };
  // Function to handle removing a todo
  const handleRemoveTodo = (id) => {
    dispatch({ type: "REMOVE_TODO", payload: id });
  };
  // Function to handle toggling a todo's completion status
  const handleToggleTodo = (id) => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto" }}>
      <h2>Todo List</h2>
      <input
        type="text"
        placeholder="Enter todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
        style={{ width: "100%", padding: 8, marginBottom: 10 }}
      />
      <button onClick={handleAddTodo} style={{ marginBottom: 20 }}>
        Add Todo
      </button>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              marginBottom: 12,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
            onClick={() => handleToggleTodo(todo.id)}
          >
            <span>{todo.text}</span>
            <button
              onClick={(e) => {
                e.stopPropagation(); // Prevent toggle when clicking remove
                handleRemoveTodo(todo.id);
              }}
              style={{
                background: "red",
                color: "white",
                border: "none",
                padding: "4px 8px",
                borderRadius: 4,
                cursor: "pointer",
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
