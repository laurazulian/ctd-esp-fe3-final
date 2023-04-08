import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../rutas.js";
import { useGlobalStates } from "./utils/Context.jsx";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { themeState, themeDispatch } = useGlobalStates();

  const switchTheme = () => {
    if (themeState.theme) {
      themeDispatch({ type: "SWITCH_DARK" });
    } else {
      themeDispatch({ type: "SWITCH_LIGHT" });
    }
  };

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <Link to={routes.home}>
        <h3>Home</h3>
      </Link>
      <Link to={routes.contact}>
        <h3>Contact</h3>
      </Link>
      <Link to={routes.favs}>
        <h3>Favs</h3>
      </Link>

      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}

      <button onClick={switchTheme}>{themeState.theme ? "Oscuro 🌕" : "Claro ☀️"} </button>
    </nav>
  );
};
export default Navbar;
