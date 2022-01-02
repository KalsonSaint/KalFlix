import { LoaderFunction, MetaFunction, useLoaderData } from "remix";
import { getMovies } from "~/api/movies";
import { Movie } from "~/types";

// Server Side
export const loader: LoaderFunction = async () => {
  return getMovies();
};

const FilmsPage = () => {
  const films = useLoaderData<Movie[]>();
  return (
    <div>
      Movies
      <div>{}</div>
    </div>
  );
};

export default FilmsPage;

export const meta: MetaFunction = () => {
  return { title: "Movies | KalFlix", description: "Sample Page" };
};
