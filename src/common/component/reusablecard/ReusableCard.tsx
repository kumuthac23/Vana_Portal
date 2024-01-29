// CollectionPage.tsx

import React from "react";
import { Collection} from "../../../interface/type"; 
import { Link } from "react-router-dom";
import { Container, Typography, Grid, Card, CardActionArea, CardContent, CardMedia, Divider } from "@mui/material";

interface Props {
  collection: Collection;
}

const CollectionPage: React.FC<Props> = ({ collection }) => {
  return (
    <Container sx={{marginTop:"10px"}}>
      <Typography variant="h4" align="center" gutterBottom>
        {collection.name}
      </Typography>
      <Divider sx={{marginBottom:"16px"}} />
      <Grid container spacing={3}>
        {collection.products.map((product) => (
          <Grid item key={product._id} xs={12} sm={6} md={4} lg={3}>
            <Card sx={{height: 400,width: 280,margin: "0 auto"}}>
              <CardActionArea component={Link} to={`/product/${product._id}`}>
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.title}
                />
                <CardContent sx={{ height: 150, overflow: "hidden", textOverflow: "ellipsis" }}>
                  <Typography variant="h6" component="div" gutterBottom>
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {product.description}
                  </Typography>
                  <Typography variant="h6" color="textPrimary">
                    ${product.price}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CollectionPage;
