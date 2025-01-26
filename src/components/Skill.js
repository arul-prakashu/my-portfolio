import React from 'react';
import { FaReact, FaNodeJs, FaGit, FaGithub, FaCss3Alt } from 'react-icons/fa';
import { SiJavascript, SiRedux, SiHtml5, SiWebpack, SiBabel, SiJest } from 'react-icons/si';
import { MdApi } from 'react-icons/md';
import './Skill.css';

function Skills() {
  return (
    <section className="skills">
      <div className="skills-container">
        {/* Primary Technologies */}
        <div className="skill-box">
          <FaReact className="skill-icon" />
          <span>React</span>
        </div>
        <div className="skill-box">
          <SiJavascript className="skill-icon" />
          <span>JavaScript</span>
        </div>
        <div className="skill-box">
          <SiRedux className="skill-icon" />
          <span>Redux</span>
        </div>

        {/* Secondary Technologies */}
        <div className="skill-box">
          <FaNodeJs className="skill-icon" />
          <span>Node js</span>
        </div>
        <div className="skill-box">
          <SiHtml5 className="skill-icon" />
          <span>HTML5</span>
        </div>
        <div className="skill-box">
          <FaCss3Alt className="skill-icon" />
          <span>CSS3</span>
        </div>
        <div className="skill-box">
          <MdApi className="skill-icon" />
          <span>REST APIs</span>
        </div>

        {/* Version Control */}
        <div className="skill-box">
          <FaGit className="skill-icon" />
          <span>Git</span>
        </div>
        <div className="skill-box">
          <FaGithub className="skill-icon" />
          <span>GitHub</span>
        </div>
        <div className="skill-box">
          <SiWebpack className="skill-icon" />
          <span>Webpack</span>
        </div>
        <div className="skill-box">
          <SiBabel className="skill-icon" />
          <span>Babel</span>
        </div>

        {/* Other */}
        <div className="skill-box">
          <SiJest className="skill-icon" />
          <span>Unit Testing</span>
        </div>
      </div>
    </section>
  );
}

export default Skills;
