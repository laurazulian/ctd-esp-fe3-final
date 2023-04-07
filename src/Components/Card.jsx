import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGlobalStates } from "./utils/Context";

const Card = ({name, username, id }) => {
  
  const {name} = useParams()
  const {favDispatch} = useGlobalStates();
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
        <Link key={id} to={'/dentist/' + id}>
        <h3>{name}</h3>
        <h3>{username}</h3>
        <h3>{id}</h3>
        </Link>

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
