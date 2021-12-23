import { Routes, Route, useLocation, Navigate } from "react-router-dom";


import Navs from "./components/navs";
import Dasbo from "./pages/dasbo";
import Eventos from "./pages/eventos";
import Listareventos from "./pages/listareventos";



function Logeo() {
  return (
  <>
       
       <Navs/>;

        <Routes>
              <Route path="/dasbo" element={<Dasbo />} />
              <Route path="/eventos" element={<Eventos />} />
              <Route path="/listareventos" element={<Listareventos />} />
         </Routes>
       
        
     </>
  );

}
    export default Logeo;


