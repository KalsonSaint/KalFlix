import { LoaderFunction, useCatch, useLoaderData } from "remix";
import invariant from "tiny-invariant";
import { getMovieCharacter } from "~/api/movies";
import { MovieCharacter } from "~/types";

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.characterId, "Expected params.characterId");

  return getMovieCharacter(params.characterId);
};

const Character = () => {
  const characterDetails = useLoaderData<MovieCharacter>();
  const { age, eye_color, gender, hair_color, name } = characterDetails;

  return (
    <div className="mb-3">
      <div className="text-xl mb-2">Character Details</div>
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

// export const CatchBoundary = () => {
//   let caught = useCatch();

//   return (
//     <div className="mb-3">
//       <div className="text-3xl mb-2">Details</div>
//       <div className="p-4 rounded shadow-lg border bg-orange-200 border-orange-600">
//         <div className="text-gray-700 font-bold text-xl mb-2">
//           {caught.statusText}
//         </div>
//         <p>
//           {caught.status} {caught.statusText}
//         </p>
//       </div>
//     </div>
//   );
// };

// export const ErrorBoundary = ({ error }: any) => {
//   return (
//     <div className="mb-3">
//       <div className="text-3xl mb-2">Details</div>
//       <div className="p-4 rounded shadow-lg border bg-rose-200 border-rose-600">
//         <h1 className="text-gray-700 font-bold text-xl mb-2">
//           Something went wrong
//         </h1>
//         <p>{error.message}</p>
//       </div>
//     </div>
//   );
// };
