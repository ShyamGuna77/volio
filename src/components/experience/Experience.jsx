import { SectionHeader } from "../util/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "FreeLance",
    position: "Frontend Developer",
    time: "2024",
    location: "Remote",
    description:
      "I developed a e-commerce platform for a client, using React and Next.js for the frontend and integrating a secure payment gateway. I implemented Full Authentication, admin area, review system, featured projects, sorting, search filters, user profiles, image uploading & more . Also helped make it look prettier.",
    tech: [
      "Next Js",
      "React",
      "TypeScript",
      "Prisma",
      "Git",
      "GitHub",
      "Tailwind",
      "Zod",
      "PostgresSql",
    ],
  },
];
