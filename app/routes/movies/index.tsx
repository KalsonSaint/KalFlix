import { LoaderFunction, MetaFunction, useLoaderData } from "remix";
import { getMovies } from "~/api/movies";
import { Movie } from "~/types";

// Server Side
export const loader: LoaderFunction = async () => {
  return getMovies();
};

const MoviesPage = () => {
  const movies = useLoaderData<Movie[]>();
  return (
    <div>
      All Movies
      <div className="grid grid-cols-4 gap-4">
        {movies.map((movie) => (
          <div className="hover:shadow-2xl hover:scale-105 hover:font-bold cursor-pointer">
            <div>{movie.title}</div>
            <img src={movie.image} alt={movie.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesPage;

export const meta: MetaFunction = () => {
  return { title: "Movies | KalFlix", description: "Sample Page" };
};
