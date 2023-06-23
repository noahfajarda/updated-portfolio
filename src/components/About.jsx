import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import {
  customTransition,
  customGradientText,
} from "../utils/simplifiedTailwind";

// Bio paragraphs for About section
const bioParagraphs = [
  {
    id: "paragraph1",
    text: `Hi everyone! My name is Kyle and I'm a full stack web developer with a B.A. in Psychology from Rutgers University and a passion for technology, creativity, and learning. I've completed a certificate in Full Stack Web Development from the Rutgers Coding Bootcamp.`,
  },
  {
    id: "paragraph2",
    text: `As a quick learner and versatile problem-solver, I'm able to collaborate with teams to develop projects with simple, elegant designs and robust databases. I'm eager to demonstrate my newly acquired skills and build innovative applications that help me grow as a developer and provide users with immersive digital experiences.`,
  },
  {
    id: "paragraph3",
    text: `When I'm not coding on my laptop, skimming through documentation, or searching Google for solutions to various issues, I enjoy cooking, movies, video games, playing guitar, and learning new skills and languages.`,
  },
  {
    id: "paragraph4",
    text: `And yes, I do like blue. Blue is cool.`,
  },
];

// Profile Image
const profileImage = "profile.png";

export default function About() {
  return (
    <section id="about" className="px-4 py-12 scroll-mt-16 mb-14">
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
          className="px-4 py-12 scroll-mt-16"
        >
          <h2
            className={`mb-4 text-3xl md:text-4xl text-center uppercase custom-gradient-text tracking-widest font-semibold ${customGradientText}`}
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
              <p key={paragraph.id}>{paragraph.text}</p>
            ))}
            <a
              href="#work"
              className={`w-fit my-2 flex flex-wrap text-primary font-semibold group ${customTransition} duration-300 hover:underline underline-offset-4`}
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
