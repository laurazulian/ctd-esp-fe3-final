import React from "react";
import Card from "../Components/Card";
import { useGlobalStates } from "../Components/utils/Context";
import { useState } from "react";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const {favState} = useGlobalStates()

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}

        {favState.map(odonto => (
          <div key={odonto.id}>
            <h2>{odonto.name}</h2>
          </div>

        ))}

      </div>
    </>
  );
};

export default Favs;
