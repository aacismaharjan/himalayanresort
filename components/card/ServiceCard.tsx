import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TapAndPlayIcon from "@material-ui/icons/TapAndPlay";

const useStyles = makeStyles({
  root: {
    width: "100%",
    textAlign: "center",
    background: "transparent",
  },
});

export default function ServiceCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea style={{ padding: "1rem 0" }}>
        <TapAndPlayIcon fontSize="large" />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            style={{ fontSize: "1.2rem", fontWeight: 500 }}
          >
            Free Cocktails
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolar sit amet consectetur aadipiscing elit. Magni,
            corposris!
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
