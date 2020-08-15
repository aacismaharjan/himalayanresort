import React, { Component } from "react";
import DefaultImg from "../assets/images/room-1.jpeg";
import { Link } from "react-router-dom";

export default class Room extends Component {
  state = {};

  render() {
    let { name, price, images, slug } = this.props.room;

    let thumbnail = images[0];
    slug = `/rooms/${slug}`;

    return (
      <Link to={slug} className="room">
        <div className="img-container">
          <div className="thumbnail-container">
            <img
              src={thumbnail || DefaultImg}
              alt={name}
              className="thumbnail"
            />
          </div>
          <div className="price-tag">
            <p>$ {price}</p>
            <span>per night</span>
          </div>
          <button className="btn btn-secondary btn-room px-4">Details</button>
        </div>
        <div className="room-title">{name}</div>
      </Link>
    );
  }
}
