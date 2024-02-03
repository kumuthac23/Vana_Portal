import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { getNewArrivalProductsData } from "../../services/api";
import { Product } from "../../interface/type";
import CommonProductCard from "../../common/component/commonCard/CommonProductCard";

function NewArrivals() {
  const [newArrivalProducts, setNewArrivalProducts] = useState<Product[]>([]);
  const handleMouseEnter = (productId: string) => {
    console.log("Mouse entered product:", productId);
  };
  const [hoveredProductImage, setHoveredProductImage] = useState<string | null>(
    null
  );

  const handleMouseLeave = () => {
    console.log("Mouse left product");
  };

  useEffect(() => {
    const fetchNewArrivalProducts = async () => {
      try {
        const products = await getNewArrivalProductsData();
        setNewArrivalProducts(products);
      } catch (error) {}
    };

    fetchNewArrivalProducts();
  }, []);

  return (
    <Box>
      <Typography variant="h4">New Arrivals</Typography>
      <Box>
        {newArrivalProducts.map((product) => (
          <Grid item xs={12} md={3}>
            <CommonProductCard
              product={product}
              onMouseEnter={(productId: string) => handleMouseEnter(productId)}
              onMouseLeave={() => handleMouseLeave()}
              hoveredProductImage={hoveredProductImage}
            />
          </Grid>
        ))}
      </Box>
    </Box>
  );
}

export default NewArrivals;
