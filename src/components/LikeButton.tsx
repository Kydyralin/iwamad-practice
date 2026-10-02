import { useLikes } from "../context/LikesContext.tsx";
import Button from "./ui/Button.tsx";

export default function LikeButton() {
  const { likes, addLike } = useLikes();

  return (
    <Button onClick={addLike} aria-label={`Like (${likes} likes)`}>
      ♥ {likes}
    </Button>
  );
}
