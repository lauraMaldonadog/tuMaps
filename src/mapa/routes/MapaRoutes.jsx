import { Navigate, Route, Routes } from 'react-router-dom';
import { MapaPage } from '../page/MapaPage';
import MapaMundi from '../components/MapaMundi'; 
import BarriosMedellin from '../components/BarriosMedellin'; 
import { UpdatePage } from '../page/UpdatePage';
import { PerfilPage } from '../page/PerfilPage';



export const MapaRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<MapaPage />} />
         <Route path="/mapaMundi" element={<MapaMundi />} />
         <Route path="/barriosMedellin" element={<BarriosMedellin />} />
         <Route path="/updatePage" element={<UpdatePage />} />
         <Route path="/perfilPage" element={<PerfilPage/>} />

         <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
   );
};
