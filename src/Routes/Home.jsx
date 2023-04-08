import React from 'react'
import Card from '../Components/Card'
import { useGlobalStates } from '../Components/utils/Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const {odonto} = useGlobalStates()

  // const {odontoStates} = useGlobalStates()

  return (
    
    <main className="" >
      <h1>Bienvenidos al consultorio de DH</h1>
      {/* <h1>Home</h1> */}
      <div className='card-grid'> 
      {odonto.map((item) => <Card key={item.name} id={item.id} name={item.name} username={item.username}/>)}
  
        {/* Aqui deberias renderizar las cards */}    
      </div>

    </main>
  )
}

export default Home