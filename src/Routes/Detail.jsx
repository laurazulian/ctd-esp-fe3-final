import { useParams } from "react-router-dom";
import { useGlobalStates } from "../Components/utils/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  const { odonto } = useGlobalStates();
  const paramsId = useParams();

  const odontoIdSelected = odonto.find((v) => paramsId.id == v.id);

  return (
    <div className="vista">
      <h1>Detalle dentista {odontoIdSelected.id} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone number</th>
          <th>Website</th>
        </tr>
        <tr>
          <td>{odontoIdSelected.name}</td>
          <td>{odontoIdSelected.email}</td>
          <td>{odontoIdSelected.phone}</td>
          <td>{odontoIdSelected.website}</td>
        </tr>
      </table>
    </div>
  );
};

export default Detail;
