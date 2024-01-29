import { Box, Container, Grid, Button } from "@mui/material";
import { IProduct } from "../interface/type";
import { useState } from "react";

interface IProps {
  productDetails: IProduct[];
}

function ProductDetailPage(props: IProps) {
  const { productDetails } = props;
   const [quantity, setQuantity] = useState(1);

   const incrementQuantity = () => {
     setQuantity(quantity + 1);
   };

   const decrementQuantity = () => {
     if (quantity > 1) {
       setQuantity(quantity - 1);
     }
   };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          {productDetails.map((product, index) => (
            <Box key={index} mb={2}>
              <img
                src={product.images[0]}
                alt={product.title}
                style={{ height: "350px", width: "100%", overflow: "hidden" }}
              />
            </Box>
          ))}
        </Grid>

        <Grid item xs={12} md={6}>
          {productDetails.map((product, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                // justifyContent: "center",
                // alignItems: "center",
                height: "100%",
              }}
            >
              <h2>{product.title}</h2>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Button variant="outlined" onClick={decrementQuantity}>
                  -
                </Button>
                <Box sx={{ margin: "0 10px" }}>{quantity}</Box>
                <Button variant="outlined" onClick={incrementQuantity}>
                  +
                </Button>
              </Box>
              <Box sx={{ marginTop: "20px" }}>
                <Button variant="contained" fullWidth color="primary">
                  Add to Cart
                </Button>
              </Box>

              <Box sx={{ marginTop: "20px" }}>
                <p>{product.description}</p>
              </Box>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProductDetailPage;
