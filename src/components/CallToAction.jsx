import React from "react";
import { motion } from "framer-motion";
import {
  customButton,
  customTransition,
  sectionStyling,
} from "../utils/simplifiedTailwind";

export default function CallToAction({
  message,
  buttonMessage,
  buttonIcon,
  linkURL,
}) {
  const btnPrimaryStyle = `${customTransition} hover:border-sky-500 bg-sky-500 text-black hover:bg-sky-600 hover:text-white`;
  const check = !linkURL.includes("#");

  return (
    <section className={`${sectionStyling} py-0 mb-14`}>
      {/* Content Container */}
      <motion.div
        initial={{
          y: 20,
          opacity: 0,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ type: "tween", ease: "easeOut", duration: 1 }}
        className="mx-auto p-6 md:py-12 w-full max-w-[1280px] flex flex-col justify-center items-center gap-6 text-center bg-slate-800 rounded-xl"
      >
        {/* Text */}
        <h3 className="text-xl md:text-3xl font-bold">{message}</h3>
        {/* Link */}
        {check ? (
          <a
            href={linkURL}
            target="_blank"
            rel="noreferrer"
            className={`${customButton} ${btnPrimaryStyle}`}
          >
            {buttonMessage}
            {buttonIcon}
          </a>
        ) : (
          <a href={linkURL}>
            <button className={`${customButton} ${btnPrimaryStyle}`}>
              {buttonMessage}
              {buttonIcon}
            </button>
          </a>
        )}
      </motion.div>
    </section>
  );
}
