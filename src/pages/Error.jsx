import React, { Component } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";

export default class Error extends Component {
  render() {
    return (
      <Hero>
        <Banner title="404" subtitle="Page Not Found!">
          <Link to="/rooms" className="btn btn-primary">
            Return Home
          </Link>
        </Banner>
      </Hero>
    );
  }
}
