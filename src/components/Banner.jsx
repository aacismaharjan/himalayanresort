import React from "react";

// Banner component - Displays title & subtitle
const Banner = ({ title, subtitle, children }) => {
  return (
    <div className="row">
      <div className="col-md-12">
        <section className="banner mx-auto">
          <h1 className="banner-title">{title}</h1>
          <hr className="line" />
          {subtitle && <h4 className="banner-subtitle">{subtitle}</h4>}
          {children}
        </section>
      </div>
    </div>
  );
};

export default Banner;
