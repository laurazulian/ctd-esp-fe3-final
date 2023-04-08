import Card from "../Components/Card";
import { useGlobalStates } from "../Components/utils/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {odonto} = useGlobalStates()

 
  return (
    <>
      <h1>Dentists Favs</h1>
      <div>
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}

        {odonto.map((odonto) => (
          <Card
            key={odonto.id}
            name={odonto.name}
            username={odonto.username}
            id={odonto.id}
           
          />
        ))}

      </div>
    </>
  );
};

export default Favs;