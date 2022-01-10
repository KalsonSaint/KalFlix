import { CommentEntry } from "~/types";

type CommentListProps = { movieId: string; comments: CommentEntry[] };

const CommentsList = ({ movieId, comments }: CommentListProps) => {
  return (
    <div>
      <h4 className="text-xl mb-2 text-teal-800">Community Comments</h4>
      <div className="flex flex-col space-y-4 my-3">
        {comments.map((comment) => (
          <div className="p-4 rounded border border-slate-400">
            <div className="text-gray-700 font-bold text-xl mb-2">
              {comment.name}
            </div>
            <p className="text-gray-700">{comment.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentsList;
