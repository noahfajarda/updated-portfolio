import React, { useState } from "react";
// nav link icons
import { FaList } from "react-icons/fa";
import { HiOutlineHome } from "react-icons/hi";
import { HiUserCircle, HiOutlineFolder } from "react-icons/hi2";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import { motion } from "framer-motion";
import MobileMenu from "./MobileMenu";
import { customTransition } from "../utils/simplifiedTailwind";

export default function Header() {
  const [navMenu, setNavMenu] = useState(false);

  const LogoImage = "logo2.svg";

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

  const resumeLink =
    "https://drive.google.com/file/d/1WVVeyKDIkyPVNJW-rq5l2z70S1M15Dq1/view?usp=sharing";

  const navLinks = [
    {
      name: "Home",
      icon: <HiOutlineHome />,
      url: "#home",
    },
    {
      name: "About",
      icon: <HiUserCircle />,
      url: "#about",
    },
    {
      name: "Skills",
      icon: <FaList />,
      url: "#skills",
    },
    {
      name: "Work",
      icon: <HiOutlineFolder />,
      url: "#work",
    },
    {
      name: "Contact",
      icon: <BsFillPersonLinesFill />,
      url: "#contact",
    },
  ];

  return (
    <motion.header
      initial={{
        y: -60,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{ type: "tween", ease: "easeOut", duration: 0.8 }}
      className="bg-black/80 sticky top-0 z-20 w-full min-h-[61px] py-3 md:py-4 px-4 text-base border-b border-gray-300/20 backdrop-blur"
    >
      {/* Navbar */}
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a
          href="/"
          aria-label="home"
          className={`py-1 md:p-0 hover:opacity-70 ${customTransition}`}
          onClick={() => window.location.replace("/")}
        >
          <img
            src={`/${LogoImage}`}
            alt="Portfolio Logo"
            width={0}
            height={0}
            className="w-auto max-w-xs h-7 scale-150"
          />
        </a>
        <ul className="hidden md:flex flex-row items-center gap-6 tracking-wider font-semibold">
          {/* Navigation Links */}
          {navLinks.map((navLink) => (
            <li key={navLink.name}>
              <a
                href={navLink.url}
                className={`text-white hover:text-primary ${customTransition}`}
              >
                {navLink.name}
              </a>
            </li>
          ))}

          {/* Resume Link */}
          <li>
            <a href={resumeLink} target="_blank" rel="noreferrer">
              <button className="py-2 px-4 rounded-full btn-secondary-style">
                Resume
              </button>
            </a>
          </li>

          {/* Social Links */}
          {socialLinks.map((socialLink) => (
            <li key={socialLink.name}>
              <a
                href={socialLink.url}
                target="_blank"
                rel="noreferrer"
                className={`text-2xl text-gray-400 hover:text-primary ${customTransition}`}
              >
                {socialLink.icon}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className={`hamburger hamburger--spin pt-2 z-30 md:hidden ${
            navMenu && "is-active"
          }`}
          onClick={() => setNavMenu(!navMenu)}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>

        {/* Mobile Menu */}
        <div className={`fixed md:hidden ${navMenu ? "inset-0" : ""}`}>
          {/* Overlay */}
          <div
            className={`${
              navMenu
                ? "w-full h-screen bg-black/70 backdrop-blur-sm" +
                  customTransition
                : ""
            }`}
            onClick={() => setNavMenu(!navMenu)}
          />
          {/* Menu */}
          <MobileMenu
            navMenu={navMenu}
            setNavMenu={setNavMenu}
            navLinks={navLinks}
          />
        </div>
      </nav>
    </motion.header>
  );
}
