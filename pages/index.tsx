import { Box, Container, Divider, Grid, Typography } from "@material-ui/core";
import Head from "next/head";
import BannerCard from "../components/card/BannerCard";
import RssFeedIcon from "@material-ui/icons/RssFeed";
import ServiceCard from "../components/card/ServiceCard";
import ServiceContainer from "../components/container/ServiceContainer";
import RoomCard from "../components/card/RoomCard";

export default function Home() {
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
        <Box
          display="flex"
          alignItems="center"
          minHeight="100vh"
          justifyContent="center"
          style={{
            backgroundImage: `url(${"/assets/images/defaultBcg.jpeg"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <BannerCard />
        </Box>

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
            <Grid item md={4}>
              <RoomCard />
            </Grid>

            <Grid item md={4}>
              <RoomCard />
            </Grid>

            <Grid item md={4}>
              <RoomCard />
            </Grid>
          </Grid>
        </ServiceContainer>
      </main>
    </div>
  );
}
