import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import { HiCode, HiDatabase } from "react-icons/hi";
import { customGradientText } from "../utils/simplifiedTailwind";

export default function Skills() {
  // icon, title, summary, and skills list for Skill Cards
  const skillCardData = [
    // for front-end
    {
      id: "frontEndSkills",
      icon: <HiCode />,
      title: "Front-End Development",
      summary:
        "I am passionate about bringing ideas to life and creating visually stunning projects using a variety of modern technologies and frameworks.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "jQuery",
        "Responsive Design",
        "Bootstrap",
        "Bulma",
        "React",
        "Redux",
        "Tailwind CSS",
        "Next.js",
        "Framer Motion",
      ],
    },
    // for back-end
    {
      id: "backEndSkills",
      icon: <HiDatabase />,
      title: "Back-End Development",
      summary:
        "I enjoy finding solutions to complex problems and developing powerful server-side code with a focus on efficiency and security.",
      skills: [
        "Git",
        "Github",
        "JSON",
        "AJAX",
        "Node.js",
        "NPM",
        "Express.js",
        "REST",
        "SQL",
        "MySQL",
        "Sequelize",
        "MVC",
        "Handlebars",
        "NoSQL",
        "MongoDB",
        "Mongoose",
        "GraphQL",
        "MERN",
      ],
    },
  ];

  return (
    <section id="skills" className="px-4 py-12 scroll-mt-16 mb-14">
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
            Skills
          </h2>
          <h3 className="text-3xl md:text-5xl text-center font-bold">
            Crafting digital solutions with style
          </h3>
        </motion.div>

        <motion.p
          initial={{
            y: 20,
            opacity: 0,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: "tween", ease: "easeOut", duration: 1 }}
          className="mb-12 md:mb-24 mx-auto max-w-lg text-lg md:text-xl text-center text-gray-300"
        >
          Web development is a never-ending quest, and I&apos;m always striving
          to improve myself, one skill set at a time.
        </motion.p>

        {/* Skills Container */}
        <motion.div
          initial={{
            y: 20,
            opacity: 0,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "tween", ease: "easeOut", duration: 1 }}
          className="w-full max-w-full flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8"
        >
          {skillCardData.map((skillCard) => (
            <SkillCard key={skillCard.id} skillCard={skillCard} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
