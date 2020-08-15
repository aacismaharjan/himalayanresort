import React, { Component } from "react";
import Title from "./Title";
import Room from "./Room";
import Loading from "./Loading";
import { RoomContext } from "../context";

class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    const { featuredRooms, loading, getRoom } = this.context;

    const rooms = featuredRooms.map((room, index) => {
      return (
        <div className="col-md-4" key={index}>
          <Room room={room} getRoom={getRoom} />
        </div>
      );
    });

    const loadingBox = (
      <div className="col-md-12">
        <Loading />
      </div>
    );

    return (
      <section className="featuredRoom">
        <div className="container">
          <Title>Featured Room</Title>
          <div className="row">{loading ? loadingBox : rooms}</div>
        </div>
      </section>
    );
  }
}

export default FeaturedRooms;
