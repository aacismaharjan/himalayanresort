import React, { Component } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import defaultImg from "../assets/images/room-1.jpeg";
import RoomContainer from "../components/RoomContainer";

export default class Rooms extends Component {
  render() {
    return (
      <React.Fragment>
        <Hero mini source={defaultImg}>
          <Banner title="Our Rooms">
            <Link to="/" className="btn btn-primary">
              Return Home
            </Link>
          </Banner>
        </Hero>
        <RoomContainer />
      </React.Fragment>
    );
  }
}
