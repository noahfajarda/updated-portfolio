import { motion } from "framer-motion";
import {
  customGradientText,
  customTransition,
  sectionStyling,
} from "../utils/simplifiedTailwind";

export default function Experience() {
  const paragraphTextColor = "sm:text-lg text-gray-300";
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
            Experience
          </h2>
          <h3 className="text-3xl md:text-5xl text-center font-bold">
            An overview of my recent positions
          </h3>
        </motion.div>

        {/* Work Experience List Container */}
        <ul className="flex flex-col gap-8 py-10">
          <motion.li
            initial={{
              y: 20,
              opacity: 0,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ type: "tween", ease: "easeOut", duration: 1 }}
            className="w-full flex flex-col lg:flex-row"
          >
            <div className="w-full">
              <h4
                className={`flex flex-wrap text-2xl md:text-3xl font-bold tracking-wide text-sky-500 group-hover:text-sky-700 ${customTransition} underline-offset-4 justify-center text-center`}
              >
                Full-Stack Software Engineering Manager
              </h4>
              <p className={`${paragraphTextColor} text-center`}>The Net VR</p>
              <p className={`${paragraphTextColor} text-center`}>
                Location: Remote
              </p>
              <p className={`${paragraphTextColor} text-center`}>
                Feb 2023 - Present
              </p>
              <ul className="p-5 list-disc text-lg">
                <li>
                  Established wider use of isomorphic React.js and Node.js for
                  web applications, resulting in ~25% faster load times
                </li>
                <li>
                  Architected robust RESTful APIs and implemented a MongoDB
                  database, enhancing data processing efficiency by 30%
                </li>
                <li>
                  Spearheaded the initiation and setup of a full-stack MERN
                  project to develop the official website
                </li>
              </ul>
            </div>
          </motion.li>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <motion.li
            initial={{
              y: 20,
              opacity: 0,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ type: "tween", ease: "easeOut", duration: 1 }}
            className="w-full flex flex-col lg:flex-row"
          >
            <div className="w-full">
              <h4
                className={`flex flex-wrap text-2xl md:text-3xl font-bold tracking-wide text-sky-500 group-hover:text-sky-700 ${customTransition} underline-offset-4 justify-center text-center`}
              >
                Software Development Engineer
              </h4>
              <p className={`${paragraphTextColor} text-center`}>
                Thaddeus Resource Center
              </p>
              <p className={`${paragraphTextColor} text-center`}>
                Location: Remote
              </p>
              <p className={`${paragraphTextColor} text-center`}>
                June 2023 - Present
              </p>
              <ul className="p-5 list-disc text-lg">
                <li>
                  Developed and launched the company's flagship website using
                  Next.js and React.js, ensuring a dynamic and user-centric
                  online platform
                </li>
                <li>
                  Designed 10+ React Native pages for official IOS and Android
                  application and implemented Socket.io to integrate real-time
                  chat support
                </li>
                <li>
                  Standardized UI component uniformity, resulting in ~20%
                  improvement in overall user satisfaction and engagement
                </li>
              </ul>
            </div>
          </motion.li>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <motion.li
            initial={{
              y: 20,
              opacity: 0,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ type: "tween", ease: "easeOut", duration: 1 }}
            className="w-full flex flex-col lg:flex-row"
          >
            <div className="w-full">
              <h4
                className={`flex flex-wrap text-2xl md:text-3xl font-bold tracking-wide text-sky-500 group-hover:text-sky-700 ${customTransition} underline-offset-4 justify-center text-center`}
              >
                Primary Software Development Manager
              </h4>
              <p className={`${paragraphTextColor} text-center`}>T1 Nexus</p>
              <p className={`${paragraphTextColor} text-center`}>
                Location: Santa Clara
              </p>
              <p className={`${paragraphTextColor} text-center`}>
                July 2020 - March 2023
              </p>
              <ul className="p-5 list-disc text-lg">
                <li>
                  Implemented a new inventory tracking system using R and
                  RStudio for data analysis, increasing operational efficiency
                  by 30%
                </li>
                <li>
                  Coded/shipped transceivers using C++ to various financial and
                  software companies (i.e. Bloomberg, GrayBar)
                </li>
                <li>
                  Helped migrate ~80% of systems operations to FINALE inventory
                  software, including product, vendor, & customer information
                </li>
              </ul>
            </div>
          </motion.li>
        </ul>
      </div>
    </section>
  );
}
