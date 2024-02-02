import Box from "@mui/material/Box";
import AboutByVana from "./AboutByVana";
import HomePageBanner from "./HomePageBanner";
import NewArriavals from "./NewArriavals";

function Home() {
   
  return (
    <>
      <Box>
        <HomePageBanner />
      </Box>
      <Box
        sx={{
          mb: 2,
        }}
      >
        <NewArriavals />
      </Box>
      <Box
        sx={{
          mb: 2,
        }}
      >
        <AboutByVana />
      </Box>
    </>
  );
}

export default Home;



