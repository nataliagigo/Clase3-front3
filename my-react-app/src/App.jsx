import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
//import './Title.jsx'

function App() {
 /* const [count, setCount] = useState(0)*/

  function Like(){
    console.log("like");
  }

  function Title(props){
    return(
        <div>
            <h3>{props.title}</h3>
            <h2>{props.title2}</h2>
        </div>
    )
  }

  function Lista(props){
    return(
      <ul>
        <li>{props.genero1}</li>
        <li>{props.genero2}</li>
        <li>{props.genero3}</li>
      </ul>
    )
  }
  
  function ListaActores(props){
    return(
      <ul>
        <li>{props.actor1}</li>
        <li>{props.actor2}</li>
        <li>{props.actor3}</li>
        <li>{props.actor4}</li>
      </ul>
    )
  }

  return (
    <div className="App" id="background">
      <h1>The whale</h1>
      <p>no se, no me la he visto, pero la quiero ver jeje</p>
      <button onClick={like}>like</button> 
      <Title title="Actores" title2="Generos" title3="Nombres"></Title>
      <Lista genero1="accion" genero2="romance"  genero3="drama"></Lista>
      <ListaActores actor1="Leonardo DiCaprio" actor2="Brad Pitt"  actor3="Tom Cruise" actor4="Will Smith"></ListaActores>
    </div>
  )
}

export default App
