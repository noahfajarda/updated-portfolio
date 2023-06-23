import { useState, useRef, useReducer } from "react";
import { motion } from "framer-motion";
import { AiOutlineLoading } from "react-icons/ai";
import { MdSend } from "react-icons/md";
import { sendEmailToUser, sendEmailToMe } from "../utils/sendEmail";
import { customGradientText } from "../utils/simplifiedTailwind";

export default function Contact() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [state, dispatch] = useReducer(
    (state, action) => ({
      ...state,
      ...action,
    }),
    {
      name: "",
      email: "",
      message: "",
    }
  );

  // function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // send form data using emailjs
    try {
      setLoading(true);

      sendEmailToUser(state);
      sendEmailToMe(state);

      console.log("Email sent successfully");
      // formRef.current!.reset();
    } catch (error) {
      console.error(`Error sending email: ${error.message}`);
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
          <h2
            className={`mb-4 text-3xl md:text-4xl text-center uppercase ${customGradientText} tracking-widest font-semibold`}
          >
            Contact
          </h2>
          <h3 className="text-3xl md:text-5xl text-center font-bold">
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
          className="mb-12 md:mb-24 mx-auto max-w-lg text-lg md:text-xl text-center text-gray-300"
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
            {/* name field */}
            <div className="flex flex-col gap-1">
              <label className="uppercase md:text-md font-bold">Name</label>
              <input
                className="p-3 rounded-md flex bg-zinc-900 outline-none border border-zinc-800 focus:border-primary text-white placeholder-gray-500 transition-all"
                type="text"
                placeholder="Name"
                name="name"
                value={state.name}
                onChange={(e) => dispatch({ name: e.target.value })}
                required
              />
            </div>
            {/* email field */}
            <div className="flex flex-col gap-1">
              <label className="uppercase md:text-md font-bold">Email</label>
              <input
                className="p-3 rounded-md flex bg-zinc-900 outline-none border border-zinc-800 focus:border-primary text-white placeholder-gray-500 transition-all"
                type="text"
                placeholder="Email"
                name="email"
                value={state.email}
                onChange={(e) => dispatch({ email: e.target.value })}
                required
              />
            </div>
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
                value={state.message}
                onChange={(e) => dispatch({ message: e.target.value })}
                required
              ></textarea>
            </div>
            {/* submit button */}
            <button
              type="submit"
              className="h-12 custom-transition py-2 px-4 sm:py-3 sm:px-6 sm:text-lg rounded-full font-semibold flex justify-center items-center gap-2 btn-primary-style"
            >
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
