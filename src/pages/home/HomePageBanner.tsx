import { Box } from "@mui/material";

function HomePageBanner() {
  return (
    <Box
      sx={{
    
        backgroundImage: "url('/public/images/home.JPG')",
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
