import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Link,
  Dialog,
  DialogContent,
  IconButton,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import CloseIcon from "@mui/icons-material/Close";

const products = [
  { name: "mickey mouse keychain", price: "starting from 150 ₹", image: "/images/1.jpg" },
  { name: "Flower petal keychain", price: "starting from 150 ₹", image: "/images/10.jpg" },
  { name: "Flower petal keychain", price: "starting from 150 ₹", image: "/images/11.jpg" },
  { name: "resin company logo coaster", price: "starting from 450 ₹", image: "/images/2.jpg" },
  { name: "resin company logo coaster", price: "starting from 450 ₹", image: "/images/3.jpg" },
  { name: "customized resin photo keychain", price: "starting from 180 ₹", image: "/images/4.jpg" },
  { name: "customized Resin photo fridge magnet", price: "starting from 450 ₹", image: "/images/5.jpg" },
  { name: "customized Resin photo fridge magnet", price: "starting from 450 ₹", image: "/images/7.jpg" },
  { name: "12 inch resin varmala preservation clock", price: "starting from 2500 ₹", image: "/images/8.jpg" },
  { name: "12 inch resin varmala preservation clock", price: "starting from 2500 ₹", image: "/images/9.jpg" },
  { name: "8 inch resin photoframe with rose preservation", price: "starting from 1500 ₹", image: "/images/12.jpg" },
  { name: "8 inch resin photoframe", price: "starting from 1500 ₹", image: "/images/13.jpg" },
];

const whatsappNumber = "7874501471";

export default function App() {
  const [open, setOpen] = useState(false);
  const [zoomImage, setZoomImage] = useState("");

  const handleImageClick = (img) => {
    setZoomImage(img);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setZoomImage("");
  };

  const handleEnquiry = (productName) => {
    const message = encodeURIComponent(`Hi, I would like more information about "${productName}".`);
    const url = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(url, "_blank");
  };

  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
        background: "linear-gradient(to right, #fff1f2, #f3e8ff)",
        py: 6,
        px: { xs: 2, md: 6 },
        boxSizing: "border-box",
      }}
    >
      {/* Header */}
      <Box textAlign="center" mb={4}>
        <Typography variant="h3" fontWeight="bold" color="secondary.main" gutterBottom>
          Aaraksha Resin Art
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Elegance in Every Pour
        </Typography>
        <Box display="flex" justifyContent="center" gap={3} mt={2} flexWrap="wrap">
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
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            underline="hover"
            color="secondary"
            fontWeight="bold"
          >
            <PhoneIcon sx={{ verticalAlign: "middle", mr: 1 }} />
            +91 7874501471
          </Link>
        </Box>
      </Box>

      {/* Product Grid */}
      <Grid container spacing={4} justifyContent="center">
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card elevation={5} sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
              {/* Image Frame with White Background */}
              <Box
                sx={{
                  width: "100%",
                  height: 200,
                  backgroundColor: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  component="img"
                  src={product.image}
                  alt={product.name}
                  onClick={() => handleImageClick(product.image)}
                  sx={{
                    maxHeight: "100%",
                    maxWidth: "100%",
                    objectFit: "contain",
                    cursor: "pointer",
                  }}
                />
              </Box>

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
                  onClick={() => handleEnquiry(product.name)}
                >
                  Enquire Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Image Zoom Modal */}
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <IconButton
          onClick={handleClose}
          sx={{ position: "absolute", top: 8, right: 8, color: "white", zIndex: 10 }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent sx={{ p: 0, backgroundColor: "#000" }}>
          <img
            src={zoomImage}
            alt="Zoomed"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
              display: "block",
              maxHeight: "90vh",
              margin: "0 auto",
            }}
          />
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <Typography align="center" color="text.secondary" mt={6}>
        © 2025 Aaraksha Resin Art. All rights reserved.
      </Typography>
    </Box>
  );
}
