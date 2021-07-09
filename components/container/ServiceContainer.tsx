import { Box, Container, Divider, Grid, Typography } from "@material-ui/core";
import ServiceCard from "../card/ServiceCard";

export default function ServiceContainer(props: any) {
  const style = {
    padding: "3rem 0",
    background: props.shade ? "rgba(0,0,0,0.05)" : "rgba(255, 255, 255, 1)",
  };

  return (
    <Box style={style}>
      <Container maxWidth="lg">
        <Box style={{ textAlign: "center" }}>
          <Typography
            variant="h1"
            component="h1"
            style={{
              fontSize: "2.5rem",
              fontWeight: 700,
              letterSpacing: ".05em",
              textTransform: "capitalize",
            }}
          >
            {props.title}
          </Typography>

          <Divider
            style={{
              backgroundColor: "#1e90ff",
              height: 5,
              width: "10%",
              margin: "1.2em auto",
            }}
          />
        </Box>
        <Box style={{ padding: "1rem 0" }}>{props.children}</Box>
      </Container>
    </Box>
  );
}
