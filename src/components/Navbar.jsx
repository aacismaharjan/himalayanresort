import React, { Component } from "react";
import logo from "../assets/favicon.ico";
import { Link } from "react-router-dom";

// Toggle active items
function toggleActiveLinks() {
  let nav = document.getElementById("main-nav");
  let button = document.getElementById("navbar-toggler");
  let items = nav.children;
  for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function () {
      let active = nav.getElementsByClassName("active")[0];
      active.classList.remove("active");
      this.classList.add("active");
      if (document.body.clientWidth < 992) {
        button.click();
      }
    });
  }
}

export default class Navbar extends Component {
  componentDidMount() {
    toggleActiveLinks();
  }
  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
              loading="lazy"
            />
            <span className="brand-title">Himalayan Resort</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            id="navbar-toggler"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav" id="main-nav">
              <li className="nav-item active">
                <Link to="/" className="nav-link">
                  Explore
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/rooms" className="nav-link">
                  Rooms
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
