import { LoaderFunction, useLoaderData } from "remix";
import invariant from "tiny-invariant";
import { getMovieById } from "~/api/movies";
import { Movie } from "~/types";

export const loader: LoaderFunction = async ({ params: { movieId } }) => {
  invariant(movieId, "expected Movie Id");
  const movie = await getMovieById(movieId);

  console.log("Fetchign Movie ...", movie.title);

  return movie;
};

const Movie = () => {
  const movie = useLoaderData<Movie>();
  return <div>{movie.title}</div>;
};

export default Movie;
