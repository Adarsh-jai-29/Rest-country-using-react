import "./component/App.css";
import Header from "./component/Header";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
