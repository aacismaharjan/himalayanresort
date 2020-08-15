import React from "react";

const Banner = ({ title, subtitle, children }) => {
  return (
    <div className="row">
      <div className="col-md-12 m-auto d-flex justify-content-center">
        <section className="banner">
          <h1 className="banner-title">{title}</h1>
          <hr className="line" />
          <h4 className="banner-subtitle">{subtitle}</h4>
          {children}
        </section>
      </div>
    </div>
  );
};

export default Banner;
