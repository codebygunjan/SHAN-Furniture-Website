import React, { createContext, useState } from "react";

export const ThemContext = createContext();

const ThemeToggle = ({ children }) => {
  const [theme, setTheme] = useState("light");
  return (
    <div>
      <ThemContext.Provider value={{ theme, setTheme }}>
        {children}
      </ThemContext.Provider>
    </div>
  );
};

export default ThemeToggle;
