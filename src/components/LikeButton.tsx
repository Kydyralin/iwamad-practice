import { useLikes } from "../context/LikesContext.tsx";
import "./App.css";

export default function LikeButton() {
  const { likes, addLike } = useLikes();

  return (
    <button type="button" onClick={addLike}>
      $ {likes}
    </button>
  );
}
