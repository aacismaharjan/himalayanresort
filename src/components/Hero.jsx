import React from "react";
import DEFAULT_HERO_IMAGE from "../assets/images/defaultBcg.jpeg";

const Hero = ({ children, mini, source }) => {
  return (
    <section
      className={mini ? "hero mini-hero" : "hero"}
      style={{ backgroundImage: `url(${source || DEFAULT_HERO_IMAGE})` }}
    >
      <div className="container">{children}</div>
    </section>
  );
};

export default Hero;
