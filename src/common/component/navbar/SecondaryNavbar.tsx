import { AppBar, Toolbar, Link, Grid } from '@mui/material';
import { paths } from '../../../routes/path';

const navItems = [
    { text: 'Home', link: paths.ROOT },
    { text: 'Ear Rings', link: paths.EARRINGS },
    { text: 'Necklaces', link:paths.NECKLACES },
    { text: 'Bracelets', link: paths.BRACELETS },
    { text: 'Best Seller', link: paths.BESTSELLER },
    { text: 'FAQ/Aboutus', link: paths.FAQABOUT },
];

const SecondaryNavbar = () => {
  return (
    <AppBar position="static" sx={{ boxShadow: 0 ,bgcolor:"#bd8d67"}}>
      <Toolbar>
        <Grid container display={"flex"}  gap={8} justifyContent="center">
          {navItems.map((item) => (
            <Grid item key={item.text} xs="auto">
              <Link href={item.link} sx={{textDecoration:"none",}} color="#ffffff">
                {item.text}
              </Link>
            </Grid>
          ))}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default SecondaryNavbar;
