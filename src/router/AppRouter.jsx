import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { MapaRoutes } from "../mapa/routes/MapaRoutes"
import {UpdatePage} from "../mapa/page/UpdatePage"
import { PerfilPage } from "../mapa/page/PerfilPage"




export const AppRouter = () => {
  return (
    <Routes>
        {/* {Login y registro} */}
       <Route path="/auth/*" element={<AuthRoutes />}/>
       <Route path="/page/updatePage" element={<UpdatePage/>} /> 
       <Route path="/page/perfilPage" element={<PerfilPage/>} /> 


        {/* {Mapa} */}
        <Route path="/*" element={<MapaRoutes/>}/>


    </Routes>
  )
}
