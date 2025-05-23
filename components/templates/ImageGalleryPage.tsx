import React from "react";
import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";
import { ImageCard } from "@/components/molecules/imagecard/ImageCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface CatalogItem {
  id: string;
  src: string;
  title: string;
}

interface ImageGalleryPageProps {
  images: CatalogItem[];
}

export function ImageGalleryPage({ images }: ImageGalleryPageProps) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
          px: 3,
          bgcolor: "grey.100",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            align="center"
            sx={{ mb: 6, fontWeight: "bold", color: "text.primary" }}
          >
            Nosso Catálogo
          </Typography>
          {images && images.length > 0 ? (
            <Grid container spacing={4}>
              {images.map((item) => (
                <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
                  <ImageCard id={item.id} src={item.src} title={item.title} />
                </Grid>
              ))}
            </Grid>
          ) : (
            <Typography
              variant="subtitle1"
              align="center"
              color="text.secondary"
            >
              Nenhum item para exibir no catálogo.
            </Typography>
          )}
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}
