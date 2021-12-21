
import React from "react";


const Header = () => {
    return  <header className="bg- py-5">
        
                { <div className="container px-2">
 
                      <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel" >
                         <div class="carousel-inner">
                             <div class="carousel-item active" data-bs-interval="2000">
                                 <img src="img/img3.png" class="rounded mx-auto d-block" alt="..."/>
                                 </div>
                             <div class="carousel-item" data-bs-interval="2000">
                                 <img src="img/img5.png" class="rounded mx-auto d-block" alt="..."/>
                                 </div>
                             <div class="carousel-item " data-bs-interval="2000">
                                 <img src="img/img2.png" class="rounded mx-auto d-block" alt="..."/>
                                 </div>
                             <div class="carousel-item" data-bs-interval="2000">
                                 <img src="img/img6.png" class="rounded mx-auto d-block" alt="..."/>
                                 </div>
                             </div>    
                          </div> 
                         <div>
     
     
                         </div>
                     </div>
                    /* <div className="row gx-5 align-items-center justify-content-center">
                        <div className="col-lg-8 col-xl-7 col-xxl-6">
                            <div className="my-5 text-center text-xl-start">
                                <h1 className="display-5 fw-bolder text-white mb-2">Curling      ¡Apuestale y diviertete!   </h1>
                                <p className="lead fw-normal text-white-50 mb-4">No hay nada como la sensación de adrenalina recorriendo nuestro cuerpo en medio de un juego de Curling!</p>
                                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                                    <a className="btn btn-primary btn-lg px-4 me-sm-3" href="#features">Login</a>
                                    <a className="btn btn-outline-light btn-lg px-4" href="#!">Registrarse</a>
                                </div>
                            </div>
                        </div>
                        <div 
                        className="col-xl-5 col-xxxl-6 d-none d-xl-block text-center"><img className="img-fluid rounded-3 my-5" src="/imgPrim.gif" alt="..." /></div>
                    </div> */
                    }
            </header>
    
    
};

export default Header;