import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  ButtonGroup,
  Grid,
  Container,
} from "@mui/material";
import { IProduct } from "../interface/type";

interface IProps {
  productDetails: IProduct[];
}

function ProductDetail(props: IProps) {
  const { productDetails } = props;
  const [mainImage, setMainImage] = useState("");
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleImageClick = (image: string) => {
    setMainImage(image);
  };

  const imagesWithPoster = productDetails
    .map((product) => ({
      image: product.posterURL,
      isPoster: true,
    }))
    .concat(
      productDetails.flatMap((product) =>
        product.images.map((image) => ({
          image,
          isPoster: false,
        }))
      )
    );

  return (
    <Container>
      <Grid container spacing={2} sx={{ marginTop: 4 }}>
        <Grid item xs={12} md={5}>
          <Box sx={{ pb: 2 }}>
            <img
              src={mainImage || productDetails[0]?.posterURL || ""}
              alt="product image"
              style={{
                display: "block",
                margin: "1px auto",
                borderRadius: "5px",
                objectFit: "contain",
                height: "auto",
                maxWidth: "100%",
                objectPosition: "center",
              }}
            />
          </Box>

          <Grid
            item
            xs={12}
            md={2}
            sx={{ display: "flex", flexDirection: "row", gap: 2 }}
          >
            {imagesWithPoster.map((item, index) => (
              <Box key={index} onClick={() => handleImageClick(item.image)}>
                <img
                  src={item.image}
                  alt={`Image ${index + 1}`}
                  style={{
                    height: "87px",
                    width: "75px",
                    borderRadius: "5px",
                    objectFit: "cover",
                  }}
                />
              </Box>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} sm={12}>
          {productDetails.map((product, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <Typography variant="h1">{product.title}</Typography>
              <Typography variant="h2" sx={{ mt: 2 }}>
                ${product.price}
              </Typography>
              <Typography variant="h1">Quantity:</Typography>
              <Box sx={{ mt: 2 }}>
                <ButtonGroup
                  className="test"
                  sx={{
                    lineHeight: 1,
                    padding: 0,
                    "& .MuiButtonGroup-grouped": {
                      minWidth: "32px",
                    },
                    "& .MuiButtonBase-root:hover": {
                      border: "none",
                    },
                    marginLeft: "8px",
                    border: "1px solid #dfdfdf",
                  }}
                  size="small"
                  aria-label="small outlined button group"
                >
                  <Button onClick={decrementQuantity}>-</Button>
                  <Button>{quantity}</Button>
                  <Button onClick={incrementQuantity}>+</Button>
                </ButtonGroup>
              </Box>
              <Box sx={{ mt: 2 }}>
                <Button variant="contained" sx={{ width: "90%" }}>
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

export default ProductDetail;
