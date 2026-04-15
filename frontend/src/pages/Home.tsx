import VideogameList from "../components/VideogameList"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
      <Link to="/create"><button>Crear Videojuego</button></Link>
      <VideogameList />
    </div>
  )
}

export default Home