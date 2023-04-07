import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobalSates } from "../Components/utils/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const { odonto} = useGlobalSates();
  const {id} = useParams();
      
  const dentistIdSelected = odonto.find((v) => id.id == v.id )

  return (
    <div>
      <h1>Detail Dentist {dentistIdSelected.id} </h1>
      <p>name={dentistIdSelected.name}</p>
      <p>email={dentistIdSelected.email}</p>
      <p>phone={dentistIdSelected.phone}</p>
      <p>webSitw={dentistIdSelected.website}</p>

      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </div>
  );
};

export default Detail;

