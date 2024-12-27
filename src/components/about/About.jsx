import { AiOutlineArrowRight } from "react-icons/ai";
import { SectionHeader } from "../util/SectionHeader";
import Reveal from "../util/Reveal";
import { MyLinks } from "../nav/Header";
import { Stats } from "./Stats";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8">
        <div className="space-y-4">
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              <span className="bg-indigo-500 text-white py-2 px-3 rounded font-bold mr-1 float-left text-2xl">
                H
              </span>
              ey! I&apos;m Shyam,ECE (never liked it) graduate with a deep
              passion for technology and problem-solving.I've always loved
              building things, and that's what led me to the world of software
              development.
            </p>
          </Reveal>
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              I’m proficient in Next.js, React, Java, and Database Management
              Systems (DBMS), with a strong focus on solving complex problems
              through Data Structures and Algorithms (DSA). I also have
              experience building APIs and working with backend technologies.
            </p>
          </Reveal>
          
          <Reveal>
            <p className="leading-relaxed text-zinc-300">
              Looking ahead, I'm excited to learn Spring Boot and DevOps, as I
              continue to grow my skill set and take on new challenges. I'm
              always eager to explore new technologies, build innovative
              solutions, and collaborate with others to make an impact. Let's
              connect and create something amazing together!, let&apos;s connect
              🔗
            </p>
          </Reveal>
          <Reveal>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4 text-sm text-indigo-300">
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
