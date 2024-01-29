// theme.ts
import createTheme from "@mui/material/styles/createTheme";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#0f0e0f",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: {
      fontSize: "2rem",
      fontWeight: 500,
      color: "#333",
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: 400,
      color: "#555",
    },
  },
  spacing: 8,
});

export default theme;
