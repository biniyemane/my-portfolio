import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Profile Picture */}
        <div className="col-12 col-md-4 text-center mb-4 mb-md-0">
          <img 
            src="/profile.jpg" 
            alt="Profile" 
            className="profile-img img-fluid rounded-circle" 
          />
        </div>
        
        {/* Welcome Message */}
        <div className="col-12 col-md-8 text-center text-md-start">
          <h1 className="welcome-text">Welcome to My Portfolio</h1>
          <p className="about-text">I am a Software Developer specializing in full-stack web development.</p>
          <Link to="/about" className="btn btn-primary mt-3">Learn More About Me</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
