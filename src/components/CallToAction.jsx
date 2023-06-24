import React from "react";
import { motion } from "framer-motion";
import { customTransition, sectionStyling } from "../utils/simplifiedTailwind";

export default function CallToAction({
  message,
  buttonMessage,
  buttonIcon,
  linkURL,
}) {
  const custombtn = `${customTransition} py-2 px-4 sm:py-3 sm:px-6 sm:text-lg rounded-full font-semibold flex justify-center items-center gap-2`;
  const btnPrimaryStyle = `${customTransition} border border-primary bg-primary hover:bg-primary-shade hover:border-primary-shade text-white`;
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
            className={`${custombtn} ${btnPrimaryStyle}`}
          >
            {buttonMessage}
            {buttonIcon}
          </a>
        ) : (
          <a href={linkURL}>
            <button className={`${custombtn} ${btnPrimaryStyle}`}>
              {buttonMessage}
              {buttonIcon}
            </button>
          </a>
        )}
      </motion.div>
    </section>
  );
}
