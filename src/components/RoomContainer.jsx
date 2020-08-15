import React from "react";
import { withRoomConsumer } from "../context";
import Loading from "./Loading";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";

function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;

  if (loading) return <Loading />;

  return (
    <div>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </div>
  );
}

export default withRoomConsumer(RoomContainer);
