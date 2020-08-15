import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info:
          "Lorem ipsum dolar sit amet consectetur aadipiscing elit. Magni, corposris!",
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "Lorem ipsum dolar sit amet consectetur aadipiscing elit. Magni, corposris!",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info:
          "Lorem ipsum dolar sit amet consectetur aadipiscing elit. Magni, corposris!",
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info:
          "Lorem ipsum dolar sit amet consectetur aadipiscing elit. Magni, corposris!",
      },
    ],
  };

  render() {
    const { services } = this.state;
    return (
      <section id="services">
        <div className="container">
          <Title>Services</Title>
          <div className="row justify-content-center">
            {services.map((service, index) => (
              <div className="col-lg-3 col-md-6 col-sm-6" key={index}>
                <div className="item">
                  <span className="icon">{service.icon}</span>
                  <h5 className="item-title">{service.title}</h5>
                  <p className="item-desc">{service.info}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}
