import LikeButton from "./LikeButton.tsx";
import Card from "./ui/Card.tsx";
type ProfileCardProps = {
  name: string;
  role: string;
  avatarUrl?: string;
};
export default function ProfileCard({
  name,
  role,
  avatarUrl,
}: ProfileCardProps) {
  return (
    <Card>
      {avatarUrl && <img src={avatarUrl} alt={name} width={96} />}
      <h2>{name}</h2>
      <p>{role}</p>
      <LikeButton />
    </Card>
  );
}
