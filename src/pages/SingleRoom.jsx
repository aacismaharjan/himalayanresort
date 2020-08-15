import React, { Component } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import defaultImg from "../assets/images/room-1.jpeg";
import { RoomContext } from "../context";

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultImg,
    };
  }

  static contextType = RoomContext;

  render() {
    const { getRoom, loading } = this.context;
    if (loading)
      return (
        <div className="py-5 my-3">
          <Loading />
        </div>
      );

    const room = getRoom(this.state.slug);

    if (!room) {
      return (
        <div className="container text-center p-5 my-5">
          <div className="alert alert-light" role="alert">
            <h2>No such rooms could be found!</h2>
            <Link to="/rooms" className="btn btn-primary my-3">
              Back to rooms
            </Link>
          </div>
        </div>
      );
    }

    const {
      name,
      images,
      description,
      price,
      size,
      capacity,
      pets,
      breakfast,
      extras,
    } = room;

    const [thumbnail, ...showcase] = images;

    return (
      <section className="single-room">
        <Hero mini source={thumbnail || defaultImg}>
          <Banner title={`${name} Room`}>
            <Link to="/rooms" className="btn btn-primary">
              Back to Rooms
            </Link>
          </Banner>
        </Hero>

        <section className="room-img-showcase">
          <div className="container">
            <div className="row">
              {showcase.map((image, index) => (
                <div className="col-md-4 my-2" key={index}>
                  <img src={image || defaultImg} alt="Showcase " />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="room-desc">
          <div className="container">
            <div className="row">
              <div className="col-md-7 details">
                <h3>Details</h3>
                <p>{description}</p>
              </div>

              <div className="col-md-5 info">
                <h3>Info</h3>
                <h6>Price: $ {price}</h6>
                <h6>Size: {size} SQFT</h6>
                <h6>
                  Max Capacity:{" "}
                  {capacity > 1 ? `${capacity} people` : `${capacity} person`}
                </h6>
                <h6>{pets ? "Pets Allowed" : "No Pets Allowed"}</h6>
                <h6>{breakfast && "Free Breakfast Included"}</h6>
              </div>
            </div>
          </div>
        </section>

        <section className="room-extra">
          <div className="container">
            <h4>Extras</h4>
            <ul>
              {extras.map((item, index) => (
                <li key={index}>- {item}</li>
              ))}
            </ul>
          </div>
        </section>
      </section>
    );
  }
}
