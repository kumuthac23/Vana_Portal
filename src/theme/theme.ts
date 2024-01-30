// theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#f50057",
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        h1: {
          color: "#333",
          fontSize: "2rem",
          fontWeight: "500",
        },
        h2: {
          color: "#555",
          fontSize: "1.5rem",
          fontWeight: "400",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        outlined: {
          color: "black",
        },
        contained: {
          color: "black",
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        badge: {
          width: "30px",
          height: "30px",
          color: "white",
        },
      },
    },
  },
  typography: {
    button: {
      textTransform: "none",
      fontWeight: 500,
      textDecoration: "none",
      color: "black",
    },
  },
});

export default theme;
