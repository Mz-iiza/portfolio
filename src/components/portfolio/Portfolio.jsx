import React from 'react'
import './portfolio.css'
import IMG2 from '../../assets/portfolio2.png'
import IMG1 from '../../assets/portfolio1.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG6 from '../../assets/portfolio6.png'
import IMG7 from '../../assets/portfolio7.png'


//DATA ARRAY
const data = [
  {
    id:1,
    image:IMG6,
    title:'Store',
    github: 'https://github.com/Mz-iiza/question3',
    demo: 'https://fake-auth-1.web.app/',
  },
  {
    id:2,
    image:IMG3,
    title:'CareFinder',
    github: 'https://github.com/Mz-iiza/carefinder',
    demo: 'https://carefinder.live/',
  },
  {
    id:3,
    image:IMG7,
    title:'Spokes Network',
    github: 'https://github.com/Mz-iiza',
    demo: 'https://spokes-network.com/',
  },
  {
    id:4,
    image:IMG4,
    title:'Counter 2.0',
    github: 'https://github.com/Mz-iiza/exam-counter-altschool',
    demo: 'https://counter-2.netlify.app/',
  },
  {
    id:5,
    image:IMG2,
    title:'Bows and butter, body butter',
    github: 'https://github.com/Mz-iiza/bows-butter',
    demo: 'https://bowsandbutter.netlify.app/',
  },
  {
    id:6,
    image:IMG1,
    title:'Nour Education',
    github: 'https://github.com',
    demo: 'https://noureducation.com/temp/',
  },
]
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
       {
        data.map(({id, image, title, github, demo}) =>{
          return (
            <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
          <a href={github} className='btn' target='_blank'>Github</a>
          <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
          )
        })
       } 

      </div>
    </section>
  )
}

export default Portfolio