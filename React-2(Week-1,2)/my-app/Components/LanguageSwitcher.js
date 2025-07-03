"use client";

import React, { useContext } from "react";
import { LocalizationContext } from "../context/LocalizationContext";
import Button from "@mui/material/Button";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useContext(LocalizationContext);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "da" : "en");
  };

  return (
    <Button variant="outlined" onClick={toggleLanguage}>
      Language: {language.toUpperCase()} (Click to switch)
    </Button>
  );
};

export default LanguageSwitcher;
