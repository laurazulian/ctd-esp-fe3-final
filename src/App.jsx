import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/dentist/:id" element={<Detail/>} />
        <Route path="/contacto" element={<Contact/>} />
        <Route path="/favs" element={<Favs/>} />
      </Routes>
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
