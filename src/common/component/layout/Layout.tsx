
import { Box, Divider, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router";
import Footer from "../footer/Footer";
import Nav from "../navbar/Nav";
import SecondaryNavbar from "../navbar/SecNavbar";
const Layout = () => {

  const isSmallScreen = useMediaQuery("(min-width:1000px)");
  return (
    <>
      <Nav/>
      <Box>{isSmallScreen && <SecondaryNavbar/>}</Box>
      <Divider/>
      <Box sx={{ marginTop: "5px" }}>
        <Outlet />
      </Box>
      <Footer/>
    </>
  );
};

export default Layout;