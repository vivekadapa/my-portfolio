import React from "react";
import Tech from "./Tech";

const skills = {
  "Programming": ["C", "Java", "JavaScript", "TypeScript", "Python", "SQL"],
  "Libraries & frameworks": ["React", "Redux", "Next.js", "Angular", "Tailwind", "Node.js", "Socket.io", "Bull MQ"],
  "Tools & platforms": ["Git", "Docker", "Linux", "AWS", "Postman", "Jira"],
  "Databases": ["MongoDB", "PostgreSQL", "Redis"],
};

const Skills = () => {
  return (
    <div className="space-y-6">
      {Object.entries(skills).map(([group, items]) => (
        <div key={group}>
          <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-2 capitalize">
            {group}
          </h3>
          <div className="flex flex-wrap gap-2">
            {items.map((s, index) => (
              <Tech key={index} title={s} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
