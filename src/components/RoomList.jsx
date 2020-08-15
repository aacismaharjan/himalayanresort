import React from "react";
import Room from "./Room";

export default function RoomList({ rooms }) {
  const sortedRooms = rooms;

  if (sortedRooms.length === 0) {
    return (
      <div className="container text-center p-5">
        <div className="alert alert-light" role="alert">
          <h2>No room match with your search parameter!</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="rooms">
      <div className="container">
        <div className="row">
          {sortedRooms.map((room, index) => {
            return (
              <div className="col-lg-3 my-3 col-md-6" key={index}>
                <Room room={room} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
