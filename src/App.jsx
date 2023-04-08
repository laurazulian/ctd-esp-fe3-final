import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import { Routes, Route } from "react-router-dom";
import {routes} from "./rutas"
import { useGlobalStates } from "./Components/utils/Context";


function App() {

  const {themeState} = useGlobalStates()

return (
  <div className={themeState.theme ? 'light-mode' : 'dark'}>
    <Navbar/>  
      <Routes>
          <Route path={routes.home} element={<Home/>} />
          <Route path={routes.detail} element={<Detail/>} />
          <Route path={routes.contact} element={<Contact/>} />
          <Route path={routes.favs} element={<Favs/>}/>
      </Routes>
    <Footer />
  </div>
);
}

export default App;
