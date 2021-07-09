import { Box, Container, Divider, Grid, Typography } from "@material-ui/core";
import Head from "next/head";
import BannerCard from "../components/card/BannerCard";
import RssFeedIcon from "@material-ui/icons/RssFeed";
import ServiceCard from "../components/card/ServiceCard";
import ServiceContainer from "../components/container/ServiceContainer";
import RoomCard from "../components/card/RoomCard";
import BannerContainer from "../components/container/BannerContainer";
import { server } from "../config";

export default function Home(props: any) {
  return (
    <div>
      <Head>
        <title>Resort</title>
        <meta
          name="description"
          content="Resort website near kathmandu valley."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <BannerContainer fill>
          <BannerCard
            title="Luxurious Rooms"
            description="Deluxe Rooms Starting At $299"
            href="/rooms"
          >
            Our Rooms
          </BannerCard>
        </BannerContainer>

        <ServiceContainer title="Services" shade>
          <Grid container>
            <Grid item md={3}>
              <ServiceCard />
            </Grid>

            <Grid item md={3}>
              <ServiceCard />
            </Grid>

            <Grid item md={3}>
              <ServiceCard />
            </Grid>

            <Grid item md={3}>
              <ServiceCard />
            </Grid>
          </Grid>
        </ServiceContainer>

        <ServiceContainer title="Featured Room">
          <Grid container justify="center" alignItems="center" spacing={4}>
            {props.rooms &&
              props.rooms.length > 0 &&
              props.rooms.map((room: any, index: number) => (
                <Grid item md={4} key={index}>
                  <RoomCard room={room} />
                </Grid>
              ))}
          </Grid>
        </ServiceContainer>
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/rooms`);
  const rooms = await res.json();
  const featuredRooms = rooms
    .filter((room: any) => room.fields.featured)
    .slice(0, 3);

  return {
    props: {
      rooms: featuredRooms,
    },
  };
};
