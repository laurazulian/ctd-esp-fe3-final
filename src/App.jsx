import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Contact";
import Favs from "./Routes/Favs";
import { Routes, Route } from "react-router-dom";
import { useGlobalStates } from "./Components/utils/Context";

function App() {

const {themeState} = useGlobalStates()

  return (
    <div className={themeState.theme ? 'light-mode' : 'dark'}>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/favs" element={<Favs/>} />
        <Route path="/odonto/:id" element={<Detail />} />
      </Routes>
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
