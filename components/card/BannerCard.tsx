import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    color: "white",
    minWidth: 275,
    textAlign: "center",
    background: "rgba(0,0,0,.5)",
    padding: "2rem 3rem",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export interface BannerCardPropsI {
  title: string;
  description?: string;
  href: string;
  children: string;
  [x: string]: any;
}

export default function BannerCard(props: BannerCardPropsI) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} raised>
      <CardContent style={{ padding: 0 }}>
        <Typography
          variant="h1"
          component="h1"
          style={{
            fontSize: "4.5rem",
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
            margin: "1.5em auto",
          }}
        />

        {props.description && (
          <Typography
            variant="body2"
            component="h4"
            style={{
              fontSize: "1.2rem",
              fontWeight: 400,
              letterSpacing: ".2em",
              textTransform: "capitalize",
              marginBottom: "1.6rem",
            }}
          >
            {props.description}
          </Typography>
        )}
      </CardContent>
      <CardActions style={{ textAlign: "center", padding: 0 }}>
        <Link href={props.href} passHref>
          <Button
            variant="contained"
            color="primary"
            style={{
              minWidth: "10rem",
              letterSpacing: "0.15rem",
              margin: "auto",
            }}
          >
            {props.children}
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
