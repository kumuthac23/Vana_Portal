import { useState } from "react";
import { Collection } from "../../../interface/type";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import CommonProductCard from "../commonCard/CommonProductCard";

interface Props {
  collection: Collection;
}

const CommonPage = (props: Props) => {
  const { collection } = props;

  const [hoveredProductImage, setHoveredProductImage] = useState<string | null>(
    null
  );
  const [expandDescription, setExpandDescription] = useState(false);
  const [sortProductOption, setSortProductOption] = useState<string>("");

  const handleMouseEnter = (productId: string) => {
    setHoveredProductImage(productId);
  };

  const handleMouseLeave = () => {
    setHoveredProductImage(null);
  };

  const handleExpandClick = () => {
    setExpandDescription(!expandDescription);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setSortProductOption(event.target.value as string);
  };

  return (
    <Container sx={{ marginY: "15px" }}>
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          <Typography variant="h5" gutterBottom>
            {collection.name}
          </Typography>
          <IconButton
            onClick={handleExpandClick}
            aria-expanded={expandDescription}
            size="medium"
            sx={{
              padding: 0,
              width: "30px",
              height: "30px",
              "&:hover": { backgroundColor: "transparent" },
            }}
          >
            <ExpandMoreIcon />
          </IconButton>
        </Box>
        <Collapse
          in={expandDescription}
          timeout="auto"
          unmountOnExit
          sx={{ marginBottom: "16px" }}
        >
          <Typography>{collection.description}</Typography>
        </Collapse>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Typography variant="body1" color="textSecondary">
            Products:({collection.products.length})
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "200px",
            height: "40px",
          }}
        >
          <FormControl fullWidth>
            <Select
              value={sortProductOption}
              onChange={handleChange}
              displayEmpty
              renderValue={(value) => value || "Sort by"}
              sx={{
                backgroundColor: "transparent",
                color: "inherit",
                "& .MuiOutlinedInput-root": {
                  border: "none", 
                  "& fieldset": {
                    border: "none",
                  },
                },
              }}
            >
              <MenuItem value="Price: Low to High">Price: Low to High</MenuItem>
              <MenuItem value="Price: High to Low">Price: High to Low</MenuItem>
              <MenuItem value="Name: A-Z">Name: A-Z</MenuItem>
              <MenuItem value="Name: Z-A">Name: Z-A</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Grid container spacing={3}>
        {collection.products.map((product) => (
          <Grid item key={product._id} xs={12} sm={6} md={4} lg={3}>
            <CommonProductCard
              product={product}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              hoveredProductImage={hoveredProductImage}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CommonPage;
