import Sidebar from "./Components/Sidebar";
import Home from "./Pages/Home";
import About from "./Pages/About";

export default function App() {
  return (
    <div className="w-screen h-screen flex overflow-x-hidden ">
      <Sidebar />
      <div className="flex flex-col">
        <Home />
        <About />
      </div>
    </div>
  );
}
