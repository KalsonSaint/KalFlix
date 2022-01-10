import { CommentEntry } from "./CommentEntry.types";
import { MovieCharacter } from "./MovieCharacter.types";

export type Movie = {
  id: string;
  title: string;
  original_title: string;
  description: string;
  image: string;
  movie_banner: string;
  people: string[];
  characters?: MovieCharacter[];
  comments?: CommentEntry[];
};
