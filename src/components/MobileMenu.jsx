import React from "react";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import {
  customButton,
  customSocialButton,
  customTransition,
} from "../utils/simplifiedTailwind";

export default function MobileMenu({ navMenu, setNavMenu, navLinks }) {
  const resumeLink =
    "https://drive.google.com/file/d/112Dal6n6-h7QMCzhI_duo_V1_NeLl369/view";
  // Social URL Links
  const socialLinks = [
    {
      name: "email",
      icon: <HiOutlineMail />,
      url: "mailto:noahfajarda1@gmail.com",
    },
    {
      name: "linkedin",
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/in/noah-fajarda",
    },
    {
      name: "github",
      icon: <FaGithub />,
      url: "https://github.com/noahfajarda",
    },
  ];

  return (
    <div
      className={`${
        navMenu ? "right-0" : "right-[-100%]"
      } fixed top-0 w-full max-w-xs h-screen z-25 py-10 px-6 flex flex-col bg-[#020617] border-l-2 border-sky-500 text-lg tracking-wider ${customTransition}`}
    >
      <div className="flex flex-col mt-4">
        {/* Navigation Links */}
        {navLinks.map((navLink) => (
          <a
            key={navLink.name}
            href={navLink.url}
            className={`py-2 px-3 flex items-center rounded-lg hover:bg-slate-800 font-semibold hover:text-sky-500 text-white ${customTransition}`}
            onClick={() => setNavMenu(false)}
          >
            <span className="pr-6 text-2xl text-gray-400">{navLink.icon}</span>
            {navLink.name}
          </a>
        ))}
        {/* Resume Link */}
        <div className="my-4 py-4 flex flex-col border-y border-gray-500/30">
          <a href={resumeLink} target="_blank" rel="noreferrer">
            <button
              className={`py-2 px-4 w-full rounded-full bg-sky-500 text-white hover:bg-sky-800 ${customTransition}`}
            >
              Resume
            </button>
          </a>
        </div>
        <div className="flex justify-evenly">
          {/* Social Links */}
          {socialLinks.map((socialLink) => (
            <a
              key={socialLink.name}
              href={socialLink.url}
              target="_blank"
              rel="noreferrer"
              className={`${customSocialButton}`}
            >
              {socialLink.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
