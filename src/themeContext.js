import { useState, useEffect } from "react";
import React from 'react';

const getInitialTheme = () => {
    if (typeof window !== "undefined" && window.localStorage) {
        const storedPrefs = window.localStorage.getItem("current-theme");
        if (typeof storedPrefs === "string") {
            return storedPrefs;
        }
        if(window.matchMedia("(prefers-color-scheme: light)").matches){
            return "light"
        }
        return "dark";
    }
}


export const ThemeProvider = ({ initialTheme, children}) => {
    const [theme, setTheme] = useState(getInitialTheme);

    const checkTheme = (existing) => {
        const root = window.document.documentElement;
        const isDark = existing === "light";

        root.classList.remove(isDark ? 'dark' : 'light');
        root.classList.add(existing);
    
        localStorage.setItem('current-theme', existing);
      };
    
      if (initialTheme) {
        checkTheme(initialTheme);
      }
    
      useEffect(() => {
        checkTheme(theme);
      }, [theme]);
    
      return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
          {children}
        </ThemeContext.Provider>
      );
}

export const ThemeContext = React.createContext();