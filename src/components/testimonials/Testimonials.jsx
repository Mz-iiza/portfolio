import React from "react";
import "./testimonials.css";
import Avt2 from "../../assets/avata2.jpg";
import Avt5 from "../../assets/avata5.jpeg";
import Avt6 from "../../assets/avata6.jpeg";



const data = [
  {
    avata: Avt5,
    name: " Oluwasetemi Ojo",
    review: "A key team player! demonstrated exceptional commitment to meating deadlines, ensuring the timely delivery of the project.",
  },

  {
    avata: Avt2,
    name: "Elion Commerce -CEO",
    review: "She effectively convey information, listen attentively, foster productive dialogue and facilitates smooth collaboration and decision-making",
  },

  {
    avata: Avt6,
    name: "Vanier Konamna",
    review: "her strong work ethics has consistently translated into delivering exceptional results.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        {data.map(({ avata, name, review }, index) => {
          return (
            <article key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avata} />
              </div>
              <h5 className="client__review">{name}</h5>
              <small className="client__review">{review}</small>
            </article>
          )
        })
        }
      </div>
    </section>
  );
};

export default Testimonials;
