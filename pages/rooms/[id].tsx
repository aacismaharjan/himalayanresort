import { Container, Grid, Typography } from "@material-ui/core";
import Head from "next/head";
import BannerCard from "../../components/card/BannerCard";
import RoomCard, { CardMedia } from "../../components/card/RoomCard";
import BannerContainer from "../../components/container/BannerContainer";
import { server } from "../../config";

const RoomPage = (props: any) => {
  console.log({ props });
  return (
    <div>
      <Head>
        <title> Room | Resort</title>
        <meta
          name="description"
          content="Resort website near kathmandu valley."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BannerContainer image={props.room.fields.images[0].fields.file.url}>
        <BannerCard title={`${props.room.fields.name} Room`} href="/rooms">
          Back to Rooms
        </BannerCard>
      </BannerContainer>

      <Container maxWidth="lg">
        <Grid
          container
          justify="center"
          alignItems="center"
          spacing={4}
          style={{ padding: "3rem 0" }}
        >
          <Grid item md={4}>
            <CardMedia />
          </Grid>

          <Grid item md={4}>
            <CardMedia />
          </Grid>

          <Grid item md={4}>
            <CardMedia />
          </Grid>
        </Grid>
      </Container>

      <Container
        maxWidth="lg"
        style={{ paddingTop: "3rem", paddingBottom: "3rem" }}
      >
        <Grid container justify="center" alignItems="flex-start" spacing={4}>
          <Grid item md={7}>
            <Typography
              variant="h5"
              style={{ fontWeight: "bold", marginBottom: "1rem" }}
              gutterBottom
            >
              Details
            </Typography>

            <Typography style={{ lineHeight: "1.8" }}>
              {props.room.fields.description}
            </Typography>
          </Grid>

          <Grid item md={5}>
            <Typography
              variant="h5"
              style={{ fontWeight: "bold", marginBottom: "1rem" }}
              gutterBottom
            >
              Infos
            </Typography>

            <Typography
              style={{
                fontSize: "1.1rem",
                letterSpacing: "0.15rem",
                lineHeight: "2",
                fontWeight: 400,
              }}
            >
              Price: $ 500
              <br />
              Size: 700 SQFT
              <br /> Max Capacity: 6 people
              <br /> Pets Allowed <br />
              Free Breakfast Included
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Container
        maxWidth="lg"
        style={{ paddingTop: "3rem", paddingBottom: "3rem" }}
      >
        <Grid container alignItems="flex-start" spacing={4}>
          <Grid item md={12}>
            <Typography
              variant="h5"
              style={{ fontWeight: "bold", marginBottom: "1rem" }}
              gutterBottom
            >
              Extras
            </Typography>
            <Grid container spacing={1}>
              <Grid item md={4}>
                <Typography>
                  - Plush pillows and breathable bed linens
                </Typography>
              </Grid>

              <Grid item md={4}>
                <Typography>- Soft, oversized bath towels</Typography>
              </Grid>

              <Grid item md={4}>
                <Typography>- Full-sized, pH-balanced toiletries</Typography>
              </Grid>

              <Grid item md={4}>
                <Typography>- Complimentary refreshments</Typography>
              </Grid>

              <Grid item md={4}>
                <Typography>- Adequate safety/security</Typography>
              </Grid>

              <Grid item md={4}>
                <Typography>- Internet</Typography>
              </Grid>

              <Grid item md={4}>
                <Typography>- Comfortable beds</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export const getStaticProps = async (context: any) => {
  const res = await fetch(`${server}/api/rooms/${context.params.id}`);
  const room = await res.json();

  return {
    props: {
      room,
    },
  };
};

export const getStaticPaths = async (context: any) => {
  const res = await fetch(`${server}/api/rooms`);
  const rooms = await res.json();

  const ids = rooms.map((room: any) => room.fields.slug);

  const paths = ids.map((id: any) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export default RoomPage;
