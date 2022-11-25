import React from "react";
import "./testimonials.css";
import Avt1 from "../../assets/avata1.jpeg";
import Avt2 from "../../assets/avata2.jpg";
import Avt4 from "../../assets/avata4.jpg";



const data = [
  {
    avata: Avt1,
    name: "Oyiza Iiza",
    review: "She's the DEAL!",
  },

  {
    avata: Avt2,
    name: "SLY KEL",
    review: "She's the BEST",
  },

  {
    avata: Avt4,
    name: "LEO KEN",
    review: "She's GOLD",
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
