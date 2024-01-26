import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Grid,
  Badge,
  useMediaQuery,
  TextField,
  Box,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import NavbarDrawer from '../../../drawer/NavDrawer';
import SearchDrawer from '../../../drawer/SearchDrawer';
import CartDrawer from '../../../drawer/CartDrawer';

const Navbar: React.FC = () => {
  const isMobileView = useMediaQuery("(max-width:1000px)");

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchDrawerOpen, setSearchDrawerOpen] = useState(false);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);

  const handleDrawerOpen = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleSearchDrawerOpen = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSearchDrawerOpen(true);
  };

  const handleSearchDrawerClose = () => {
    setSearchDrawerOpen(false);
  };


  const handleCartDrawerOpen = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCartDrawerOpen(true);
  };

  const handleCartDrawerClose = () => {
    setCartDrawerOpen(false);
  };

  return (
    <>
    <AppBar position="static" sx={{ boxShadow: 0 }}>
    <Toolbar>
    <Grid container alignItems="center">
    <Grid item xs={4} md={4}>
{
    isMobileView ? (
        <Grid item xs={12}  >
           <Box display={"flex"}>
        <IconButton color="inherit" onClick={(e) => handleDrawerOpen(e)}>
          <MenuIcon />
        </IconButton>
        <IconButton color="inherit"  onClick={(e) =>handleSearchDrawerOpen(e)}>
          <SearchIcon />
        </IconButton>
        </Box> 
      </Grid>
    ):(<Grid item xs={12} md={8} >
        <Box sx={{ width: '100%', padding: '8px' }}>
        <TextField
  variant="outlined"
  size='small'
  fullWidth
  onClick={(e) => handleSearchDrawerOpen(e)}
  placeholder="Search..."
  sx={{
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: 'none',
      },
    },
    '& .MuiSvgIcon-root': {
      marginRight: '8px',
    },
  }}
  InputProps={{
    startAdornment: <SearchIcon />,
    notched: false,
  }}
/>

    </Box>
  </Grid>)
}
    </Grid>
    <Grid item xs={4} md={4}  justifyContent="center">
              <Typography variant="h6" textAlign={"center"} >
                VANA
              </Typography>
            </Grid>
            <Grid item xs={4} md={4} >
                <Box display={"flex"} justifyContent='flex-end' alignItems="flex-end">
            <IconButton color="inherit">
                <AccountCircleIcon />
              </IconButton>
              <IconButton color="inherit" onClick={(e)=>handleCartDrawerOpen(e)}>
                <Badge badgeContent={0} color="secondary">
                  <ShoppingBasketIcon />
                </Badge>
              </IconButton>
              </Box>
            </Grid>
    </Grid>
    </Toolbar>
    </AppBar>
    <Divider sx={{ width: '80%', margin: 'auto' }} />
    <NavbarDrawer open={drawerOpen} onClose={handleDrawerClose}/>
    <SearchDrawer open={searchDrawerOpen} onClose={handleSearchDrawerClose}/>
    <CartDrawer open={cartDrawerOpen}  onClose={handleCartDrawerClose}/>
    </>
  )
}

export default Navbar;