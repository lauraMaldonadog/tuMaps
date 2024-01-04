import React, { useState } from 'react';
import {
  Button,
  Grid,
  TextField,
  Box,
  Card,
  CardHeader,
  CardContent,
  Typography,
} from '@mui/material';
import { MapaLayout } from '../layout/MapaLayout';

export const PerfilPage = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    forceUpdate();
  };

  const forceUpdate = useForceUpdate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado', { name, email, password, age, image });
  };

  return (
    <MapaLayout title="Editar Perfil">
     <Box
  sx={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    margin: '0 auto', 
    width: '80%', 
  }}
>

        <form onSubmit={handleSubmit} style={{ width: '800px' }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card sx={{
                width: '50%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                mb: 4,
              }}>
                <CardHeader title="Foto" />
                <CardContent sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                  <img
                    className="img-account-profile rounded-circle mb-2"
                    src={image ? URL.createObjectURL(image) : "https://cdn-icons-png.flaticon.com/512/456/456212.png"}
                    alt=""
                    style={{
                      width: '500%',
                      maxWidth: '160px',
                      height: 'auto',
                    }}
                  />
                  
                  <input
                    type="file"
                    id="image-input"
                    onChange={handleImageChange}
                    accept="image/*"
                    style={{ display: 'none' }}
                  />
                  <label htmlFor="image-input">
                    
                  </label>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Grid container spacing={2}>
                <Grid item xs={22}>
                  <TextField
                    label="Nombre completo"
                    type="text"
                    placeholder="Nombre completo"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    label="Correo"
                    type="email"
                    placeholder="correo@google.com"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    label="Contraseña"
                    type="password"
                    placeholder="Contraseña"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    label="Edad"
                    type="number"
                    placeholder="Edad"
                    fullWidth
                  />
                </Grid>

              </Grid>
            </Grid>
          </Grid>
        </form>
      </Box>
    </MapaLayout>
  );
};

function useForceUpdate() {
  const [, setValue] = useState(0);
  return () => setValue((value) => value + 1);
}
