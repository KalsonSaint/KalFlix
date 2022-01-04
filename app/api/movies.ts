import { Movie } from "~/types";

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
  const characters = await Promise.all(
    movie.people
      .filter((url) => url !== "https://ghibliapi.herokuapp.com/people")
      .map((url) => fetch(url).then((res) => res.json()))
  );

  return { ...movie, characters };
};
