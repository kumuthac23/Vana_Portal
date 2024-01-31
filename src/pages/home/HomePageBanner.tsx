import { Box } from "@mui/material";

function HomePageBanner() {
  return (
    <Box
      sx={{
        backgroundImage: "url('/public/images/homepagebanner.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "400px",
        width: "100%",
      }}
    ></Box>
  );
}

export default HomePageBanner;
