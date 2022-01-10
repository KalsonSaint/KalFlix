import { LoaderFunction, MetaFunction, Outlet, useLoaderData } from "remix";
import invariant from "tiny-invariant";
import { getMovieById } from "~/api/movies";
import CharacterList from "~/components/CharacterList";
import CommentsList from "~/components/CommentsList";
import MovieBanner from "~/components/MovieBanner";
import { Movie } from "~/types";

export const meta: MetaFunction = ({ data }) => {
  return { title: data.title, description: data.description };
};

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
      <div className="p-10">
        <p>{movie.description}</p>
        <div className="flex py-5 space-x-5">
          <CharacterList characters={movie.characters} />
          <div className="flex-1 flex flex-col justify-between">
            <Outlet />
            <CommentsList movieId={movie.id} comments={movie.comments || []} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
