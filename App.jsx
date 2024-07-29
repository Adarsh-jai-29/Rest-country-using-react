import { useState } from "react";
import "./component/App.css";
import Header from "./component/Header";
import { Outlet } from "react-router-dom";

export default function App() {
  const [isDark,setIsDark]= useState(JSON.parse(localStorage.getItem("DarkMode")))
  return (
    <>
      <Header theme={[isDark,setIsDark]}/>
      <Outlet context={[isDark,setIsDark]}/>
    </>
  );
}
