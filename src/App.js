import Sidebar from "./Components/Sidebar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Certificate from "./Pages/Certificates";
import Projects from "./Pages/Projects";

export default function App() {
  return (
    <div className="w-screen h-screen flex overflow-x-hidden ">
      <Sidebar />
      <div className="">
        <Home />
        <About />
        <Skills />
        <Certificate />
        <Projects />
      </div>
    </div>
  );
}
