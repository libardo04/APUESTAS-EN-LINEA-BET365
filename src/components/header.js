
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
                   }
            </header>
       
};
    export default Header;