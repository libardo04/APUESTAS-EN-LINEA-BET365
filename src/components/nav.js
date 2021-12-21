import React from "react";

const Nav = () => {
       return ( 
       
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary " style={{backgroundcolor:'#073d8d'}}> 
            <div className="container-fluid">
        <a title="Logo" href="index.html"><img src="img/logo.png" alt="Logo" /></a>
          <a className="text-warning" href="index.html" >   Apuestas en linea</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button type="submit" className="btn btn-success ">Inicio</button>
              <button type="submit" className="btn btn-primary">Registrarse</button>
            
            </form>

          </div>
        </div>
 </nav>
        );



};
export default Nav;