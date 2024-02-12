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
import vanaLogo from "../../../../public/assets/Images to Shruthi/logo/JEWELLERY BY VAVA LOGO (2).png";
import { useNavigate } from "react-router";
import { paths } from "../../../routes/path";
import { DrawerEnum, useDrawer } from "../../../context/DrawerContext";

import NavbarDrawer from "../../../drawer/NavBarDrawer";
import SearchDrawer from "../../../drawer/SearchDrawer";
import MyBagDrawer from "../../../drawer/MyBagDrawer";

const Navbar = () => {
  const isMobileView = useMediaQuery("(max-width:1000px)");

  const { drawerState  ,updateDrawerState } = useDrawer();
  const navigate = useNavigate();

   const handleDrawerOpen = () => {
    updateDrawerState(DrawerEnum.Navbar);
  };

  const handleSearchDrawerOpen = () => {
    updateDrawerState(DrawerEnum.Search);
  };

  const handleMyBagDrawerOpen = () => {
    updateDrawerState(DrawerEnum.MyBag);
  };

  const moveToLogin = () => {
    navigate(`/${paths.LOGIN}`, { state: { fromNavbar: true } });
  };

  return (
    <>
      <AppBar position="static" sx={{ boxShadow: 0,height:"90px",bgcolor:"#ffffff" }}>
        <Toolbar>
          <Grid
            container
            display={"flex"}
            alignItems="center"
            justifyContent={"center"}
            padding={2}
          >
            <Grid item xs={4} md={4}>
              {isMobileView ? (
                <Grid item xs={12}>
                  <Box display={"flex"}>
                    <IconButton
                      color="inherit"
                      onClick={handleDrawerOpen}
                    >
                      <MenuIcon />
                    </IconButton>
                    <IconButton
                      color="inherit"
                      onClick={handleSearchDrawerOpen}
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
                        "& .MuiOutlinedInput-root": {
                          color: "#754a39 ",
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
                  height: "80px",
                  width: "80px",
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
                <IconButton color="inherit">
                  <AccountCircleIcon
                    onClick={moveToLogin}
                  />
                </IconButton>
                <IconButton color="inherit" onClick={handleMyBagDrawerOpen}>
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
      <NavbarDrawer open={drawerState.isNavbarDrawerOpen} onClose={handleDrawerOpen} />
      <SearchDrawer open={drawerState.isSearchDrawerOpen} onClose={handleSearchDrawerOpen} />
      <MyBagDrawer open={drawerState.isMyBagDrawerOpen} onClose={handleMyBagDrawerOpen} />
    </>
  );
};

export default Navbar;
