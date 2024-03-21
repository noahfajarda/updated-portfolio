import "./App.css";
import About from "./components/About";
import { FaRegSmileWink } from "react-icons/fa";
import CallToAction from "./components/CallToAction";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Work from "./components/Work";
import { useEffect } from "react";
import Experience from "./components/Experience";

const containerVariants = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
    },
  },
};

// Resume URL link
const resumeLink =
  "https://drive.google.com/file/d/1Q1xD5mYJXnj5DgQXT9XPu1TFp5DMCPKA/view";

const resumeCTA = {
  message: `Want to see more of what I can do? Check out my resume.`,
  buttonMessage: "Download resume",
  buttonIcon: <HiOutlineDocumentDownload />,
  linkURL: resumeLink,
};

const contactCTA = {
  message: `Don't hesitate to get in touch and connect with me!`,
  buttonMessage: "Get in touch",
  buttonIcon: <FaRegSmileWink />,
  linkURL: "#contact",
};

function App() {
  // automatic scroll for link param
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const element = document.getElementById(id);
      element.scrollIntoView();
    }
  }, []);

  return (
    <div className="font-sans bg-[#0a0a0a] text-gray-100 h-screen z-0 overflow-y-auto overflow-x-hidden scroll-smooth scrollbar-firefox md:scrollbar">
      <Header resumeLink={resumeLink} />
      <Hero />
      <About />
      <CallToAction {...contactCTA} />
      <Skills />
      <CallToAction {...resumeCTA} />
      <Experience />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
