import React from "react";
import "./about.css";
import MEE from "../../assets/mee.jpg";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import { TbWriting} from "react-icons/tb";

const About = () => {
  return (

    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={MEE} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ year of Working</small>
            </article>
          
            <article className="about__card">
              <TbWriting className="about__icon" />
              <h5>Articles</h5>
              <small>5+ Completed</small>
            </article>

          <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>

          <p>
          I am solution oriented and zealous about the job, a software engineer with an understanding of web development process, 
          including design, development and deployment. Ready to team-up
          with existing staff and work with the available facilities in order to attain
          organizational goals and objectives.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  
  );
};

export default About;
