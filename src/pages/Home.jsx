import React, { Component } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRoom from "../components/FeaturedRoom";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Hero>
          <Banner
            title="Luxurious Rooms"
            subtitle="Deluxe Rooms Starting At $299"
          >
            <Link to="/rooms" className="btn btn-primary">
              Our Rooms
            </Link>
          </Banner>
        </Hero>
        <Services />
        <FeaturedRoom />
      </div>
    );
  }
}
