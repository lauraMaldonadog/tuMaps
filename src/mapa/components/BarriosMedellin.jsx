import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxDraw from '@mapbox/mapbox-gl-draw';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { MapaLayout } from '../layout/MapaLayout';


mapboxgl.accessToken = 'pk.eyJ1IjoiamhvbmFiYyIsImEiOiJjbHB1bW1hd3kwbHV6Mmtxa3NvYmUydjg1In0.sBPJYzicN_Bwfl-JFB1eXg';

export default function BarriosMedellin() {
  const contenedorMapa = useRef(null);
  const mapa = useRef(null);
  const [lng, setLng] = useState(-75.5812);
  const [lat, setLat] = useState(6.2442);
  const [zoom, setZoom] = useState(12);

  useEffect(() => {
    if (mapa.current) return;

    mapa.current = new mapboxgl.Map({
      container: contenedorMapa.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom,
      maxBounds: [
        [-75.77, 6.13],
        [-75.44, 6.37],
      ],
    });

    const marcador = new mapboxgl.Marker()
      .setLngLat([lng, lat])
      .addTo(mapa.current);

    const draw = new MapboxDraw();
    mapa.current.addControl(draw);

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

    fetch('https://usc1.contabostorage.com/d069ea98e2df4b0e9e99b1e7b2ca9a58:pruebasceluweb/jsonciudad/medellin.geojson')
      .then(response => response.json())
      .then(geojsonData => {
        if (geojsonData && geojsonData.features && geojsonData.features.length > 0) {
          geojsonData.features.forEach(feature => {
            draw.add(feature);
          });

          const bounds = geojsonData.features.reduce((bounds, feature) => {
            feature.coordinates[0].forEach(coordinate => {
              bounds.extend(coordinate);
            });
            return bounds;
          }, new mapboxgl.LngLatBounds());

          mapa.current.fitBounds(bounds, { padding: 20 });
        } else {
          console.error('El GeoJSON no tiene features o está vacío.');
        }
      })
      .catch(error => console.error('Error al obtener los datos GeoJSON:', error));
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
