import Card from "../Components/Card";
import { useGlobalStates } from "../Components/utils/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {favState} = useGlobalStates()

 
  return (
    <>
      <h1>Dentistas favoritos</h1>
      <div className='card-grid'>
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}

        {favState.map((dentist) => (
          <Card
            key={dentist.id}
            name={dentist.name}
            username={dentist.username}
            id={dentist.id}
          />
        ))}

      </div>
    </>
  );
};

export default Favs;
