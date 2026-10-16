import SkillBadge from "../components/SkillBadge.tsx";

export default function SkillsPage() {
  const skills = [
    { id: 1, label: "JavaScript" },
    { id: 2, label: "TypeScript" },
    { id: 3, label: "React" },
    { id: 4, label: "Node.js" },
    { id: 5, label: "Express" },
    { id: 6, label: "MongoDB" },
  ]
  
  return (
    <section>
      <h1>Skills</h1>
      {skills.length === 0 ? (
        <p>No skills listed yet.</p>
      ) : (
        <ul>
          {skills.map((skill) => (
            <SkillBadge key={skill.id} skill={skill} />
          ))}
        </ul>
      )}
    </section>
  );
}
