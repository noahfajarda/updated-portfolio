import React from "react";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { customButton, customTransition } from "../utils/simplifiedTailwind";

export default function MobileMenu({ navMenu, setNavMenu, navLinks }) {
  const resumeLink =
    "https://www.linkedin.com/in/noah-fajarda/overlay/1635528997591/single-media-viewer/?profileId=ACoAADRi9VUBqCtvzRDc6m5Gw1VptpAsoClsVyI";
  // Social URL Links
  const socialLinks = [
    {
      name: "email",
      icon: <HiOutlineMail />,
      url: "mailto:ktang1151@gmail.com",
    },
    {
      name: "linkedin",
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/in/kyle-tang-",
    },
    {
      name: "github",
      icon: <FaGithub />,
      url: "https://github.com/kt946",
    },
  ];

  return (
    <div
      className={`${
        navMenu ? "right-0" : "right-[-100%]"
      } fixed top-0 w-full max-w-xs h-screen z-25 py-10 px-6 flex flex-col bg-[#020617] border-l-2 border-primary text-lg tracking-wider ${customTransition}`}
    >
      <div className="flex flex-col mt-4">
        {/* Navigation Links */}
        {navLinks.map((navLink) => (
          <a
            key={navLink.name}
            href={navLink.url}
            className={`py-2 px-3 flex items-center rounded-lg hover:bg-slate-800 font-semibold hover:text-primary text-white ${customTransition}`}
            onClick={() => setNavMenu(false)}
          >
            <span className="pr-6 text-2xl text-gray-400">{navLink.icon}</span>
            {navLink.name}
          </a>
        ))}
        {/* Resume Link */}
        <div className="my-4 py-4 flex flex-col border-y border-gray-500/30">
          <a
            href={resumeLink}
            className={`${customButton} items-center gap-2 btn-secondary-style text-white`}
          >
            Resume
          </a>
        </div>
        <div className="flex justify-evenly">
          {/* Social Links */}
          {socialLinks.map((socialLink) => (
            <a
              key={socialLink.name}
              href={socialLink.url}
              className="custom-social-btn"
            >
              {socialLink.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
