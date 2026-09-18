import "./App.css";
import "./ProfileCard.css";
import SkillBadge from "./SkillBadge";
import { useState } from "react";

function ProfileCard({
  name,
  role,
  avatarUrl,
}: {
  name: string;
  role: string;
  avatarUrl?: string;
}) {
  const [counter, setCounter] = useState(0);
  let skills = [
    { id: 1, label: "JavaScript" },
    { id: 2, label: "React" },
    { id: 3, label: "TypeScript" },
    { id: 4, label: "Node.js" },
    { id: 5, label: "Express" },
    { id: 6, label: "MongoDB" },
    { id: 7, label: "HTML" },
    { id: 8, label: "CSS" },
    { id: 9, label: "Git" },
    { id: 10, label: "Docker" },
  ];

  return (
    <>
      <section className="card">
        <h2>{name}</h2>
        <p>{role}</p>
        {avatarUrl && <img src={avatarUrl} alt={name} />}
        <a href="#">Email</a>
        <a href="#">GitHub</a>
      </section>
      <section className="skills">
        {skills.map((skill) => (
          <SkillBadge key={skill.id} id={skill.id} label={skill.label} />
        ))}
      </section>
      <button
        className="like-btn"
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        {counter} Likes
      </button>
    </>
  );
}

export default ProfileCard;
