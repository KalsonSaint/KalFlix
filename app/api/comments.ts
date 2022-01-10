export const getComments = async (movieId: string) => {
  const response = await fetch(
    `http://localhost:3001/comments?movieId=${movieId}`
  );

  return response.json();
};
