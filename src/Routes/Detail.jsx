import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobalSates } from "../Components/utils/Context";
import { useState } from "react";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const { id } = useParams();
  const [odonto, setOdonto] = useState([]);
  const { state, dispatch } = useGlobalSates();

  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setOdonto(data);
      console.log(data);
    };
    fetchData();
  }, [url]);
  
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
