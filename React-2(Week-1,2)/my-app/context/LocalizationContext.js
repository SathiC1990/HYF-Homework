"use client";

import React, { createContext, useState } from "react";
import { LocalizationProvider as MuiLocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { enUS, da } from "date-fns/locale";

const localeMap = {
  en: enUS,
  da: da,
};

// Create localization context with default values
export const LocalizationContext = createContext({
  language: "en",
  setLanguage: () => {},
});

export const LocalizationProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  return (
    <LocalizationContext.Provider value={{ language, setLanguage }}>
      <MuiLocalizationProvider
        dateAdapter={AdapterDateFns}
        locale={localeMap[language]}
      >
        {children}
      </MuiLocalizationProvider>
    </LocalizationContext.Provider>
  );
};
