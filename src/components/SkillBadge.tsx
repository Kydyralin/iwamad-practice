import type { Skill } from "../data/skills.ts";
import Tag from "./ui/Tag.tsx";
type SkillBadgeProps = { skill: Skill };
export default function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <li className="skill-badge">
      <Tag label={skill.label} />
    </li>
  );
}
