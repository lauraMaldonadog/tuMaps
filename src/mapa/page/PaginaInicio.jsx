// HomePage.js
import React from 'react';
import { Button, Container, Typography } from '@mui/material';

const HomePage = () => {
  return (
    <Container>
      <Typography variant="h1" align="center" sx={{ mt: 24 , fontWeight: 'bold'}}>
        Bienvenido a TUMAPS
      </Typography>
      <Typography variant="h3" align="center" sx={{ mt: 2 }}>
        ¡Explora y descubre lo que esto te ofrece!
      </Typography>
    </Container>
  );
};

export default HomePage;
