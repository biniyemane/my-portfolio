import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: "Currency Converter",
    description: `This is a currency converter application built using Node.js, Express, 
    Sequelize, and SQLite. The application allows users to convert between different currencies 
    and view historical rates. This project demonstrates how to containerize a Node.js application 
    using Docker.`,
    link: "https://github.com/biniyemane/sequelize-currency"
  },
  {
    title: "Tic-Tac-Toe",
    description: `This project is a classic implementation of the Tic-Tac-Toe game using React. 
    The game features an interactive user interface where two players can take turns marking the 
    squares on a 3x3 grid. It is designed to dynamically update the board based on user actions, 
    and the game automatically determines the winner or detects a draw.`,
    link: "https://github.com/biniyemane/tic-tac-toe/tree/main/my-Game"
  },
  {
    title: "Tweet/Post Blogger App",
    description: `This project is a simple tweet/post application built with HTML, CSS, and 
    JavaScript. The application allows users to create, read, update, and delete posts or tweets. 
    It also includes additional features like search functionality and persistent data storage 
    using the browser's local storage. The design is responsive and mobile-friendly.`,
    link: "https://github.com/biniyemane/CTAC-FS102-Agile-Project"
  }
];

const Projects = () => {
  return (
    <div className="container my-5">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default Projects;
