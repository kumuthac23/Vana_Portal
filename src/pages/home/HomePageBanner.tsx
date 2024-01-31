import { Box } from "@mui/material";

function HomePageBanner() {
    return (
      <Box
        sx={{
          backgroundImage:
            "url('/public/images/homepagebannerimage.JPG')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh ",
          width: "100%",
        }}
      ></Box>
    );
}

export default HomePageBanner;
