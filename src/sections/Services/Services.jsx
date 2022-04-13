import React from "react";
import { BsPhone, BsLaptop } from "react-icons/bs";
import { FaPaintBrush } from "react-icons/fa";
const Services = () => {
  return (
    <section className="services">
      <div className="service__heading">
        <h1>Services</h1>
        <p>
          At AltoLeap we specialize in transforming your ideas into something
          unique. We do this by reimagining, redefining, and constantly
          reinventing the way we look at human interactions and business models.
          We are borderline obsessed with making amazing products. Full Stop.
        </p>
      </div>

      <div className="services__service">
        <BsPhone />
        <h3>Mobile</h3>
        <p>
          We deliver holistic mobile app development solutions that not only
          include customer-centric designs but also robust back-end systems.
        </p>
      </div>
      <div className="services__service">
        <FaPaintBrush />
        <h3>Design</h3>
        <p>
          We will work alongside you to build and refine your new or existing
          brand identity in order to continue to expand your brand loyalty. We
          are enthusiastic about helping you build, nurture and evolve your
          business.
        </p>
      </div>
      <div className="services__service">
        <BsLaptop />
        <h3>Web</h3>
        <p>
          We work relentlessly to provide a unique-offering that focuses on
          creating a unique website or web application that is sure to stand out
          from the rest.
        </p>
      </div>
    </section>
  );
};

export default Services;
