import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Badge from "@material-ui/core/Badge";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  badge: {
    height: "auto",
    background: "#333",
    padding: "0.75rem",
    color: "white",
    transform: "translate(0px, 0px)",
    color: "white",
    borderRadius: "0px 0px 10px 0",
    letterSpacing: "0.1rem",
  },
});

export default function RoomCard() {
  const classes = useStyles();

  return (
    <Link href="/rooms/family-deluxe" passHref>
      <Badge
        classes={{ badge: classes.badge }}
        badgeContent={
          <>
            <Typography style={{ marginBottom: 0, lineHeight: "1.2" }}>
              $400 <div style={{ fontSize: "0.75rem" }}>per night</div>
            </Typography>
          </>
        }
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Card className={classes.root} elevation={2}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="180"
              image="/assets/images/room-1.jpeg"
              title="Contemplative Reptile"
            />
            <CardContent style={{ padding: 6 }}>
              <Typography
                gutterBottom
                variant="h6"
                component="h6"
                style={{
                  textAlign: "center",
                  marginBottom: 0,
                  fontSize: "1rem",
                }}
              >
                Double Deluxe
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Badge>
    </Link>
  );
}
