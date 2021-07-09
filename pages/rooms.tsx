import BannerCard from "../components/card/BannerCard";
import BannerContainer from "../components/container/BannerContainer";
import Head from "next/head";
import ServiceContainer from "../components/container/ServiceContainer";
import { Grid } from "@material-ui/core";
import RoomCard from "../components/card/RoomCard";
import { server } from "../config";

const Rooms = (props: any) => {
  return (
    <div>
      <Head>
        <title>Our Rooms | Resort</title>
        <meta
          name="description"
          content="Resort website near kathmandu valley."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BannerContainer image="/assets/images/room-1.jpeg">
        <BannerCard title="Our Rooms" href="/">
          Return Home
        </BannerCard>
      </BannerContainer>

      <ServiceContainer title="Search Rooms">
        <Grid container justify="center" alignItems="center" spacing={4}>
          {props.rooms &&
            props.rooms.length > 0 &&
            props.rooms.map((room: any, index: number) => (
              <Grid item md={3} sm={6} xs={12} key={index}>
                <RoomCard room={room} />
              </Grid>
            ))}
        </Grid>
      </ServiceContainer>
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/rooms`);
  const rooms = await res.json();

  return {
    props: {
      rooms,
    },
  };
};

export default Rooms;
