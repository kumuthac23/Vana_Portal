import React from 'react';
import { AppBar, Toolbar, IconButton, InputBase, Badge, Typography, Grid } from '@mui/material';
import { Search as SearchIcon, AccountCircle as AccountCircleIcon, ShoppingBasket as ShoppingBasketIcon } from '@mui/icons-material';

const Navbar: React.FC = () => {
  return (
    <div style={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: '#2196F3' }}>
        <Toolbar>
          <Grid container alignItems="center">
            {/* Brand Name */}
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" style={{ color: 'white', textDecoration: 'none', fontSize: '1.5rem', fontWeight: 'bold' }}>
                Your Brand
              </Typography>
            </Grid>

            {/* Search Bar */}
            <Grid item xs={12} sm={4}>
              <div style={{ position: 'relative', borderRadius: '4px', backgroundColor: 'white', width: '100%' }}>
                <div style={{ padding: '8px', height: '100%', position: 'absolute', pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  style={{ color: 'inherit', padding: '8px 8px 8px 40px', width: '100%', transition: 'width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms' }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
            </Grid>

            {/* User and Bag Icons */}
            <Grid item xs={12} sm={4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
              <IconButton color="inherit">
                <AccountCircleIcon />
              </IconButton>
              <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <ShoppingBasketIcon />
                </Badge>
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
