import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cualquiera from './Components/cualquiera'
import imagen3 from '../src/imagenes/E0VY64FXsAIexOY.jfif'
import priyecto from './app.module.scss'

function App() {
  const arreglo = [
    {
      id: 1,
      nombre: "Shawn Wang",
      pais: "Nigeria",
      imagen: reactLogo,
      cargo: "Desarrollador",
      empresa: "Facebook",
      testimonio: "OLA K ACE"
    },
    {
      id: 2,
      nombre: "Evan You",
      pais: "China",
      imagen: viteLogo,
      cargo: "Desarrollador",
      empresa: "google",
      testimonio: "Aiuda"
    },
    {
      id: 3,
      nombre: "Ana",
      pais: "Mexico",
      imagen: imagen3,
      cargo: "Desarrollador",
      empresa: "google",
      testimonio: "Nada"
    }
  ]

  return (
    <>
     <div className={priyecto.contenedor_p}>
    <h1> Esto es una practica de React por parte de Ana</h1>
     { /** ARREGLO  es para hacer el rrecorrido de las posiciones de un arreglo*/
     /** Utitlizar las props */}
    {
      arreglo.map((arreglo) => {
        return <Cualquiera key={arreglo.id} nombre={arreglo.nombre} pais={arreglo.pais} imagen={arreglo.imagen} cargo={arreglo.cargo} empresa={arreglo.empresa} testimonio={arreglo.testimonio} />
      })
      }
     </div>
    </>
  )
}

export default App
