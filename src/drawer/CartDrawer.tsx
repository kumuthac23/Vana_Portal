// CartDrawer.tsx
import { Drawer, Grid, IconButton, Typography, Button } from '@mui/material';
import { Close } from '@mui/icons-material';
import { CartDrawerProps } from '../interface/type';
import useStyles from '../styles/cartDrawer'; 

const CartDrawer = ({ open, onClose }:CartDrawerProps) => {
  const classes = useStyles();

  return (
    <Drawer anchor="right" open={open} onClose={onClose} >
      <Grid container direction="column" sx={{width:"378px"}} className={classes.drawerContainer}>
        <Grid container item className={classes.drawerHeader}>
          <Typography variant="h6">My Bag</Typography>
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        </Grid>

        <Grid container item direction="column" className={classes.drawerContent}>
          <Typography variant="body1" gutterBottom>
            Your cart is empty
          </Typography>
          <Button variant="contained" color="primary" onClick={onClose}>
            Go to Shopping
          </Button>
        </Grid>
      </Grid>
    </Drawer>
  );
};

export default CartDrawer;
