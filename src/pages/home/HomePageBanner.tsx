import {  Grid } from "@mui/material";
import { Container } from "@mui/material";

function HomePageBanner() {
  return (
    <Grid container>
      <Grid item xs={12} sm={12}>
        <Container
          sx={{
            backgroundImage: "url('/public/images/homepagebannerimage.JPG')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "100vh",
            width: "100%",
            height: "100%",
          }}
        />
      </Grid>
    </Grid>
  );
}

export default HomePageBanner;
