import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Card from '../Components/Card'
import { useState } from 'react'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const [odonto] = useState ([])

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
      {odonto.map((item) => <Card key={item.name} to={'/odonto/' + item.name}><h4>{item.name}</h4>/</Card>)}
        {/* Aqui deberias renderizar las cards */}
      </div>

    </main>
  )
}

export default Home