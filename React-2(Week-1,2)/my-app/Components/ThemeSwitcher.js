"use client";
import { useTheme } from "../context/ThemeContext";
import Button from "@mui/material/Button";
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      Current: {theme} — Switch to {theme === "light" ? "dark" : "light"}
    </button>
  );
}
