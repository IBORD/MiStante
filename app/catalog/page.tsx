// app/catalog/page.tsx
'use client'; // Necessário para hooks RTK Query e outros hooks React

import React from 'react';
import { Header } from '@/components/organisms/Header';
import { Footer } from '@/components/organisms/Footer';
import { ImageCard } from '@/components/molecules/imagecard/ImageCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';


import { useGetCatalogItemsQuery, CatalogItem } from '@/features/api/apiSlice';

export default function CatalogPage() {

  const { data: catalogItems, error, isLoading, isFetching } = useGetCatalogItemsQuery();



  if (isLoading || isFetching) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <Box component="main" sx={{ flexGrow: 1, py: 8, px: 3, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <CircularProgress />
        </Box>
        <Footer />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <Box component="main" sx={{ flexGrow: 1, py: 8, px: 3 }}>
          <Container maxWidth="lg">
            <Alert severity="error">Erro ao carregar o catálogo. Tente novamente mais tarde.</Alert>
          </Container>
        </Box>
        <Footer />
      </Box>
    );
  }

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
            component="h1"
            gutterBottom
            align="center"
            sx={{ mb: 6, fontWeight: "bold", color: "text.primary" }}
          >
            Our Catalog
          </Typography>
          {catalogItems && catalogItems.length > 0 ? (
            <Grid container spacing={4}>
              {catalogItems.map((item) => (
                <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>

                  <ImageCard id={String(item.id)} src={item.thumbnailUrl} title={item.title} />
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