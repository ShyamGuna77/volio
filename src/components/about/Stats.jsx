import { Chip } from "../util/Chip";
import Reveal from "../util/Reveal";
import { AiFillCode, AiFillSmile } from "react-icons/ai";

export const Stats = () => {
  return (
    <div className="relative">
      <Reveal>
        <div>
          <h4 className="flex items-center mb-6">
            <AiFillCode className="text-indigo-500 text-2xl" />
            <span className="font-bold ml-2">Things I know</span>
          </h4>
          <div className="flex flex-wrap gap-2 mb-12">
            <Chip>JavaScript</Chip>
            <Chip>TypeScript</Chip>
            <Chip>Recoil</Chip>
            <Chip>React</Chip>
            <Chip>Redux</Chip>
            <Chip>Next Js</Chip>
            <Chip>NodeJS</Chip>
            <Chip>GraphQL</Chip>
            <Chip>Express</Chip>
            <Chip>Framer motion</Chip>
            <Chip>Postgres</Chip>
            <Chip>MongoDB</Chip>
            <Chip>GitHub</Chip>
            <Chip>TailWind</Chip>
            <Chip>Java</Chip>
            <Chip>AWS</Chip>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div>
          <h4 className="flex items-center mb-6">
            <AiFillSmile className="text-indigo-500 text-2xl" />
            <span className="font-bold ml-2">Looking to Learn</span>
          </h4>
          <div className="flex flex-wrap gap-2 mb-12">
            <Chip>Rust</Chip>
            <Chip>Spring</Chip>
            <Chip>Figma</Chip>
            <Chip>Python</Chip>
            <Chip>FastAPI</Chip>
            <Chip>Or Maybe Dont Know</Chip>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
