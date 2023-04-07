import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGlobalStates } from "./utils/Context";
import { useState } from "react";
import { useEffect } from "react";

const Card = ({username, id }) => {
  
  const {name} = useParams()
  const {state, favDispatch} = useGlobalStates();
  const [odonto, setOdonto] = useState ({})
  const url = 'https://jsonplaceholder.typicode.com/users' + name 

  let favs = localStorage.getItem('favs')

  useEffect(()=>{
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(setOdonto(data)))
  },[])
  
  
  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    localStorage.setItem('favs', JSON.stringify(favs))
    favDispatch({type: 'ADD_FAV', payload: odonto})
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        
        <h3>{name}</h3>
        <h3>{username}</h3>
        <h3>{id}</h3>
        <Link key={id} to={'/odonto/' + id}></Link>
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;



