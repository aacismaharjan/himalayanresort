import { ThemeProvider } from "@material-ui/styles";
import Header from "../header/Header";
import StandardTheme from "../theme/StandardTheme";

const Layout = (props: any) => {
  return (
    <ThemeProvider theme={StandardTheme}>
      <div>
        <Header />
        {props.children}
      </div>
    </ThemeProvider>
  );
};

export default Layout;
