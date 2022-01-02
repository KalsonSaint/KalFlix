import { Movie } from "~/types";

export const getMovies = async () => {
  const response = await fetch("https://ghibliapi.herokuapp.com/films");
  const movies: Movie[] = await response.json();

  return movies;
};
