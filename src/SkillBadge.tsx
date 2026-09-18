
function SkillBadge({ id, label }: { id: number; label: string }) {
  return (
    <>
      <div className="skill-badge" key={id}>
        {label}
      </div>
    </>
  );
}

export default SkillBadge;
