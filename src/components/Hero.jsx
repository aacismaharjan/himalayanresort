import React from "react";
import DEFAULT_HERO_IMAGE from "../assets/images/defaultBcg.jpeg";

// Gets the Default or Mini Hero
const GetHeroClasses = (isMiniHero) => {
  let heroClass = "hero";
  if (isMiniHero) heroClass += " mini-hero";
  return heroClass;
};

// Hero component
const Hero = ({ children, mini, source }) => {
  const image = source || DEFAULT_HERO_IMAGE;
  let heroStyles = { backgroundImage: `url(${image})` };

  return (
    <section className={GetHeroClasses(mini)} style={heroStyles}>
      <div className="container">{children}</div>
    </section>
  );
};

// Default values for Hero
Hero.defaultProps = {
  mini: false,
  source: DEFAULT_HERO_IMAGE,
};

export default Hero;
