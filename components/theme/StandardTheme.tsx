import { createTheme } from "@material-ui/core";

const StandardTheme = createTheme({
  props: {
    MuiButton: {
      disableElevation: true,
    },
    MuiButtonBase: {
      disableRipple: true,
    },
    MuiAppBar: {
      elevation: 0,
    },
    MuiPaper: {
      elevation: 0,
    },
    MuiCard: {
      raised: true,
      elevation: 0,
    },
  },
  overrides: {
    MuiButton: {
      root: {
        fontWeight: 100,
      },
    },
  },
  typography: {
    fontFamily: "inherit",
  },
  shape: {
    borderRadius: 0,
  },
  palette: {
    primary: {
      main: "#007bff",
    },
    secondary: {
      main: "#ffff00",
    },
  },
});

export default StandardTheme;
