import { Header } from '@/components/organisms/Header';
import { Footer } from '@/components/organisms/Footer';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function AboutPage() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
          px: 3,
          bgcolor: 'grey.100',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 4, fontWeight: 'bold' }}>
            About MiStante
          </Typography>
          <Typography variant="body1" paragraph>
            MiStante is your personal platform for cataloging movies, games, books, and more. Organize your collections, mark your favorites, and discover new items.
          </Typography>
          <Typography variant="body1" paragraph>
            This project was developed as part of a challenge, using Next.js, Redux Toolkit, RTK Query, Material-UI, and Tailwind CSS.
          </Typography>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}