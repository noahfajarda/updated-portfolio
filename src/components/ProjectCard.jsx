import React from "react";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ project }) {
  const customTransition = "transition-all ease-in-out duration-300";
  const paragraphTextColor = "sm:text-lg text-gray-300";
  const projectLinkBtn =
    "transition-all ease-in-out duration-300 py-2 px-4 w-full sm:w-fit rounded-full font-semibold flex justify-center items-center gap-2";
  const btnPrimaryStyle =
    "transition-all ease-in-out duration-300 border border-primary bg-primary hover:bg-primary-shade hover:border-primary-shade text-white";

  return (
    <motion.li
      initial={{
        y: 20,
        opacity: 0,
      }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ type: "tween", ease: "easeOut", duration: 1 }}
      className="w-full flex flex-col lg:flex-row lg:gap-12 lg:odd:flex-row-reverse"
    >
      {/* Project Image */}
      <a
        href={project.projectLink}
        target="_blank"
        rel="noreferrer"
        className="lg:max-w-2xl relative flex w-full rounded-xl overflow-hidden group"
      >
        <img
          src={`/assets/${project.image}`}
          alt={`Project screenshot of ${project.title}`}
          width={1920}
          height={1080}
          className="w-full h-full object-cover group-hover:scale-125 transition ease-in-out duration-500"
        ></img>
        {/* Overlay */}
        <p className="absolute z-[1] w-full h-full flex flex-col justify-center items-center text-2xl md:text-3xl font-semibold text-primary opacity-0 group-hover:opacity-100 transition ease-in-out duration-500">
          <span className="flex">
            View Project
            <span className="ml-2 mt-1">
              <HiArrowRight />
            </span>
          </span>
        </p>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black opacity-0 group-hover:opacity-80 transition ease-in-out duration-500" />
      </a>
      {/* Project Info */}
      <div className="w-full my-2 flex flex-col item justify-center">
        {/* Project Title */}
        <h4 className="w-fit my-2 group">
          <a
            href={project.projectLink}
            className={`flex flex-wrap text-2xl md:text-3xl font-bold tracking-wide group-hover:text-primary ${customTransition} hover:underline underline-offset-4`}
          >
            {project.title}
            <span
              className={`ml-1 mt-1 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-2 ${customTransition}`}
            >
              <HiArrowRight />
            </span>
          </a>
        </h4>
        {/* Project Description */}
        <p className={`${paragraphTextColor}`}>{project.description}</p>
        {/* Project Technologies */}
        <ul className="my-4 flex flex-wrap text-gray-400 gap-3">
          {project.tech.map((techItem) => (
            <li
              key={techItem}
              className="px-3 py-1 border border-gray-400 rounded-lg"
            >
              {techItem}
            </li>
          ))}
        </ul>

        {/* Project Links */}
        <div className="flex gap-2">
          {/* Deployed Link */}
          <a
            href={project.projectLink}
            className={`${projectLinkBtn} ${btnPrimaryStyle}`}
          >
            View Project <HiArrowRight className="hidden sm:inline-flex" />
          </a>
          {/* Github Link */}
          <a
            href={project.githubLink}
            className={`${projectLinkBtn} ${btnPrimaryStyle}`}
          >
            Visit Github <FaGithub className="hidden sm:inline-flex" />
          </a>
        </div>
      </div>
    </motion.li>
  );
}
