import { LoaderFunction, useLoaderData } from "remix";
import invariant from "tiny-invariant";
import { getMovieCharacter } from "~/api/movies";
import { MovieCharacter } from "~/types";

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.characterId, "Expected params.characterId");
  // throw new Error("Random Error");

  return getMovieCharacter(params.characterId);
};

const Character = () => {
  const characterDetails = useLoaderData<MovieCharacter>();
  const { age, eye_color, gender, hair_color, name } = characterDetails;

  return (
    <div className="mb-3">
      <div className="text-3xl mb-2">Character Details</div>
      <div className="p-4 rounded shadow-lg border">
        <div className="text-gray-700 font-bold text-xl mb-2">{name}</div>
        <ul className="py-2">
          <li>Gender: {gender}</li>
          <li>Age: {age}</li>
          <li>Eye Color: {eye_color}</li>
          <li>Hair Color: {hair_color}</li>
        </ul>
      </div>
    </div>
  );
};

export default Character;
