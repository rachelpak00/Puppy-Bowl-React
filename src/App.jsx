import { useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from "./components/Home"; 
import AllPlayers from "./components/AllPlayers"; 
import SinglePlayer from "./components/SinglePlayer";

function App() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    async function fetchPuppies() {
      try {
        let response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2304-ftb-et-web-ft/players')
        let data = await response.json()
        let actualData = data.data.players 
        setPlayers(actualData)

      } catch (error) {
        console.log(error)
      }
    }
    // console.log(players)
    fetchPuppies()
  }, [])
  return (
    
    <div>
      <nav className='container-element'>
        <Link to='/'>HOME</Link>
        <Link to='/players'>All Players</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/players' element={<AllPlayers players= {players} />} />
        <Route path='/players/:id' element={<SinglePlayer players= {players} />} />
      </Routes>
    </div>
  ) 
}

export default App
