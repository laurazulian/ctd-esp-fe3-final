import React, { useEffect } from "react";
import Card from "../Components/Card";
import { useGlobalStates } from "../Components/utils/Context";
import { useState } from "react";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const {state, dispatch} = useGlobalStates()
  const {favState, setFavs} = useState([]);

  useEffect(() => {
    const favoritos = JSON.parse(localStorage.getItem("favs")) || [];
    setFavs(favoritos);
  }, []);



  return (
    <>
      <h1>Dentists Favs</h1>
      <h2 className={state.theme}>Dentists Favs</h2>
      <div className={`card-grid ${state.theme}`}>
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}

        {favState.map((odontologo) => (
          <Card
            id={odontologo.id}
            name={odontologo.name}
            username={odontologo.username}
            key={odontologo.id}
          />
        ))}

      </div>
    </>
  );
};

export default Favs;