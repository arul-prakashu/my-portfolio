import React from 'react';
import './Home.css'; // Make sure the CSS file is linked correctly
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa'; // Importing icons

function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <h3 className="intro-title">Hi, I’m Arul Prakash</h3>
        <p className="intro-text">Software Developer</p>
        <p className="intro-text">
          I’m a software developer with four years of hands-on experience in creating dynamic and innovative web applications. 
          My passion for technology is coupled with a strong foundation in both front-end and back-end development.
        </p>
        
        <div className="find-me-on">
          <p>FIND ME ON</p>
          <div className="social-links">
            <a href="https://www.linkedin.com" className="social-link">
              <FaLinkedin />
            </a>
            <a href="https://github.com" className="social-link">
              <FaGithub />
            </a>
            <a href="https://twitter.com" className="social-link">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com" className="social-link">
              <FaInstagram />
            </a>
          </div>
        </div>

        <a href="/path/to/your/resume.pdf" className="download-btn" download>
          Download Resume
        </a>
      </div>
    </section>
  );
}

export default Home;
