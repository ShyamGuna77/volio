import Link from "next/link";
import React from "react";
import { SiCodepen, SiGithub, SiLinkedin, SiX } from "react-icons/si";
import { OutlineButton } from "../buttons/OutlineButton";

export const Header = () => {
  return (
    <header className="h-[72px] px-4 flex items-center justify-between sticky top-0 z-20 bg-zinc-900/50 backdrop-blur-md">
      <MyLinks />
      <OutlineButton onClick={() => window.open("/Shyam RESUME FRONTEND.pdf")}>
        My Resume
      </OutlineButton>
    </header>
  );
};

export const MyLinks = () => (
  <div className="flex items-center text-lg gap-4">
    <Link
      className="text-zinc-300 hover:text-indigo-300 transition-colors"
      href="https://www.linkedin.com/in/shyamguna77/"
      target="_blank"
      rel="nofollow"
    >
      <SiLinkedin />
    </Link>
    <Link
      className="text-zinc-300 hover:text-indigo-300 transition-colors"
      href="https://github.com/ShyamGuna77"
      target="_blank"
      rel="nofollow"
    >
      <SiGithub />
    </Link>
    <Link
      className="text-zinc-300 hover:text-indigo-300 transition-colors"
      href="https://x.com/shy7712"
      target="_blank"
      rel="nofollow"
    >
      <SiX />
    </Link>
    <Link
      className="text-zinc-300 hover:text-indigo-300 transition-colors"
      href="https://codesandbox.io/u/gshyamprasad2001"
      target="_blank"
      rel="nofollow"
    >
      <SiCodepen />
    </Link>
  </div>
);
