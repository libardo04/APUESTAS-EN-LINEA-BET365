import React from "react";
import { Link, } from "react-router-dom";

const Nav = () => {
       return ( 
                 <nav className="navbar navbar-expand-lg navbar-dark bg-primary " style={{backgroundcolor:'#073d8d'}}> 
                    <div className="container-fluid">
                    <Link to="/" >
                       <a title="Logo" href="/"><img src="img/logo.png" alt="Logo" /></a>
                       </Link>

                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                           aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                         </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>

                         <form className="d-flex">
                              <Link to="/" >
                                <button type="submit" className="btn btn-primary ">Plataforma</button>
                                  </Link>
                                
                                <Link to="/eventos" >
                                <button type="submit" className="btn btn-primary ">Eventos</button>
                                  </Link>

                                <Link to="/HistApuesta" >
                                <button type="submit" className="btn btn-primary ">Apuestas</button>
                                  </Link>

                                <Link to="/login" >
                                <button type="submit" className="btn btn-primary ">Iniciar secion</button>
                                  </Link>
                                <Link to="/register">
                                <button type="submit" className="btn btn-primary">Registrarse</button>
                                     </Link>
                              </form>
            
                 </div>
             </div>
       </nav>
     );

    };          
         export default Nav;

