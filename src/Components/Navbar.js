import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../Pages/About";
import Home from "../Pages/Home";
export default function Navbar() {
  return (
    <div className="p-4 bg-offWhite flex justify-center gap-10">
      <p className="nav-option">About</p>
      <p className="nav-option">Skills</p>
      <p className="nav-option">Projects</p>
      <p className="nav-option">Achievements</p>
    </div>
  );
}
