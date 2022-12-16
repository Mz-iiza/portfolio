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
        <h3> JUNIOR DEV</h3>
      </div>

      <ul className='service__list'>
        <li>
          <BiCheck className='service__list-icon' />
          <p>Managing all aspects of the CMS. </p>
        </li>
        <li>
          <BiCheck className='service__list-icon' />
          <p>Wordpress website both backend and frontend development.</p>
        </li>
        <li>
          <BiCheck className='service__list-icon' />
          <p>User experience and site architecture. </p>
        </li>
        <li>
          <BiCheck className='service__list-icon' />
          <p>Managing the domain and email services </p>
        </li>
        <li>
          <BiCheck className='service__list-icon' />
          <p>Monitored website performance and handled troubleshooting. </p>
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
          <p>Designing user interfaces and navigation menus. </p>
        </li>
        <li>
          <BiCheck className='service__list-icon' />
          <p>Writing and reviewing code for sites, typically HTML, CSS, JavaScript or React Js. </p>
        </li>
        <li>
          <BiCheck className='service__list-icon' />
          <p>Integrating multimedia content onto a site. </p>
        </li>
        <li>
          <BiCheck className='service__list-icon' />
          <p>Collaborating with designers, developers, and stakeholders and Testing web applications. </p>
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