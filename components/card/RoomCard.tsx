import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Badge from "@material-ui/core/Badge";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import MuiCardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";

const useStyles = makeStyles({
  root: {
    width: "100%",
    boxShadow: "0px 0px 5px 5px rgba(0,0,0,0.05)",
  },
  badge: {
    height: "auto",
    background: "#333",
    padding: "0.75rem",
    color: "white",
    transform: "translate(0px, 0px)",
    borderRadius: "0px 0px 10px 0",
    letterSpacing: "0.1rem",
  },
  media: {
    paddingTop: "56.25%" /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */,
  },
});

export function CardMedia(props: any) {
  const classes = useStyles();
  return (
    <MuiCardMedia
      className={classes.media}
      image={props.image || "/assets/images/room-1.jpeg"}
      title="Contemplative Reptile"
    />
  );
}

export default function RoomCard(props: any) {
  const classes = useStyles();

  return (
    <Link href={`/rooms/${props.room.fields.slug}`} passHref>
      <Badge
        classes={{ badge: classes.badge }}
        style={{ display: "flex" }}
        badgeContent={
          <>
            <Typography
              style={{ marginBottom: 0, lineHeight: "1.2", fontSize: "0.9rem" }}
            >
              ${props.room.fields.price}{" "}
              <div style={{ fontSize: "0.55rem" }}>per night</div>
            </Typography>
          </>
        }
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Card className={classes.root} elevation={0}>
          <CardActionArea>
            <CardMedia
              image={props.room.fields.images[0].fields.file.url}
            ></CardMedia>
            <CardContent style={{ padding: 6 }}>
              <Typography
                gutterBottom
                variant="h6"
                component="h6"
                style={{
                  textAlign: "center",
                  marginBottom: 0,
                  fontSize: "1rem",
                  textTransform: "capitalize",
                }}
              >
                {props.room.fields.name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Badge>
    </Link>
  );
}
