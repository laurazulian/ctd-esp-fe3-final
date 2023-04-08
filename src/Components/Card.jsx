import React from "react";
import { Link} from "react-router-dom";
import { useGlobalStates } from "./utils/Context";
import { useState } from "react";
import { useEffect } from "react";

const Card = ({name, username, id }) => {
  
  const {favDispatch, odonto, favState} = useGlobalStates();

  const [dentistSelected, setDentisSelected] = useState({});

  const url = `https://jsonplaceholder.typicode.com/users/${id}`;;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDentisSelected(data));
  }, []);

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    favDispatch({type: 'ADD_FAV', payload: dentistSelected})
  }

  return (
    <div className="card">
        <Link  key={id} to={"/dentist/" + id}>
        {/* En cada card deberan mostrar en name - username y el id */}
        <img src="./images/doctor.jpg" alt="" width={200} />
        <h3>{name}</h3>
        <h3>{username}</h3>
        <h3>{id}</h3>
        </Link>
        <button onClick={addFav} className="favButton">Add fav ⭐</button>
    </div>
  );
};


export default Card;