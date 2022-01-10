import { getComments } from "./comments";
import { Movie, MovieCharacter } from "~/types";

export const getMovies = async (title?: string | null) => {
  const response = await fetch("https://ghibliapi.herokuapp.com/films");
  const movies: Movie[] = await response.json();

  return movies.filter((movie) =>
    title ? movie.title.toLowerCase().includes(title.toLowerCase()) : true
  );
};

export const getMovieById = async (movieId: string) => {
  const response = await fetch(
    `https://ghibliapi.herokuapp.com/films/${movieId}`
  );
  const movie: Movie = await response.json();
  const comments = await getComments(movieId);
  const characters = await Promise.all(
    movie.people
      .filter((url) => url !== "https://ghibliapi.herokuapp.com/people")
      .map((url) => fetch(url).then((res) => res.json()))
  );

  return { ...movie, characters, comments };
};

export const getMovieCharacter = async (
  characterId: string
): Promise<MovieCharacter> => {
  {
    const response = await fetch(
      `https://ghibliapi.herokuapp.com/people/${characterId}`
    );

    if (!response.ok) {
      throw response;
    }

    return response.json();
  }
};
