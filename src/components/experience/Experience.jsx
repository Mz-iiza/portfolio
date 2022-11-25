import React from "react";
import "./experience.css";
import { HiShieldCheck } from "react-icons/hi";

const experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <HiShieldCheck className='experience__details-icon'/>

              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <HiShieldCheck className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <HiShieldCheck className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <HiShieldCheck className='experience__details-icon' />
              <div>
                <h4>React Js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <HiShieldCheck className='experience__details-icon'/>
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/*END OF FRONTEND */}

        <div className="experience__wordpress">
          <h3> WORDPRESS</h3>
          <div className="experience__content">
            <article className="experience__details">
              <HiShieldCheck className='experience__details-icon'/>

              <div>
                <h4>The CMS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <HiShieldCheck className='experience__details-icon'/>
              <div>
                <h4>frontend </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <HiShieldCheck className='experience__details-icon'/>
              <div>
                <h4>Backend</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <HiShieldCheck className='experience__details-icon'/>
              <div>
                <h4>User experience</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <HiShieldCheck className='experience__details-icon'/>
              <div>
                <h4>Site architecture</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <HiShieldCheck className='experience__details-icon'/>
              <div>
                <h4>Domain services</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <HiShieldCheck className='experience__details-icon'/>
              <div>
                <h4>Email services</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <HiShieldCheck className='experience__details-icon'/>
              <div>
                <h4>Troubleshooting </h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <HiShieldCheck className='experience__details-icon'/>
              <div>
                <h4>Monitored website performance</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default experience;
