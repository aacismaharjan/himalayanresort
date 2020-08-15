import React, { Component } from "react";
import Client from "./Contentful";

const RoomContext = React.createContext();

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
  };

  getRoom = (slug) => {
    const room = this.state.rooms.find((room) => room.slug === slug);
    return room;
  };

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState(
      {
        [name]: value,
      },
      this.filterRoom
    );
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }

  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "beachResortRoomExample",
      });
      const rooms = this.formatData(response.items);
      const featuredRooms = rooms.filter((room) => room.featured === true);
      const maxPrice = Math.max(...rooms.map((item) => item.price));
      const maxSize = Math.max(...rooms.map((item) => item.size));
      const minPrice = Math.min(...rooms.map((item) => item.price));

      this.setState({
        rooms,
        featuredRooms,
        sortedRooms: rooms,
        price: maxPrice,
        maxPrice,
        minPrice,
        maxSize,
        loading: false,
      });
    } catch (error) {
      console.log(error);
    }
  };

  filterRoom = () => {
    let { rooms, type, capacity, price, breakfast, pets } = this.state;

    // All the rooms
    let tempRooms = [...rooms];

    // Transform value
    capacity = parseInt(capacity);
    price = parseInt(price);

    // Filter by "type"
    if (type !== "all") {
      tempRooms = tempRooms.filter((room) => room.type === type);
    }

    // Filter by "capacity"
    if (capacity !== 1) {
      tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
    }

    // Filter by "Price"
    tempRooms = tempRooms.filter((room) => room.price <= price);

    // Filter by breakfast
    if (breakfast) {
      tempRooms = tempRooms.filter((room) => room.breakfast === true);
    }

    // Filter by "Pets"
    if (pets) {
      tempRooms = tempRooms.filter((room) => room.pets === true);
    }

    // Change state
    this.setState({
      sortedRooms: tempRooms,
    });
  };

  formatData(rooms) {
    let tempRooms = rooms.map((room) => {
      let id = room.sys.id;
      let images = room.fields.images.map((image) => image.fields.file.url);
      room = { ...room.fields, images, id };
      return room;
    });
    return tempRooms;
  }
}

const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {(value) => <Component {...props} context={value}></Component>}
      </RoomConsumer>
    );
  };
}

export { RoomProvider, RoomContext, RoomConsumer };
