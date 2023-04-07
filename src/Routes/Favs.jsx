import React, { useEffect } from "react";
import Card from "../Components/Card";
import { useGlobalStates } from "../Components/utils/Context";
import { useState } from "react";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {favState} = useGlobalStates()
  console.log(favState)
  const {state} = useState()
 
  return (
    <>
      <h1>Dentists Favs</h1>
      <h2 className={state.theme}>Dentists Favs</h2>
      <div className={`card-grid ${state.theme}`}>
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}

        {favState.map((odonto) => (
          <Card
            id={odonto.id}
            name={odonto.name}
            username={odonto.username}
            key={odonto.id}
          />
        ))}

      </div>
    </>
  );
};

export default Favs;