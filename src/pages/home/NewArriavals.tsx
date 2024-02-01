import { Box} from '@mui/material'
import {  Typography } from "@mui/material";
import { useState } from 'react';

function NewArriavals() {
    const [newArrivalProductsData, setNewArrivalProductsData] = useState<IProduct[]>([]);
  return (
    <Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        pb={1}
      >
        <Typography
          sx={{
            margin: "0px 10px 0px 0px",
            fontWeight: 800,
            color: "black",
            lineHeight: 2,
          }}
        >
          New Arrival
        </Typography>
      </Box>
      <Box>
        {newArrivalProductsData.map((product, index) => (
          <Box key={index}>
           
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default NewArriavals
