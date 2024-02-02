import { Box, Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Product } from "../../interface/type";
import CommonProductCard from "../../common/component/commonCard/CommonProductCard";
// import { getNewArrivalProductsData } from "../../services/api";

function NewArriavals() {
  const [newArrivalProductsData, setNewArrivalProductsData] = useState<
    Product[]
  >([]);
  const [hoveredProductImage, setHoveredProductImage] = useState<string | null>(
    null
  );

  const handleMouseEnter = (productId: string) => {
    setHoveredProductImage(productId);
  };

  const handleMouseLeave = () => {
    setHoveredProductImage(null);
  };

  // async function fetchData() {
  //   try {
  //     const newArrivalProducts = await getNewArrivalProductsData();
  //     setNewArrivalProductsData(newArrivalProducts);

  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  // useEffect(() => {
  //   fetchData();
  // }, []);
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
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
        <Grid>
          {newArrivalProductsData.map((product) => (
            <Grid item  xs={12} sm={6} md={4} lg={3}>
              <CommonProductCard
                product={product}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                hoveredProductImage={hoveredProductImage}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default NewArriavals;
