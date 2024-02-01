import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Badge from "@mui/material/Badge";
import useMediaQuery from "@mui/material/useMediaQuery";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import NavbarDrawer from "../../../drawer/NavBarDrawer";
import SearchDrawer from "../../../drawer/SearchDrawer";
import CartDrawer from "../../../drawer/CartDrawer";
import vanaLogo from "../../../../public/assets/Images to Shruthi/logo/JEWELLERY BY VAVA LOGO (2).png";

const Navbar: React.FC = () => {
  const isMobileView = useMediaQuery("(max-width:1000px)");

  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const [searchDrawerOpen, setSearchDrawerOpen] = useState(false);
  const [myBagDrawerOpen, setMyBagDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setNavDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setNavDrawerOpen(false);
  };

  const handleSearchDrawerOpen = () => {
    setSearchDrawerOpen(true);
  };

  const handleSearchDrawerClose = () => {
    setSearchDrawerOpen(false);
  };

  const handleMyBagDrawerOpen = () => {
    setMyBagDrawerOpen(true);
  };

  const handleMyBagDrawerClose = () => {
    setMyBagDrawerOpen(false);
  };

  return (
    <>
      <AppBar position="static" sx={{ boxShadow: 0 }}>
        <Toolbar>
          <Grid container alignItems="center">
            <Grid item xs={4} md={4}>
              {isMobileView ? (
                <Grid item xs={12}>
                  <Box display={"flex"}>
                    <IconButton
                      color="inherit"
                      onClick={handleDrawerOpen}
                      sx={{ color: "#C70039" }}
                    >
                      <MenuIcon />
                    </IconButton>
                    <IconButton
                      color="inherit"
                      onClick={handleSearchDrawerOpen}
                      sx={{ color: "#C70039" }}
                    >
                      <SearchIcon />
                    </IconButton>
                  </Box>
                </Grid>
              ) : (
                <Grid item xs={12} md={8}>
                  <Box sx={{ width: "100%", padding: "8px" }}>
                    <TextField
                      variant="outlined"
                      size="small"
                      fullWidth
                      onClick={handleSearchDrawerOpen}
                      placeholder="Search..."
                      sx={{
                        color: "#C70039",
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            border: "none",
                          },
                        },
                        "& .MuiSvgIcon-root": {
                          marginRight: "8px",
                        },
                      }}
                      InputProps={{
                        startAdornment: <SearchIcon />,
                        notched: false,
                      }}
                    />
                  </Box>
                </Grid>
              )}
            </Grid>
            <Grid
              item
              xs={4}
              md={4}
              display={"flex"}
              justifyContent="center"
              alignItems={"center"}
            >
              <Avatar
                alt="Company Logo"
                src={vanaLogo}
                sx={{
                  backgroundColor: "#F6F6F6",
                  height: "60px",
                  width: "60px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              />
            </Grid>
            <Grid item xs={4} md={4}>
              <Box
                display={"flex"}
                justifyContent="flex-end"
                alignItems="flex-end"
              >
                <IconButton color="inherit" sx={{ color: "#C70039" }}>
                  <AccountCircleIcon />
                </IconButton>
                <IconButton
                  color="inherit"
                  onClick={handleMyBagDrawerOpen}
                  sx={{ color: "#C70039" }}
                >
                  <Badge badgeContent={0} color="secondary">
                    <ShoppingBasketIcon />
                  </Badge>
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Divider sx={{ width: "80%", margin: "auto" }} />
      <NavbarDrawer open={navDrawerOpen} onClose={handleDrawerClose} />
      <SearchDrawer open={searchDrawerOpen} onClose={handleSearchDrawerClose} />
      <CartDrawer open={myBagDrawerOpen} onClose={handleMyBagDrawerClose} />
    </>
  );
};

export default Navbar;
