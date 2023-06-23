import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

export default function Work() {
  const customGradientText =
    "bg-clip-text text-transparent bg-gradient-to-t from-pink-500 to-violet-500";

  // Project List for Work section
  const projectList = [
    {
      title: "CodeFlow",
      image: "codeflow.png",
      description: `CodeFlow is a social media application built on the MERN stack, offering developers a platform to showcase their coding projects through interactive posts. With features like friend requests and threaded comments, CodeFlow provides a creative space for developers to engage in discussions with other like-minded individuals.`,
      tech: ["MERN", "GraphQL", "JWT", "Tagify", "Bootstrap"],
      projectLink: "https://code-flow-app.herokuapp.com/",
      githubLink: "https://github.com/cnohilly/codeflow",
    },
    {
      title: "Watch It Later",
      image: "watch-it-later.png",
      description: `Watch It Later is a full-stack application that enables users to search for movies and TV shows, create accounts, and add their selected content to a personal watchlist, all of which is stored in a SQL database. Additionally, users can leave comments and rate the movies to share their feedback with others.`,
      tech: [
        "Node",
        "MySQL",
        "Sequelize",
        "Handlebars",
        "Bulma",
        "MVC",
        "TMDB API",
      ],
      projectLink: "https://watch-it-later.herokuapp.com/",
      githubLink: "https://github.com/cnohilly/watch-it-later",
    },
    {
      title: "Sakura Study",
      image: "sakura-study.png",
      description: `Sakura Study is a language learning app that offers fun and interactive quizzes to help users study Japanese. Inspired by Duolingo, Sakura Study provides a convenient and engaging way to practice hiragana, katakana, kanji, and vocabulary.`,
      tech: ["MERN", "Tailwind CSS", "GraphQL", "JWT", "Redux"],
      projectLink: "https://sakurastudy.herokuapp.com/",
      githubLink: "https://github.com/kt946/japanese-quiz-mern-app",
    },
    {
      title: "Movie TV Watchlist",
      image: "movie-tv-watchlist.png",
      description: `Movie TV Watchlist is a web application that allows users to search for movies and TV shows through TMDB's API. Users can easily add their favorite content to a personal watchlist, which is conveniently saved in the browser's local storage for easy access.`,
      tech: ["HTML", "CSS", "JavaScript", "Bulma", "TMDB API"],
      projectLink: "https://cnohilly.github.io/movie-tv-watchlist/",
      githubLink: "https://github.com/cnohilly/movie-tv-watchlist",
    },
    {
      title: "Shop-Shop",
      image: "shop-shop.png",
      description: `Shop-Shop is an e-commerce application built on the MERN stack, which leverages Redux to manage global state. With the ability to create accounts, users can easily add products to their shopping cart and checkout using the secure Stripe API.`,
      tech: ["MERN", "JavaScript", "GraphQL", "JWT", "Stripe", "Redux"],
      projectLink: "https://shop-shop-75043.herokuapp.com",
      githubLink: "https://github.com/kt946/awesome-shop-shop-redux",
    },
    {
      title: "Pizza Hunt",
      image: "pizza-hunt.png",
      description: `Pizza Hunt is an application that provides users with a platform to discover and explore custom pizza recipes. Utilizing MongoDB, Pizza Hunt stores an extensive collection of recipes, along with user comments and feedback, to help users make informed decisions when selecting toppings for their perfect pizza.`,
      tech: ["Node", "Express", "NoSQL", "MongoDB", "Mongoose"],
      projectLink: "https://pizza-hunt-13648.herokuapp.com/",
      githubLink: "https://github.com/kt946/pizza-hunt",
    },
  ];

  return (
    <section id="work" className="px-4 py-12 scroll-mt-16">
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
            Work
          </h2>
          <h3 className="text-3xl md:text-5xl text-center font-bold">
            A selection of my latest web development projects
          </h3>
        </motion.div>

        {/* Project List Container */}
        <ul className="flex flex-col space-y-12 md:space-y-36">
          {/* Every odd index, reverse project screenshot and info */}
          {projectList.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </ul>
      </div>
    </section>
  );
}
