import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/inicio.jsx";
import { Navbar } from "./components/NavBar";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
