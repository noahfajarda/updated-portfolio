import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { AiOutlineLoading } from "react-icons/ai";
import { MdSend } from "react-icons/md";

export default function Contact() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);

  // function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // send form data using emailjs
    try {
      setLoading(true);
      // SEND EMAIL
      // await emailjs.sendForm(
      //   process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      //   process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      //   formRef.current!,
      //   process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      // );
      console.log("Email sent successfully");
      // formRef.current!.reset();
    } catch (error) {
      console.error(`Error sending email: 
      `);
      // ${(error as Error).message}
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="px-4 py-12 scroll-mt-16">
      {/* Content Container */}
      <div className="mx-auto w-full max-w-[1280px] flex flex-col">
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
          <h2 className="section-title">Contact</h2>
          <h3 className="section-subtitle">
            Let&apos;s build something incredible together!
          </h3>
        </motion.div>

        {/* Section Comment */}
        <motion.p
          initial={{
            y: 20,
            opacity: 0,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: "tween", ease: "easeOut", duration: 1 }}
          className="section-subtitle-2"
        >
          I&apos;m currently looking for full-time positions, but if you got an
          exciting opportunity you need help with or you just want to say hi,
          fill out this awesome contact form below or connect with me on social
          media!
        </motion.p>

        <div className="w-full">
          <motion.form
            initial={{
              y: 20,
              opacity: 0,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: "tween", ease: "easeOut", duration: 1 }}
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 mx-auto max-w-2xl text-gray-300 caret-primary focus:caret-primary"
          >
            {/* name and email fields */}
            {["name", "email"].map((type, idx) => (
              <div className="flex flex-col gap-1" key={idx}>
                <label className="uppercase md:text-md font-bold">
                  {type.toUpperCase()}
                </label>
                <input
                  className="p-3 rounded-md flex bg-zinc-900 outline-none border border-zinc-800 focus:border-primary text-white placeholder-gray-500 transition-all"
                  type={type == "name" ? "text" : "email"}
                  placeholder={type.toUpperCase()}
                  name={type}
                  required
                />
              </div>
            ))}

            {/* Message Field */}
            <div className="flex flex-col gap-1">
              <label className="uppercase md:text-md tracking-wider font-bold">
                Message
              </label>
              <textarea
                className="p-3 rounded-md flex bg-zinc-900 outline-none border border-zinc-800 focus:border-primary text-white placeholder-gray-500 transition-all"
                rows={6}
                placeholder="Message"
                name="message"
                required
              ></textarea>
            </div>

            {/* submit button */}

            <button type="submit" className="h-12 custom-btn btn-primary-style">
              {loading ? (
                <AiOutlineLoading className="animate-spin h-6 w-6" />
              ) : (
                <>
                  Submit
                  <MdSend />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
