import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { customSocialButton } from "../utils/simplifiedTailwind";

export default function Footer() {
  const year = new Date().getFullYear();
  const devName = "Noah Fajarda";

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
      url: "https://www.linkedin.com/in/noah-fajarda/",
    },
    {
      name: "github",
      icon: <FaGithub />,
      url: "https://github.com/noahfajarda",
    },
  ];

  return (
    <footer id="footer" className="px-4">
      <div className="relative max-w-7xl mx-auto py-10 border-t border-slate-300/20 flex flex-col-reverse sm:flex-row justify-between items-center text-lg text-center">
        {/* Copyright */}
        <p>
          &copy; {year} {devName}. All rights reserved.
        </p>
        {/* Socials */}
        <ul className="flex items-center gap-6 mb-6 sm:mb-0">
          {/* Social Links */}
          {socialLinks.map((socialLink) => (
            <li key={socialLink.name} className="flex">
              <a
                href={socialLink.url}
                className={`${customSocialButton} ease-in-out duration-300`}
                target="_blank"
                rel="noreferrer"
              >
                {socialLink.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
