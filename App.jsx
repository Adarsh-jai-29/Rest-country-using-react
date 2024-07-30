import { useState } from "react";
import "./component/App.css";
import Header from "./component/Header";
import { Outlet } from "react-router-dom";
import { ThemeContext } from "./context/ThemeContext";

export default function App() {
  const [isDark,setIsDark]= useState(JSON.parse(localStorage.getItem("DarkMode")))
  
  return (
    <ThemeContext.Provider value={[isDark,setIsDark]}>
      <Header />
      <Outlet />

    </ThemeContext.Provider>
  );
}
