import { Link } from "remix";
import { MovieCharacter } from "~/types";

type CharacterListProps = {
  characters?: MovieCharacter[];
};

const CharacterList = ({ characters }: CharacterListProps) => {
  return (
    <div className="flex-1 max-w-md">
      <h3 className="text-3xl">Characters</h3>

      <ul className="flex flex-col space-y-3 my-3">
        {characters?.map((character) => (
          <li>
            <Link
              to={`characters/${character.id}`}
              className="w-full hover:underline p-3 rounded border border-slate-400 inline-block"
            >
              {character.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;
