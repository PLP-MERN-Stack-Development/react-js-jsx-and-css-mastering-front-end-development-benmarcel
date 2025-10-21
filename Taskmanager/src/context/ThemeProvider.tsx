import React, { useState, useEffect } from "react";
import type { Theme } from "../types"; // Assuming Theme is 'light' | 'dark'
import { ThemeContext } from "./context";

// 1. Helper function to get the initial theme value
const getInitialTheme = (): Theme => {
  // Check for explicit preference in Local Storage
  if (typeof localStorage !== 'undefined' && localStorage.theme) {
    return localStorage.theme as Theme;
  }
  // Check for OS preference
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  // Default to light
  return 'light';
};


const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  // Initialize state using the logic from the helper function
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  // Define the toggle function which also manages Local Storage
  const toggleTheme = () => {
    setTheme(prev => prev === "light" ? "dark" : "light");
    localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
  };

  // Use useEffect to handle side effects: updating the DOM and Local Storage
  useEffect(() => {
    const isDark = theme === 'dark';
    
    // Update Local Storage
    if (isDark) {
      localStorage.theme = 'dark';
    } else {
      localStorage.theme = 'light';
    }

    // Update the <html> element class for Tailwind
    document.documentElement.classList.toggle('dark', isDark);

  }, [theme]); // Rerun this effect whenever the theme state changes

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;