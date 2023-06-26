import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import {
  customTransition,
  customGradientText,
  sectionStyling,
} from "../utils/simplifiedTailwind";

// Bio paragraphs for About section
const bioParagraphs = [
  {
    id: "paragraph1",
    text: `Hi everyone! My name is Noah and I'm a full-stack software developer from the Bay Area with a B.A. in Health Sciences from the University of California, Irvine and I have a passion for technology, creativity, and learning. I've completed a program and received a certificate in Full-Stack Web Development from the University of California, Irvine's Coding Bootcamp.`,
  },
  {
    id: "paragraph2",
    text: `I undertook various projects, where I gained hands-on experience in designing and implementing solutions to real-world problems. I also had the opportunity to collaborate with diverse teams, fostering effective communication and teamwork skills. I enjoy working in a collaborative environment, where ideas can be shared and refined to achieve innovative and efficient solutions.`,
  },
  {
    id: "paragraph3",
    text: `I'm eager to demonstrate my newly acquired skills by building innovative applications that help me grow as a developer and provide users with immersive digital experiences. I constantly seek opportunities to expand my knowledge and stay updated on emerging technologies, frameworks, and best practices. I believe that continuous learning is vital in an industry that is constantly evolving.`,
  },
  {
    id: "paragraph4",
    text: `When I'm not coding on my laptop or skimming through documentation, I enjoy movies, playing piano, guitar, and basketball, listening to music, and learning new skills and languages.`,
  },
  {
    id: "paragraph5",
    text: `As a passionate and dedicated individual with a strong interest in technology, I am thrilled to embark on my journey in the world of software development.`,
  },
];

// Profile Image
const profileImage = "profile.png";

export default function About() {
  return (
    <section id="about" className={`${sectionStyling} mb-14`}>
      <div className="mx-auto w-full max-w-[1280px] flex flex-col">
        <motion.div
          initial={{
            y: 20,
            opacity: 0,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          // viewport == triggers on scroll
          // once == when it hits viewport, it will remain "whileInView"
          // amount == % of element that needs to be in viewport
          viewport={{ once: true, amount: 0.2 }}
          // tween == duration based animation
          transition={{ type: "tween", ease: "easeOut", duration: 1 }}
          className={`${sectionStyling}`}
          style={{ zIndex: 20 }}
        >
          <h2
            className={`mb-4 text-3xl md:text-4xl text-center uppercase tracking-widest font-semibold ${customGradientText}`}
          >
            About
          </h2>
          <h3 className="text-3xl md:text-5xl text-center font-bold">
            Me, Myself, and I
          </h3>
        </motion.div>

        <div className="w-full flex flex-col md:flex-row items-center md:items-start gap-12">
          {/* Bio */}
          <motion.div
            initial={{
              x: -50,
              opacity: 0,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: "tween", ease: "easeOut", duration: 1 }}
            className="w-full flex flex-col paragraph-text-color gap-4"
          >
            {/* iterate through bio paragraphs */}
            {bioParagraphs.map((paragraph) => (
              <p key={paragraph.id} className={"text-sm sm:text-lg"}>
                {paragraph.text}
              </p>
            ))}
            <a
              href="#work"
              className={`w-fit my-2 flex flex-wrap text-sky-400 font-semibold group ${customTransition} duration-300 hover:underline hover:text-sky-400 underline-offset-4`}
            >
              Check out some of my latest projects.
              <span
                className={`ml-1 mt-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 ${customTransition}`}
              >
                <HiArrowRight />
              </span>
            </a>
          </motion.div>

          {/* Image Container */}
          <motion.div
            initial={{
              x: 50,
              opacity: 0,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: "tween", ease: "easeOut", duration: 1 }}
            className="mx-auto md:mx-0 order-first md:order-last"
          >
            <img
              src={`/${profileImage}`}
              alt="Portfolio portrait"
              width={384}
              height={384}
              className="w-[256px] h-[256px] md:min-w-[320px] md:h-[320px] lg:h-[384px] lg:min-w-[384px] rounded-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
