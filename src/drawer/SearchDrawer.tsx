import SearchIcon from '@mui/icons-material/Search';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';

   interface SearchDrawerProps {
  open: boolean;
  onClose: () => void;
}

const SearchDrawer = ({ open, onClose }:SearchDrawerProps) => {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
          <Box sx={{ width: "300px", display: 'flex' ,alignItems: 'center', p: 2 ,justifyContent:"space-between"}}>
            <TextField
              placeholder="What are you looking for?"
              variant="outlined" 
              fullWidth
              size="medium"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    border: 'none',
                  },
                  '& .MuiSvgIcon-root': {
                    marginRight: '8px',
                  },
                },
              }}
              InputProps={{
                startAdornment: <SearchIcon />,
                notched: false,
                sx: {
                  '&:hover fieldset': {
                    borderColor: 'none', 
                  },
                },
              }}
            />
            <IconButton onClick={onClose}>
            <ChevronLeftIcon/>
          </IconButton>
          </Box>
    </Drawer>
  );
};

export default SearchDrawer;
