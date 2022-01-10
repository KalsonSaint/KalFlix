import { CommentEntry } from "./../types/CommentEntry.types";

export const getComments = async (movieId: string) => {
  const response = await fetch(
    `http://localhost:3001/comments?movieId=${movieId}`
  );

  return response.json();
};

export const addComment = async (comment: CommentEntry) => {
  const response = await fetch(`http://localhost:3001/comments`, {
    method: "POST",
    body: JSON.stringify(comment),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
};
