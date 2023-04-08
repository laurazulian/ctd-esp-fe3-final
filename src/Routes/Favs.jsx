import React, { useEffect } from "react";
import Card from "../Components/Card";
import { useGlobalStates } from "../Components/utils/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {favState} = useGlobalStates()
  console.log(favState)

 
  return (
    <>
      <h1>Dentists Favs</h1>

      <div>
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}

        {favState.map((o) => (
          <Card
            key={o.id}
            name={o.name}
            username={o.username}
            id={o.id}
          />
        ))}

      </div>
    </>
  );
};

export default Favs;