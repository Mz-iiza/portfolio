import React from 'react'
import './portfolio.css'
import IMG2 from '../../assets/portfolio2.png'
import IMG1 from '../../assets/portfolio1.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio5.png'


//DATA ARRAY
const data = [
  {
    id:1,
    image:IMG1,
    title:'Nour Education',
    github: 'https://github.com/Mz-iiza',
    demo: 'https://noureducation.com/',
  },
  {
    id:2,
    image:IMG2,
    title:'Bows and butter, body butter website',
    github: 'https://github.com/Mz-iiza',
    demo: 'https://bowsandbutter.netlify.app/',
  },
  {
    id:3,
    image:IMG3,
    title:'Counter',
    github: 'https://github.com/Mz-iiza',
    demo: 'https://cerulean-mandazi-6c7412.netlify.app/',
  },
  {
    id:4,
    image:IMG4,
    title:'Education',
    github: 'https://github.com/Mz-iiza',
    demo: 'https://noureducation.com/',
  },
  {
    id:5,
    image:IMG1,
    title:'Bows and butter, body butter website',
    github: 'https://github.com',
    demo: 'https://bowsandbutter.netlify.app/',
  },
  {
    id:6,
    image:IMG1,
    title:'Bows and butter, body butter website',
    github: 'https://github.com',
    demo: 'https://bowsandbutter.netlify.app/',
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