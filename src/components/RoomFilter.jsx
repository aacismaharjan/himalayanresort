import React, { Component, useContext } from "react";
import { RoomContext } from "../context";
import Title from "./Title";

const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

const RoomFilter = ({ rooms }) => {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    breakfast,
    pets,
    minPrice,
    maxPrice,
  } = context;

  let types = getUnique(rooms, "type");
  types = ["all", ...types];
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  let people = getUnique(rooms, "capacity");
  people = people.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  return (
    <div className="room-filter">
      <div className="container">
        <Title>Search Rooms</Title>
        <div className="row room-parameter">
          <div className="col-md-3">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Room Type</label>
              <select
                className="form-control"
                name="type"
                id="type"
                value={type}
                onChange={handleChange}
              >
                {types}
              </select>
            </div>
          </div>

          <div className="col-md-3">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Guests</label>
              <select
                className="form-control"
                name="capacity"
                id="capacity"
                value={capacity}
                onChange={handleChange}
              >
                {people}
              </select>
            </div>
          </div>

          <div className="col-md-3">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">
                Price <strong>${price}</strong>
              </label>
              <input
                type="range"
                name="price"
                style={{
                  display: "block",
                  width: "100%",
                  padding: "0.75em 0",
                }}
                min={minPrice}
                max={maxPrice}
                id="price"
                value={price}
                onChange={handleChange}
                className="form-range"
              />
            </div>
          </div>

          <div className="col-md-3">
            <div className="form-group">
              <label htmlFor="breakfast">Checkbox</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={breakfast}
                  id="breakfast"
                  name="breakfast"
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="breakfast">
                  Free Breakfast
                </label>
              </div>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={pets}
                  id="pets"
                  name="pets"
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="pets">
                  Pets
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomFilter;
