"use client";
import React, { createContext, useState, useMemo } from "react";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";

// Create context with default values
export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

// ThemeProvider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // Toggle between 'light' and 'dark'
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  const muiTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: theme,
          ...(theme === "light"
            ? {
                background: {
                  default: "#fafafa",
                  paper: "#fff",
                },
                text: {
                  primary: "#000",
                },
              }
            : {
                background: {
                  default: "#121212",
                  paper: "#1d1d1d",
                },
                text: {
                  primary: "#fff",
                },
              }),
        },
        typography: {
          fontFamily: [
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(","),
        },
      }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
