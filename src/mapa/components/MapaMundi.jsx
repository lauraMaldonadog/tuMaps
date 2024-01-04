import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxDraw from '@mapbox/mapbox-gl-draw';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { MapaLayout } from '../layout/MapaLayout';


mapboxgl.accessToken = 'pk.eyJ1IjoiamhvbmFiYyIsImEiOiJjbHB1bW1hd3kwbHV6Mmtxa3NvYmUydjg1In0.sBPJYzicN_Bwfl-JFB1eXg';

export default function MapaMundi() {
  const contenedorMapa = useRef(null);
  const mapa = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (mapa.current) return;
    mapa.current = new mapboxgl.Map({
      container: contenedorMapa.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom
    });

    const marcador = new mapboxgl.Marker()
      .setLngLat([lng, lat])
      .addTo(mapa.current);

    const dibujo = new MapboxDraw();
    mapa.current.addControl(dibujo)

    mapa.current.on('move', () => {
      setLng(mapa.current.getCenter().lng.toFixed(4));
      setLat(mapa.current.getCenter().lat.toFixed(4));
      setZoom(mapa.current.getZoom().toFixed(2));
    });

    mapa.current.on('click', (e) => {
      const { lng, lat } = e.lngLat;

      marcador.setLngLat([lng, lat]);

      setLng(lng.toFixed(4));
      setLat(lat.toFixed(4));
    });

    const poligono = {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [lng - 0.1, lat - 0.1],
            [lng + 0.1, lat - 0.1],
            [lng + 0.1, lat + 0.1],
            [lng - 0.1, lat + 0.1],
            [lng - 0.1, lat - 0.1],
          ],
        ],
      },

    };


    dibujo.add(poligono);
  }, [lng, lat, zoom]);

  return (
    <MapaLayout title="Barrios de Medellín">
      {/* Ajusta el estilo para que ocupe el 100% del ancho y la altura disponible */}
      <Grid item xs={12} sx={{ mt: 2, width: '100%', height: '100%' }}>
        <div ref={contenedorMapa} style={{ width: '100%', height: '100%' }} />
      </Grid>
    </MapaLayout>
  );
}