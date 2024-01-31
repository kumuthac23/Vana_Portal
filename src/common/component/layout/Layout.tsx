
import { Box, Divider, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router";

import Nav from "../navbar/NavBar";
import SecondaryNavbar from "../navbar/SecondaryNavbar";
import Footer from "../../../footer/Footer";



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