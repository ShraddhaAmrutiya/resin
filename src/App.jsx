import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
  Link,
  Dialog,
  DialogContent,
  IconButton,
  Container,
  Chip,
  Rating,
  Avatar,
  Paper,
  Divider,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import CloseIcon from "@mui/icons-material/Close";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import VerifiedIcon from "@mui/icons-material/Verified";

const products = [
  {
    name: "Mickey Mouse Keychain",
    price: "₹150",
    originalPrice: "₹200",
    image: "/images/1.jpg",
    category: "Keychains",
    rating: 4.8,
    reviews: 24,
    badge: "Bestseller",
  },
  {
    name: "Flower Petal Keychain",
    price: "₹150",
    originalPrice: "₹180",
    image: "/images/10.jpg",
    category: "Keychains",
    rating: 4.9,
    reviews: 18,
    badge: "New",
  },
  {
    name: "Elegant Flower Keychain",
    price: "₹150",
    originalPrice: "₹180",
    image: "/images/11.jpg",
    category: "Keychains",
    rating: 4.7,
    reviews: 15,
  },
  {
    name: "Company Logo Coaster",
    price: "₹450",
    originalPrice: "₹550",
    image: "/images/2.jpg",
    category: "Coasters",
    rating: 4.9,
    reviews: 32,
    badge: "Custom",
  },
  {
    name: "Premium Logo Coaster",
    price: "₹450",
    originalPrice: "₹550",
    image: "/images/3.jpg",
    category: "Coasters",
    rating: 4.8,
    reviews: 28,
  },
  {
    name: "Custom Photo Keychain",
    price: "₹180",
    originalPrice: "₹220",
    image: "/images/4.jpg",
    category: "Keychains",
    rating: 4.9,
    reviews: 45,
    badge: "Popular",
  },
  {
    name: "Photo Fridge Magnet",
    price: "₹450",
    originalPrice: "₹500",
    image: "/images/5.jpg",
    category: "Magnets",
    rating: 4.7,
    reviews: 22,
  },
  {
    name: "Custom Fridge Magnet",
    price: "₹450",
    originalPrice: "₹500",
    image: "/images/7.jpg",
    category: "Magnets",
    rating: 4.8,
    reviews: 19,
  },
  {
    name: "Varmala Preservation Clock",
    price: "₹2,500",
    originalPrice: "₹3,000",
    image: "/images/8.jpg",
    category: "Clocks",
    rating: 5.0,
    reviews: 12,
    badge: "Premium",
  },
  {
    name: "Wedding Memory Clock",
    price: "₹2,500",
    originalPrice: "₹3,000",
    image: "/images/9.jpg",
    category: "Clocks",
    rating: 4.9,
    reviews: 8,
    badge: "Premium",
  },
  {
    name: "Rose Preservation Frame",
    price: "₹1,500",
    originalPrice: "₹1,800",
    image: "/images/12.jpg",
    category: "Frames",
    rating: 4.8,
    reviews: 16,
  },
  {
    name: "Memory Photo Frame",
    price: "₹1,500",
    originalPrice: "₹1,800",
    image: "/images/13.jpg",
    category: "Frames",
    rating: 4.9,
    reviews: 14,
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    rating: 5,
    comment: "Absolutely beautiful work! The varmala preservation clock is stunning.",
    avatar: "P",
  },
  {
    name: "Rahul Gupta",
    rating: 5,
    comment: "Amazing quality and fast delivery. Highly recommended!",
    avatar: "R",
  },
  {
    name: "Sneha Patel",
    rating: 4,
    comment: "Love my custom keychain. Great attention to detail.",
    avatar: "S",
  },
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

  const getBadgeColor = (badge) => {
    switch (badge) {
      case "Bestseller": return "error";
      case "New": return "success";
      case "Popular": return "warning";
      case "Premium": return "secondary";
      case "Custom": return "info";
      default: return "primary";
    }
  };

  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        overflow: "hidden",
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.9) 100%)",
          color: "white",
          py: 8,
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" fontWeight="bold" gutterBottom sx={{ fontSize: { xs: "2.5rem", md: "3.5rem" } }}>
            Aaraksha Resin Art
          </Typography>
          <Typography variant="h5" sx={{ mb: 3, opacity: 0.9 }}>
            Transforming Memories into Timeless Art
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, maxWidth: 600, mx: "auto", opacity: 0.8 }}>
            Handcrafted resin art pieces that preserve your precious moments forever. 
            From custom keychains to elegant photo frames, we create unique pieces just for you.
          </Typography>
          
          <Box display="flex" justifyContent="center" gap={3} mb={4} flexWrap="wrap">
            <Button
              variant="contained"
              size="large"
              startIcon={<WhatsAppIcon />}
              sx={{
                bgcolor: "#25D366",
                "&:hover": { bgcolor: "#128C7E" },
                borderRadius: 3,
                px: 4,
              }}
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
            >
              Chat on WhatsApp
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<InstagramIcon />}
              sx={{
                borderColor: "white",
                color: "white",
                "&:hover": { borderColor: "white", bgcolor: "rgba(255,255,255,0.1)" },
                borderRadius: 3,
                px: 4,
              }}
              href="https://www.instagram.com/araksha_resin?igsh=MTl3aHIxN2d2c2U5cg=="
              target="_blank"
            >
              Follow Us
            </Button>
          </Box>

          <Box display="flex" justifyContent="center" alignItems="center" gap={2} flexWrap="wrap">
            <Box display="flex" alignItems="center" gap={1}>
              <VerifiedIcon sx={{ color: "#4CAF50" }} />
              <Typography variant="body2">Verified Business</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              <Rating value={4.9} readOnly size="small" />
              <Typography variant="body2">4.9/5 (200+ reviews)</Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="xl" sx={{ py: 6 }}>
        {/* Stats Section */}
        <Grid container spacing={3} sx={{ mb: 6 }}>
          <Grid item xs={6} md={3}>
            <Paper elevation={3} sx={{ p: 3, textAlign: "center", borderRadius: 3 }}>
              <Typography variant="h4" fontWeight="bold" color="primary">500+</Typography>
              <Typography variant="body2" color="text.secondary">Happy Customers</Typography>
            </Paper>
          </Grid>
          <Grid item xs={6} md={3}>
            <Paper elevation={3} sx={{ p: 3, textAlign: "center", borderRadius: 3 }}>
              <Typography variant="h4" fontWeight="bold" color="primary">1000+</Typography>
              <Typography variant="body2" color="text.secondary">Products Crafted</Typography>
            </Paper>
          </Grid>
          <Grid item xs={6} md={3}>
            <Paper elevation={3} sx={{ p: 3, textAlign: "center", borderRadius: 3 }}>
              <Typography variant="h4" fontWeight="bold" color="primary">4.9★</Typography>
              <Typography variant="body2" color="text.secondary">Average Rating</Typography>
            </Paper>
          </Grid>
          <Grid item xs={6} md={3}>
            <Paper elevation={3} sx={{ p: 3, textAlign: "center", borderRadius: 3 }}>
              <Typography variant="h4" fontWeight="bold" color="primary">24h</Typography>
              <Typography variant="body2" color="text.secondary">Quick Response</Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Products Section */}
        <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4} color="white">
          Our Featured Products
        </Typography>

        <Grid container spacing={4}>
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card 
                elevation={8} 
                sx={{ 
                  height: "100%", 
                  display: "flex", 
                  flexDirection: "column",
                  borderRadius: 3,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                  },
                  position: "relative",
                  overflow: "visible",
                }}
              >
                {product.badge && (
                  <Chip
                    label={product.badge}
                    color={getBadgeColor(product.badge)}
                    size="small"
                    sx={{
                      position: "absolute",
                      top: 12,
                      left: 12,
                      zIndex: 2,
                      fontWeight: "bold",
                    }}
                  />
                )}
                
                <Box sx={{ position: "relative" }}>
                  <CardMedia
                    component="img"
                    height="250"
                    image={product.image}
                    alt={product.name}
                    sx={{ 
                      cursor: "pointer",
                      transition: "transform 0.3s ease",
                      "&:hover": { transform: "scale(1.05)" },
                    }}
                    onClick={() => handleImageClick(product.image)}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: 12,
                      right: 12,
                      display: "flex",
                      flexDirection: "column",
                      gap: 1,
                    }}
                  >
                    <IconButton
                      size="small"
                      sx={{
                        bgcolor: "rgba(255,255,255,0.9)",
                        "&:hover": { bgcolor: "rgba(255,255,255,1)" },
                      }}
                    >
                      <FavoriteIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                      size="small"
                      sx={{
                        bgcolor: "rgba(255,255,255,0.9)",
                        "&:hover": { bgcolor: "rgba(255,255,255,1)" },
                      }}
                    >
                      <ShareIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </Box>

                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Chip 
                    label={product.category} 
                    size="small" 
                    variant="outlined" 
                    sx={{ mb: 1 }} 
                  />
                  
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {product.name}
                  </Typography>
                  
                  <Box display="flex" alignItems="center" gap={1} mb={2}>
                    <Rating value={product.rating} readOnly size="small" />
                    <Typography variant="body2" color="text.secondary">
                      ({product.reviews})
                    </Typography>
                  </Box>

                  <Box display="flex" alignItems="center" gap={2} mb={3}>
                    <Typography variant="h6" fontWeight="bold" color="primary">
                      {product.price}
                    </Typography>
                    {product.originalPrice && (
                      <Typography 
                        variant="body2" 
                        sx={{ textDecoration: "line-through", color: "text.secondary" }}
                      >
                        {product.originalPrice}
                      </Typography>
                    )}
                  </Box>

                  <Button
                    variant="contained"
                    fullWidth
                    size="large"
                    startIcon={<WhatsAppIcon />}
                    sx={{
                      bgcolor: "#25D366",
                      "&:hover": { bgcolor: "#128C7E" },
                      borderRadius: 2,
                      py: 1.5,
                      fontWeight: "bold",
                    }}
                    onClick={() => handleEnquiry(product.name)}
                  >
                    Enquire Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Testimonials Section */}
        <Box sx={{ mt: 8, mb: 6 }}>
          <Typography variant="h4" fontWeight="bold" textAlign="center" mb={4} color="white">
            What Our Customers Say
          </Typography>
          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper elevation={6} sx={{ p: 4, borderRadius: 3, height: "100%" }}>
                  <Box display="flex" alignItems="center" gap={2} mb={2}>
                    <Avatar sx={{ bgcolor: "primary.main" }}>{testimonial.avatar}</Avatar>
                    <Box>
                      <Typography variant="subtitle1" fontWeight="bold">
                        {testimonial.name}
                      </Typography>
                      <Rating value={testimonial.rating} readOnly size="small" />
                    </Box>
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ fontStyle: "italic" }}>
                    "{testimonial.comment}"
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Contact Section */}
        <Paper elevation={8} sx={{ p: 6, borderRadius: 4, textAlign: "center", bgcolor: "rgba(255,255,255,0.95)" }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Ready to Create Something Beautiful?
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={4}>
            Get in touch with us to discuss your custom resin art project
          </Typography>
          <Box display="flex" justifyContent="center" gap={3} flexWrap="wrap">
            <Button
              variant="contained"
              size="large"
              startIcon={<WhatsAppIcon />}
              sx={{
                bgcolor: "#25D366",
                "&:hover": { bgcolor: "#128C7E" },
                borderRadius: 3,
                px: 4,
                py: 1.5,
              }}
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
            >
              WhatsApp: +91 7874501471
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<InstagramIcon />}
              sx={{ borderRadius: 3, px: 4, py: 1.5 }}
              href="https://www.instagram.com/araksha_resin?igsh=MTl3aHIxN2d2c2U5cg=="
              target="_blank"
            >
              Follow on Instagram
            </Button>
          </Box>
        </Paper>
      </Container>

      {/* Image Zoom Modal */}
      <Dialog open={open} onClose={handleClose} maxWidth="lg" fullWidth>
        <IconButton 
          onClick={handleClose} 
          sx={{ 
            position: "absolute", 
            top: 16, 
            right: 16, 
            color: "white", 
            zIndex: 10,
            bgcolor: "rgba(0,0,0,0.5)",
            "&:hover": { bgcolor: "rgba(0,0,0,0.7)" },
          }}
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
      <Box sx={{ bgcolor: "rgba(0,0,0,0.8)", color: "white", py: 4, mt: 6 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Aaraksha Resin Art
              </Typography>
              <Typography variant="body2" sx={{ mb: 2, opacity: 0.8 }}>
                Creating beautiful, personalized resin art pieces that preserve your most precious memories.
              </Typography>
              <Box display="flex" gap={2}>
                <IconButton 
                  color="inherit" 
                  href="https://www.instagram.com/araksha_resin?igsh=MTl3aHIxN2d2c2U5cg=="
                  target="_blank"
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton 
                  color="inherit" 
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                >
                  <WhatsAppIcon />
                </IconButton>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Contact Info
              </Typography>
              <Typography variant="body2" sx={{ mb: 1, opacity: 0.8 }}>
                📱 +91 7874501471
              </Typography>
              <Typography variant="body2" sx={{ mb: 1, opacity: 0.8 }}>
                📧 Available on WhatsApp
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                🕒 Response Time: Within 24 hours
              </Typography>
            </Grid>
          </Grid>
          <Divider sx={{ my: 3, bgcolor: "rgba(255,255,255,0.2)" }} />
          <Typography align="center" variant="body2" sx={{ opacity: 0.6 }}>
            © 2025 Aaraksha Resin Art. All rights reserved. | Handcrafted with ❤️ in India
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}