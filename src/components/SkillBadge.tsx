import { type Skill } from "../data/skills";

function SkillBadge({ skill }: { skill: Skill }) {
  return (
    <>
      <div className="skill-badge" key={skill.id}>
        {skill.label}
      </div>
    </>
  );
}

export default SkillBadge;
