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
  "https://drive.google.com/file/d/1WVVeyKDIkyPVNJW-rq5l2z70S1M15Dq1/view";

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
  return (
    <div className="font-sans bg-[#0a0a0a] text-gray-100 h-screen z-0 overflow-y-auto overflow-x-hidden scroll-smooth scrollbar-firefox md:scrollbar">
      <Header />
      <Hero />
      <About />
      <CallToAction {...contactCTA} />
      <Skills />
      <CallToAction {...resumeCTA} />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
