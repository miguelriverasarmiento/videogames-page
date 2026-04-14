export interface Videogame {
    id: number | string;
    titulo: string;
    genero: string;
    precio: number;
}

export type CreateVideogame = Omit<Videogame, "id">;
