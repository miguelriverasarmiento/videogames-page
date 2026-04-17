import './App.css'
import CreateVideogame from './pages/CreateVideogame'
import EditVideogame from './pages/EditVideogame'
import ViewVideogame from './pages/ViewVideogame'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'

function App() {
    
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/create" element={<CreateVideogame />} />
      <Route path="/edit/:id" element={<EditVideogame />} />
      <Route path="/videogame/:id" element={<ViewVideogame />} />
    </Routes>
  )
}

export default App
