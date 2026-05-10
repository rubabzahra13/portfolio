'use client';

import { motion } from "framer-motion";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiPython, 
  SiMongodb, 
  SiPostgresql, 
  SiGit, 
  SiDocker, 
  SiFigma 
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "Framer Motion", icon: TbBrandFramerMotion, color: "#0055FF" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
        { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      ],
    },
  ];

  return (
    <section id="skills" className="relative overflow-x-clip border-b border-border bg-elevated py-20 sm:py-24">
      <div className="relative z-10 mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="mb-12 text-center sm:mb-16"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-text-muted">Capabilities</p>
          <h2 className="mb-4 text-balance text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl md:text-4xl">
            Skills & technologies
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-base text-text-secondary sm:text-lg">
            Stacks we use daily to design, build, and operate production systems.
          </p>
        </motion.div>

        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            viewport={{ once: true }}
            className="mb-16 last:mb-0"
          >
            <div className="mb-6 flex min-w-0 items-center gap-3 sm:mb-8">
              <h3 className="shrink-0 text-lg font-semibold text-text-primary sm:text-xl">{category.title}</h3>
              <div className="h-px flex-1 bg-border" />
            </div>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 sm:gap-3 md:grid-cols-3 md:gap-3 lg:grid-cols-5">
              {category.skills.map((skill, skillIndex) => {
                const IconComponent = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: skillIndex * 0.04, duration: 0.35 }}
                    viewport={{ once: true }}
                    className="group min-w-0 rounded-lg border border-border bg-background p-3 text-center shadow-card transition-colors hover:border-border-strong sm:p-5"
                  >
                    <IconComponent
                      className="mx-auto mb-2 h-8 w-8 transition-opacity group-hover:opacity-90 sm:mb-2.5 sm:h-9 sm:w-9"
                      style={{ color: skill.color }}
                    />
                    <p className="break-words text-xs font-medium text-text-secondary hyphens-auto sm:text-sm">
                      {skill.name}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;