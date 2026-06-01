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
      onDelete(); // Llamar a la función de actualización después de eliminar el videojuego
    }
  }

  return (
    <div>
      <Link to={`/videogame/${videogame.id}`}>
        <div className="justify-items-center mt-4">
          {videogame.imagen && <img src={videogame.imagen} alt={videogame.titulo} style={{ width: "200px" }} />}
          <div className="justify-items-center text-center mt-4">
            <h3>{videogame.titulo}</h3>
            <p>Género: {videogame.genero}</p>
            <p>Precio: ${videogame.precio.toLocaleString("es-CL")}</p>
          </div>
        </div>
      </Link>
        <div className="flex justify-center gap-1 mt-2">
          <Link to={`/edit/${videogame.id}`}><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Editar</button></Link>
          <button onClick={handleDelete} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Eliminar</button>
        </div>
    </div>
  )
}

export default VideogameCard