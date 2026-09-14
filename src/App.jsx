import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/inicio.jsx";
import HTML from "./pages/html.jsx";
import CSS from "./pages/css.jsx";
import JS from "./pages/js.jsx";
import { Navbar } from "./components/NavBar";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/html" element={<HTML />} />
          <Route path="/css" element={<CSS />} />
          <Route path="/js" element={<JS />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
