import { LoaderFunction, useLoaderData } from "remix";
import invariant from "tiny-invariant";
import { getMovieById } from "~/api/movies";
import MovieBanner from "~/components/MovieBanner";
import { Movie } from "~/types";

export const loader: LoaderFunction = async ({ params: { movieId } }) => {
  invariant(movieId, "expected Movie Id");
  const movie = await getMovieById(movieId);

  return movie;
};

const Movie = () => {
  const movie = useLoaderData<Movie>();

  return (
    <div>
      <MovieBanner movie={movie} />
    </div>
  );
};

export default Movie;
