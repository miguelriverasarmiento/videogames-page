import type { Videogame, CreateVideogame } from "../types/videogame";

export async function getVideogames(): Promise<Videogame[]> {
    const response = await fetch("/api/videogames");
    if (!response.ok) {
        throw new Error("Error obtaining the videogames");
    }
    return await response.json();
}

export const createVideogames = async (data: CreateVideogame): Promise<Videogame> => {
    const response = await fetch("/api/videogames", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    if (!response.ok) {
        throw new Error("Error creating videogame");
    }
    return await response.json();
}
