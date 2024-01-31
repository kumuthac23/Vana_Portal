// CollectionPage.tsx

import { useState } from "react";
import { Collection } from "../../../interface/type";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface Props {
  collection: Collection;
}

const CollectionPage = (props: Props) => {
  const { collection } = props;
  const [hoveredProductId, setHoveredProductId] = useState<string | null>(null);


  const navigate = useNavigate();

  const handleMouseEnter = (productId: string) => {
    setHoveredProductId(productId);
  };

  const handleMouseLeave = () => {
    setHoveredProductId(null);
  };

  const handleCardClick = (productId: string) => {
    navigate(`/product/${productId}`);
  };

  return (
    <Container sx={{ marginY: "15px" }}>
     <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h4" align="center" gutterBottom>
            {collection.name}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{collection.description}</Typography>
        </AccordionDetails>
      </Accordion>
      <Divider sx={{ marginBottom: "16px" }} />
      <Grid container spacing={3}>
        {collection.products.map((product) => (
          <Grid item key={product._id} xs={12} sm={6} md={4} lg={3}>
            <Card
              sx={{
                position: "relative",
                height: "370px",
                margin: "0 auto",
                textDecoration: "none",
                cursor: "pointer",
              }}
              onClick={() => handleCardClick(product._id)}
              onMouseEnter={() => handleMouseEnter(product._id)}
              onMouseLeave={handleMouseLeave}
            >
              <CardMedia
                component="img"
                height="250px"
                width="auto"
                image={
                  hoveredProductId === product._id
                    ? product.images[1]
                    : product.images[0]
                }
                alt={product.title}
                sx={{
                  objectFit: "",
                  "&:hover": {
                    transform: "scale(1.05)",
                    transition: "transform 0.3s ease",
                  },
                }}
              />
              <CardContent sx={{ p: 1 }}>
                <Typography
                  variant="h6"
                  title={product.title}
                  sx={{
                    cursor: "pointer",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                  }}
                  gutterBottom
                >
                  {product.title}
                </Typography>
                <Typography
                  variant="body2"
                  title={product.description}
                  color="textSecondary"
                  sx={{
                    cursor: "pointer",
                    flex: "1",
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 2,
                    textOverflow: "ellipsis",
                    whiteSpace: "normal",
                  }}
                >
                  {product.description}
                </Typography>

                <Typography variant="h6" color="textPrimary">
                  ${product.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CollectionPage;
