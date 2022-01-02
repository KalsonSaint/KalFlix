import { MetaFunction } from "remix";

export const meta: MetaFunction = () => {
  return { title: "KalFlix", description: "Sample Page" };
};

const FilmsPage = () => {
  return <div>Movies</div>;
};

export default FilmsPage;
