"use client";
import React, { createContext, useContext, useState } from 'react';

// Create the context
const LanguageContext = createContext();

// Create a provider component
export const LanguageProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('GEO'); // Default language

  return (
    <LanguageContext.Provider value={{ selectedLanguage, setSelectedLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Create a custom hook to consume the context
export const useLanguage = () => useContext(LanguageContext);