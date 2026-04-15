export interface Videogame {
    id: number | string;
    titulo: string;
    genero: string;
    precio: number;
}

export type CreateVideogame = Omit<Videogame, "id">; // Omite el campo id

export type UpdateVideogame = Partial<CreateVideogame>; // Partial significa que todos los campos son opcionales
