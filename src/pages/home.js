import React from 'react';

import Footer from "./../components/footer";
import Nav from './../components/nav';
import Header from './../components/header';

const Home = () => {
    return (
        <>  
            <Nav />
            <Header/>
          
                    
            <div class="text-center p-1" style={{backgroundcolor:'#faf9f9'}}>
         "JUGAR SIN CONTROL CAUSA ADICCIÓN. EL JUEGO ES ENTRETENIMIENTO. JUEGA CON MODERACIÓN. PROHIBIDA LA VENTA A MENORES DE EDAD"
                                  </div>                
                <section className="py-1">
                    <div className="container px-5 my-3">
                   
                        <div className="row gx-5">
                        <div class="container p-9">   
                            <section class="">  
                                    <div class="row">
                                     
                                   
                                    <div class="col-lg-3 col-md-0 mb-3 mb-md-0">
                                        <div
                                          class="bg-image hover-overlay ripple shadow-1-strong rounded"
                                          data-ripple-color="light"  
                                          >     
                                                <a rel="noreferrer" href="https://www.supergiros.com.co/">
                                              
                                                    <div
                                                    class="mask"
                                                    style={{backgroundcolor:'rgba(251, 251, 251, 0.2)'}}
                                                  ></div>
                                                         <img class ="ng-star-inserted"
                                                     src="img/super.png" alt="SuperG"
                                                     className="w-100" />
                                                    </a>
                                               
                                        </div>
                                    </div>
                                     
                                    <div className="col-lg-2 col-md-3 mb-4 mb-md-0">
                                        <div
                                          className="bg-image hover-overlay ripple shadow-1-strong rounded"
                                          data-ripple-color="light"  
                                          >     
                                                <a rel="noreferrer" href="https://www.visa.com.co/">
                                              
                                                    <div
                                                    className="mask"
                                                    style={{backgroundcolor:'rgba(251, 251, 251, 0.2)'}}
                                                  ></div>
                                                         <img className ="ng-star-inserted"
                                                     src="img/visa.png" alt="Visa"
                                                     className='w-100' />
                                                    </a>
                                               
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-12 mb-1 mb-md-0">
                                        <div
                                          className="bg-image hover-overlay ripple shadow-1-strong rounded"
                                          data-ripple-color="light"  
                                          >     
                                                <a rel="noreferrer" href="https://www.sured.com.co/">
                                              
                                                    <div
                                                    className="mask"
                                                    style={{backgroundcolor:'rgba(251, 251, 251, 0.2)'}}
                                                  ></div>
                                                         <img className ="ng-star-inserted"
                                                     src="img/sured.png" alt="Sured"
                                                     className="w-100" />
                                                    </a>
                                               
                                        </div>
                                    </div>
                                    <div className="col-lg-1 col-md-7 mb-2 mb-md-0">
                                        <div
                                          className="bg-image hover-overlay ripple shadow-1-strong rounded"
                                          data-ripple-color="light"  
                                          >     
                                                <a rel="noreferrer" href="https://colombia.payu.com/">
                                              
                                                    <div
                                                    className="mask"
                                                    style={{backgroundcolor:'rgba(251, 251, 251, 0.2)'}}
                                                  ></div>
                                                         <img className ="ng-star-inserted"
                                                     src="img/payu.png" alt="payu"
                                                     className="w-100" />
                                                    </a>
                                               
                                        </div>
                                    </div>
                                    <div className="col-lg-1 col-md-6 mb-6 mb-md-0">
                                        <div
                                          className="bg-image hover-overlay ripple shadow-1-strong rounded"
                                          data-ripple-color="light"  
                                          >     
                                                <a rel="noreferrer" href="https://www.mastercard.com.co/">
                                              
                                                    <div
                                                    className="mask"
                                                    style={{backgroundcolor:'rgba(251, 251, 251, 0.2)'}}
                                                  ></div>
                                                         <img className ="ng-star-inserted"
                                                     src="img/MasterCard1.png" alt="MasterC"
                                                     className="w-100" />
                                                    </a>
                                               
                                        </div>
                                    </div>
                                    <div className="col-lg-1 col-md-7 mb-4 mb-md-0">
                                        <div
                                          className="bg-image hover-overlay ripple shadow-1-strong rounded"
                                          data-ripple-color="light"  
                                          >     
                                                <a rel="noreferrer" href="https://www.pse.com.co/inicio">
                                              
                                                    <div
                                                    className="mask"
                                                    style={{backgroundcolor:'rgba(251, 251, 251, 0.2)'}}
                                                  ></div>
                                                         <img className ="ng-star-inserted"
                                                     src="img/pse1.png" alt="Pse"
                                                     className="w-100" />
                                                    </a>
                                               
                                        </div>
                                    </div> 
                                    <div className="col-lg-1 col-md-8 mb-7 mb-md-0">
                                        <div
                                          className="bg-image hover-overlay ripple shadow-1-strong rounded"
                                          data-ripple-color="light"  
                                          >     
                                                <a rel="noreferrer" href="https://www.grupoexito.com.co">
                                              
                                                    <div
                                                    class="mask"
                                                    style={{backgroundcolor:'rgba(251, 251, 251, 0.2)'}}
                                                  ></div>
                                                         <img class ="ng-star-inserted"
                                                     src="img/logoExit.png" alt="Exito"
                                                     class="w-100" />
                                                    </a>
                                               
                                        </div>
                                    </div>
                  
                                 </div>
                        </section>
                        </div>
                        </div>
                
                       
                    </div>
                </section>
            
                <Footer />
            </>
        );

 };
    export default Home;