import React from "react";


const Login = () => {
       return ( 
        
         <section className="py-1">
          <div class="col-md-10 mx-auto col-lg-5" >
        <form class="p-4 p-md-5 border rounded-3 bg-light">
          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" autofocus/>
            <label for="floatingInput">Dirección de email</label>
          </div>
          <div class="form-floating mb-3">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
            <label for="floatingPassword">Contraseña</label>
          </div>
          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Recordar
            </label>
          </div>
          <button class="w-100 btn btn-lg btn-primary" type="submit">Iniciar sesión</button>
          <hr class="my-4"/>
          <small class="text-muted">Inicia sesión y vive toda una experiencia Hotelera.</small>
        </form>
      </div>
          
        </section>
       
       
       )
    };
      export default Login;