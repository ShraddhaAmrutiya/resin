import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
  Link,
  Container,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";

const products = [
  {
    name: "Ocean Wave Tray",
    price: "₹1,500",
    image: "/screenshot(7).png",
  },
  {
    name: "Floral Coasters (Set of 4)",
    price: "₹800",
    image: "/images/floral-coasters.jpg",
  },
  {
    name: "Geode Wall Art",
    price: "₹2,200",
    image: "/images/geode-wall.jpg",
  },
];

export default function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #fff1f2, #f3e8ff)",
        py: 6,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box textAlign="center" mb={4}>
          <Typography variant="h3" fontWeight="bold" color="secondary.main" gutterBottom>
            Aaraksha Resin Art
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Elegance in Every Pour
          </Typography>
          <Box display="flex" justifyContent="center" gap={3} mt={2}>
            <Link
              href="https://www.instagram.com/araksha_resin?igsh=MTl3aHIxN2d2c2U5cg=="
              target="_blank"
              underline="hover"
              color="secondary"
              fontWeight="bold"
            >
              <InstagramIcon sx={{ verticalAlign: "middle", mr: 1 }} />
              Instagram
            </Link>
            <Link
              href="tel:+919876543210"
              underline="hover"
              color="secondary"
              fontWeight="bold"
            >
              <PhoneIcon sx={{ verticalAlign: "middle", mr: 1 }} />
              +91 98765 43210
            </Link>
          </Box>
        </Box>

        {/* Product Grid */}
        <Grid container spacing={4} justifyContent="center">
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                elevation={5}
                sx={{ height: "100%", display: "flex", flexDirection: "column" }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" color="primary">
                    {product.name}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {product.price}
                  </Typography>
                  <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    sx={{ mt: 2 }}
                  >
                    Enquire Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Footer */}
        <Typography align="center" color="text.secondary" mt={6}>
          © 2025 Aaraksha Resin Art. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
