import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import Home from "./pages/home";
import Api from "./pages/api";
import Login from "./pages/login";
import Register from "./pages/register";
import Nav from "./components/nav";



function App() {
  return (
  <>
       <Nav/>;
       

       <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/api" element={<Api />} />
       <Route path="/register" element={<Register />} />
       <Route path="/login" element={<Login />} />
        </Routes>



        
     </>
  );
}
    export default App;
