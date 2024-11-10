import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white text-center py-4">
      <p>&copy; 2024 My Portfolio | Built with React & Bootstrap</p>
      <div className="social-icons d-flex justify-content-center mt-3">
        <a 
          href="https://github.com/biniyemane" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white mx-3"
        >
          <FaGithub size={30} />
        </a>
        <a 
          href="https://linkedin.com/in/biniyam-yemane-berhane-52028356" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white mx-3"
        >
          <FaLinkedin size={30} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
