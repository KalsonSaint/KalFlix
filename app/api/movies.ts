import { Movie } from "~/types";

export const getMovies = async (title?: string | null) => {
  const response = await fetch("https://ghibliapi.herokuapp.com/films");
  const movies: Movie[] = await response.json();

  return movies.filter((movie) =>
    title ? movie.title.toLowerCase().includes(title.toLowerCase()) : true
  );
};
