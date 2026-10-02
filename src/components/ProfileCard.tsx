import LikeButton from "./LikeButton.tsx";

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
    <section className="card">
      {avatarUrl && <img src={avatarUrl} alt={name} width={96} />}
      <h2>{name}</h2>
      <p>{role}</p>
      <LikeButton />
    </section>
  );
}
