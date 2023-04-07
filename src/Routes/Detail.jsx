import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobalSates } from "../Components/utils/Context";
import { useState } from "react";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const { id } = useParams();
  const [odonto, setOdonto] = useState(null);
  const { state} = useGlobalSates();

  const url = `https://jsonplaceholder.typicode.com/users/${id}`;

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
      setOdonto(data)
    }) 
    const o = odonto.find((dentist) =>  odonto.id === id);
    setOdonto(o);
  }, [id, odonto, url]);
  

  return (
    <div className={` ${state.theme}`}>
      <h1>Detail Dentist {id} </h1>

      <p>name={odonto.name}</p>
      <p>email={odonto.email}</p>
      <p>phone={odonto.phone}</p>
      <p>webSitw={odonto.website}</p>

      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </div>
  );
};

export default Detail;
