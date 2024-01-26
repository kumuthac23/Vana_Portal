import React from "react";
import { Box, Drawer, IconButton, TextField } from "@mui/material";
import { SearchDrawerProps } from "../interface/type";
import SearchIcon from '@mui/icons-material/Search';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const SearchDrawer: React.FC<SearchDrawerProps> = ({ open, onClose }) => {
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
