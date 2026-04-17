import type { Videogame } from "../types/videogame";
import { Link } from "react-router-dom";
import { deleteVideogames } from "../api/videogameApi";

interface Props {
    videogame: Videogame;
    onDelete: () => void;
}

const VideogameCard = ({ videogame, onDelete }: Props) => {

  const handleDelete = async() => {
    const confirm  = window.confirm("¿Eliminar este videojuego?")
    if (confirm) {
      await deleteVideogames(videogame.id)
      onDelete();
    }
  }

  return (
    <div>
      <Link to={`/videogame/${videogame.id}`}>
        <h3>{videogame.titulo}</h3>
        <p>Género: {videogame.genero}</p>
        <p>Precio: ${videogame.precio}</p>
      </Link>
        <Link to={`/edit/${videogame.id}`}><button>Editar</button></Link>
        <button onClick={handleDelete}>Eliminar</button>
    </div>
  )
}

export default VideogameCard