import "./App.css";
import "./ProfileCard.css";

function ProfileCard({ name, role, avatarUrl }: { name: string; role: string; avatarUrl?: string }) {
  return (
    <>
      <section className="card">
        <h2>{name}</h2>
        <p>{role}</p>
        {avatarUrl && <img src={avatarUrl} alt={name} />}
        <a href="#">Email</a>
        <a href="#">GitHub</a>
      </section>
    </>
  );
}

export default ProfileCard;
