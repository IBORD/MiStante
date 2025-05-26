"use client";
import { Header } from '@/components/organisms/Header';
import { Footer } from '@/components/organisms/Footer';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@/components/atoms/Button';
import Grid from '@mui/material/Grid';

export default function ContactPage() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Formulário de contato enviado');
    alert('Mensagem enviada (simulação)!');
  };

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
        <Container maxWidth="sm">
          <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 4, fontWeight: 'bold' }}>
            Contact
          </Typography>
          <Typography variant="body1" paragraph align="center" sx={{ mb: 4 }}>
            Do you have any questions or suggestions? Contact us!
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Your Name"
                  name="name"
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Your Email"
                  name="email"
                  type="email"
                  variant="outlined"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  variant="outlined"
                  multiline
                  rows={4}
                  required
                />
              </Grid>
              <Grid item xs={12} sx={{ textAlign: 'center' }}>
                <Button variant="primary" type="submit" className="bg-yellow-600 hover:bg-yellow-700">
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </form>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}