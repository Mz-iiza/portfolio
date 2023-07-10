import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
    <h5>What I Offer</h5>
   <h2>Services</h2> 

   <div className="container services__container">
    <article className="service">
      <div className="service__head">
        <h3> SOFTWARE DEVELOPER</h3>
      </div>

      <ul className='service__list'>
        <li>
          <BiCheck className='service__list-icon' />
          <p>Managing all aspects of the product lifecycle management PLM. </p>
        </li>
        <li>
          <BiCheck className='service__list-icon' />
          <p>Excellent understanding of software methodologies, including Agile and Scrum.</p>
        </li>
        <li>
          <BiCheck className='service__list-icon' />
          <p>Eperience in version control technologies such as Git & understanding of collaborative workflow. </p>
        </li>
        <li>
          <BiCheck className='service__list-icon' />
          <p>User experience and site architecture. </p>
        </li>
        <li>
          <BiCheck className='service__list-icon' />
          <p>Effective communication, teamwork, problem-solving and adaptabbility to a team environment. </p>
        </li>
      </ul>

    </article>
    {/*END OF 1 */}

    <article className="service">
      <div className="service__head">
        <h3>WEB DEVELOPMENT</h3>
        <h3>Frontend</h3>
      </div>

      <ul className='service__list'>
        <li>
          <BiCheck className='service__list-icon' />
          <p>Writing and reviewing code for sites, typically HTML, CSS, JavaScript, React Js, Vue Js, Next Js & TypeScript. </p>
        </li>
        <li>
          <BiCheck className='service__list-icon' />
          <p>Integrating multimedia content onto a site, configuring API end points and handling authentication. </p>
        </li>
        <li>
          <BiCheck className='service__list-icon' />
          <p>Collaborating with designers, developers, and stakeholders on project plans and technical execution. </p>
        </li>
        <li>
          <BiCheck className='service__list-icon' />
          <p>Troubleshooting problems with performance or user experience. </p>
        </li>
      </ul>

    </article>
    {/*END FO WEB DEVELOPMENT */}

    <article className="service">
      <div className="service__head">
        <h3>TECH SUPPORT</h3>
      </div>

      <ul className='service__list'>
        <li>
          <BiCheck className='service__list-icon' />
          <p>Identifying hardware and software solutions. </p>
        </li>
        <li>
          <BiCheck className='service__list-icon' />
          <p>Troubleshooting technical issues. </p>
        </li>
        <li>
          <BiCheck className='service__list-icon' />
          <p>Speaking to customers to quickly get to the root of their problem. </p>
        </li>
        <li>
          <BiCheck className='service__list-icon' />
          <p>Installing and configuring hardware and software. </p>
        </li>
        <li>
          <BiCheck className='service__list-icon' />
          <p>Testing and evaluating new technologies, Supporting the roll-out of new applications. </p>
        </li>
        <li>
          <BiCheck className='service__list-icon' />
          <p>Conducting electrical safety checks on equipment. </p>
        </li>
        
      </ul>

    </article>
    {/*END OF TECH SUPPORT*/}
   </div>
   </section>
  )
}

export default Services