import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageProyectos from "./pages/PageProyectos";
import Experiencia from "./pages/Experiencia";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomeSkills from "./pages/HomeSkills";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/PageProyectos" element={<PageProyectos />} />
          <Route path="/project/:id" element={<HomeSkills />} />
          <Route path="/Experiencia" element={<Experiencia />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

