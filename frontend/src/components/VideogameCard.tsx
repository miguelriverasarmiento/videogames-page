import type { Videogame } from "../types/videogame";
import { Link } from "react-router-dom";

interface Props {
    videogame: Videogame;
}

const VideogameCard = ({ videogame }: Props) => {
  return (
    <div>
        <h3>{videogame.titulo}</h3>
        <p>Género: {videogame.genero}</p>
        <p>Precio: ${videogame.precio}</p>
        <Link to={`/edit/${videogame.id}`}><button>Editar</button></Link>
        <button>Eliminar</button>
    </div>
  )
}

export default VideogameCard