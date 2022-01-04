import { Form, Link, LoaderFunction, MetaFunction, useLoaderData } from "remix";
import { getMovies } from "~/api/movies";
import { Movie } from "~/types";

// Server Side
export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const title = url.searchParams.get("title");
  return getMovies(title);
};

const MoviesPage = () => {
  const movies = useLoaderData<Movie[]>();
  return (
    <div className="p-16 font-sans">
      <h1 className="text-5xl font-bold text-center">KalFlix</h1>
      <Form reloadDocument method="get" className="py-5">
        <label className="font-bold">
          <input
            type="text"
            className="border-2 rounded py-2 px-3"
            placeholder="Search by Title..."
            name="title"
          />
        </label>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2">
          Search
        </button>
      </Form>
      <div className="grid grid-cols-4 gap-4">
        {movies.map((movie) => (
          <Link
            title={movie.title}
            key={movie.id}
            to={movie.id}
            className="hover:shadow-2xl hover:scale-105 hover:font-bold cursor-pointer"
            prefetch="none"
          >
            <div>{movie.title}</div>
            <img src={movie.image} alt={movie.title} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MoviesPage;

export const meta: MetaFunction = () => {
  return { title: "Movies | KalFlix", description: "Sample Page" };
};
