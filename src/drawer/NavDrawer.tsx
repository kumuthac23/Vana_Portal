import { Box, Drawer, IconButton, List, ListItemButton, ListItemText, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { paths } from '../routes/path';

 interface NavbarDrawerProps {
  open: boolean;
  onClose: () => void;
}


const NavbarDrawer = ({ open, onClose }:NavbarDrawerProps) => {
  const drawerItems = [
    { text: 'Home', link: paths.ROOT },
    { text: 'Ear Rings', link: paths.EARRINGS },
    { text: 'Necklaces', link:paths.NECKLACES },
    { text: 'Bracelets', link: paths.BRACELETS },
    { text: 'Best Seller', link: paths.BESTSELLER },
    { text: 'FAQ/Aboutus', link: paths.FAQABOUT },
  ];

  return (
    <Drawer anchor="left" open={open} onClose={onClose} >
      <Box  sx={{width:"300px"}}>
      <Box sx={{ display: 'flex', alignItems: 'center', p: 2 ,justifyContent:"space-between"}}>
          <Typography variant="h6" sx={{ marginLeft: 1 }}>
            VANA
          </Typography>
          <IconButton onClick={onClose}>
            <ChevronLeftIcon/>
          </IconButton>
        </Box>
      <List>
        {drawerItems.map((item, index) => (
          <ListItemButton key={index} component={Link} to={item.link} onClick={onClose}>
            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
      </Box>
    </Drawer>
  );
};

export default NavbarDrawer;
