import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import {
  customGradientText,
  sectionStyling,
} from "../utils/simplifiedTailwind";

export default function Work() {
  // Project List for Work section
  const projectList = [
    {
      title: "Synqly",
      image: "synqly.png",
      description: `Synqly is a social media application bootstrapped with Next.js, offering users a platform to share their thoughts and clips through interactive posts or synqlets. Synqly allows for communities, profiles, and so much more!`,
      tech: [
        "Next.js",
        "React",
        "Redux",
        "Tailwind CSS",
        "MongoDB",
        "Clerk Authentication",
        "Zod",
      ],
      projectLink: "https://synqly.vercel.app",
      githubLink: "https://github.com/noahfajarda/Synqly",
    },
    {
      title: "Snapz",
      image: "snapz.png",
      description: `Snapz is a social media application built on the MERN stack, offering users a platform to showcase their memories through snapshots, short clips, and interactive posts. With features like following users and embedded comments, Snapz provides a creative space for individuals to share memorable moments with other like-minded individuals.`,
      tech: [
        "Express",
        "React",
        "REST APIs",
        "Tailwind CSS",
        "JWT",
        "Material UI",
        "Bcrypt",
        "NodeMailer",
      ],
      projectLink: "https://snapz.herokuapp.com/",
      githubLink: "https://github.com/noahfajarda/snapz",
    },
    {
      title: "Juke Joint",
      image: "juke-joint.png",
      description: `Juke Joint is a full-stack media consumption application and social platform that enables users to search for songs, musical artists, and albums, create accounts, and add selected songs to a personal or community playlist, all of which is stored in a SQL database. Additionally, users can leave comments and like songs to share their feedback with others. Users can also discover new musical artists with an auto-generated search.`,
      tech: [
        "Node",
        "MySQL",
        "REST APIs",
        "Sequelize",
        "Handlebars",
        "MVC",
        "Spotify API",
      ],
      projectLink: "https://juke-joint.herokuapp.com/login",
      githubLink: "https://github.com/noahfajarda/Juke-Joint-Project",
    },
    {
      title: "Weather Dashboard",
      image: "weather-dashboard.png",
      description: `Weather Dashboard is a web application that can display the current weather & 5-day forecast for a given city. Weather is displayed using information from the openweather api and the temperature, humidity, & wind speed were the pieces of data that were extracted, compiled, and displayed for each day.`,
      tech: [
        "HTML",
        "CSS",
        "JavaScript",
        "jQuery",
        "Moment.js",
        "Bootstrap",
        "OpenWeather API",
      ],
      projectLink: "https://noahfajarda.github.io/06-Weather-Dashboard/",
      githubLink: "https://github.com/noahfajarda/06-Weather-Dashboard",
    },
    {
      title: "Work Day Scheduler",
      image: "work-day-scheduler.png",
      description: `Work Day Scheduler allows users to manage a list of tasks to do for a given day. Users can input given tasks for their day within the description of time blocks from 9am to 5pm and have the option to save them.`,
      tech: ["HTML", "CSS", "JavaScript", "Moment.js"],
      projectLink: "https://noahfajarda.github.io/05-Work-Day-Scheduler/",
      githubLink: "https://github.com/noahfajarda/05-Work-Day-Scheduler",
    },
    {
      title: "Urban Info",
      image: "urban-info.png",
      description: `Urban Info is an application that allows users to explore over 200 of the world's major urban areas and discover its latest information regarding population, business, healthcare, and more! Search for an urban area to view its statistics and refer back to it through its saved information.`,
      tech: ["HTML", "CSS", "JavaScript", "Python", "Bootstrap", "JQuery"],
      projectLink: "https://noahfajarda.github.io/Urban-Info/",
      githubLink: "https://github.com/noahfajarda/Urban-Info",
    },
  ];

  return (
    <section id="work" className={`${sectionStyling}`}>
      {/* Content Container */}
      <div className="mx-auto w-full max-w-[1280px] flex flex-col">
        {/* Section Title */}
        <motion.div
          initial={{
            y: 20,
            opacity: 0,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: "tween", ease: "easeOut", duration: 1 }}
          className="mb-12 md:mb-24"
        >
          <h2
            className={`mb-4 text-3xl md:text-4xl text-center uppercase ${customGradientText} tracking-widest font-semibold`}
          >
            Work
          </h2>
          <h3 className="text-3xl md:text-5xl text-center font-bold">
            A selection of my latest web development projects
          </h3>
        </motion.div>

        {/* Project List Container */}
        <ul className="flex flex-col space-y-12 md:space-y-36">
          {/* Every odd index, reverse project screenshot and info */}
          {projectList.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </ul>
      </div>
    </section>
  );
}
