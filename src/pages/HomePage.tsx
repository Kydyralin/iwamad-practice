import ProfileCard from "../components/ProfileCard.tsx";

export default function HomePage({
  name,
  role,
}: {
  name: string;
  role: string;
}) {
  return <ProfileCard name={name} role={role} />;
}
