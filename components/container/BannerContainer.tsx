import { Box } from "@material-ui/core";
import BannerCard from "../card/BannerCard";

export interface BannerContainerPropsI {
  fill?: boolean;
  image?: string;
  children: React.ReactChild;
}

const BannerContainer = (props: BannerContainerPropsI) => {
  const backgroundImage = props.image || "/assets/images/defaultBcg.jpeg";
  return (
    <Box
      display="flex"
      alignItems="center"
      minHeight={props.fill ? "100vh" : "70vh"}
      justifyContent="center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        paddingTop: 65,
      }}
    >
      {props.children}
    </Box>
  );
};

export default BannerContainer;
