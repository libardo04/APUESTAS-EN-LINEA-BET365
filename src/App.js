import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Home from "./pages/home";
import Api from "./api";
import Login from "./pages/login";
import Register from "./pages/register";
import Nav from "./components/Nav";
import Eventos from "./pages/evento/eventos";
import ListaEventos from "./pages/evento/listaEventos";
import HistApuesta from "./pages/HistApuesta";

function App() {
  return (
  <>
       <Nav/>;
   
       <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/api" element={<Api />} />
       <Route path="/eventos" element={<Eventos />} />
       <Route path="/listareventos" element={<ListaEventos />} />
       <Route path="/register" element={<Register />} />
       <Route path="/HistApuesta" element={<HistApuesta />} />
       <Route path="/login" element={<Login />} />
        </Routes>
  
     </>
  );
}
    export default App;


