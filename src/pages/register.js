import React from "react";
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from "yup";

// const schema = yup.object({
//     n_identificacion: yup.string().required(),
//     lugar_expedicion: yup.string().required(),
//     f_expedida: yup.string().required(),
//     age: yup.number().positive().integer().required(),
    
    // }).required();

    const Register = () => {
       
        return (
      
        <div className="container">
          <>
          <h3 className="text-primary">¡EMPIEZA TU AVENTURA EN BET365 !</h3>
          <div className="col-md-6 col-lg-12 mb-md-5">
                 <h12 className="mb-12">¡Apreciado Usuario de Bet365,recuerde que debe registrar sus datos de manera completa y correcta para evitar inconvenientes en el proceso de validacion y retiro de ganancias.  !</h12>
                 </div>
          </>
          <div class="text-primary text-opacity-75">
                       
              <div className="row g-5">
                <div className="col-md-6 col-lg-4 order-md-last">
              <img className="img-fluid rounded-3 my-5" src="/img/regist.png" alt="..." /> 
                 </div>
     
                <div className="col-md-7 col-lg-8">
                  <h4 className="mb-4">Registro de Usuario</h4>
                  <form className="needs-validation" novalidate>
                    <div className="row g-3">
                      <div className="col-sm-4">
                        <label for="firstName" className="form-label">*Nombres</label>
                        <input type="text" className="form-control" id="firstName" placeholder="" value="" required/>
                        <div className="invalid-feedback">
                          Valid first name is required.
                        </div>
                      </div>
          
                      <div className="col-sm-4">
                        <label for="lastName" className="form-label">*Apellidos</label>
                        <input type="text" className="form-control" id="lastName" placeholder="" value="" required/>
                        <div className="invalid-feedback">
                          Valid last name is required.
                        </div>
                      </div>

                      <div className="col-3">
                        <label for="username" className="form-label">*Nombre de Usuario</label>
                        <div className="input-group has-validation">
                          <span className="input-group-text">@</span>
                          <input type="text" className="form-control" id="username" placeholder="Username" required/>
                        <div className="invalid-feedback">
                            Your username is required.
                          </div>
                        </div>
                      </div>
          
                      <div className="col-md-5">
                        <label for="state" className="form-label">Tipo de Documento</label>
                        <select className="form-select" id="state" required>
                          <option value="">Choose...</option>
                          <option>Cedula de ciudadania</option>
                          <option>Pasaporte</option>
                         </select>
                        <div className="invalid-feedback">
                          Please provide a valid state.
                        </div>
                      </div>


                      <div className="col-sm-4">
                        <label for="lastName" className="form-label">*Numero de documento</label>
                        <input type="text" className="form-control" id="lastName" placeholder="" value="" required/>
                        <div className="invalid-feedback">
                          Valid last name is required.
                        </div>
                      </div>

                      <div className="col-sm-3">
                        <label for="lastName" className="form-label">*Fecha de expedicion</label>
                        <input type="text" className="form-control" id="lastName" placeholder= " Dia - Mes - Año" value="" required/>
                        <div className="invalid-feedback">
                          Valid F.expedicion del documento is required.
                        </div>
                      </div>

                      <div className="col-sm-3">
                        <label for="lastName" className="form-label">*N° Telefono movil</label>
                        <input type="text" className="form-control" id="lastName" placeholder="Ej:300 432 5769" value="" required/>
                        <div className="invalid-feedback">
                          Valid N° Telefono is required.
                        </div>
                      </div>

                      <div className="col-sm-4">
                        <label for="lastName" className="form-label">*Contraseña</label>
                        <input type="text" className="form-control" id="lastName" placeholder="Crear contaseña  " value="" required/>
                        <div className="invalid-feedback">
                          Valor requiredo Contraseña.
                        </div>
                      </div>

                      <div className="col-sm-4">
                        <label for="lastName" className="form-label">*Confirmar Contraseña</label>
                        <input type="text" className="form-control" id="lastName" placeholder="*************  " value="" required/>
                        <div className="invalid-feedback">
                        Valor requiredo Confirmar contraseña.
                        </div>
                      </div>

                      <div className="col-6">
                        <label for="email" className="form-label">Email <span className="text-muted">(Optional)</span></label>
                        <input type="email" className="form-control" id="email" placeholder="you@example.com"/>
                        <div className="invalid-feedback">
                          Please enter a valid email address for shipping updates.
                        </div>
                      </div>
          
                      <div className="col-6">
                        <label for="address" className="form-label">Direccion</label>
                        <input type="text" className="form-control" id="address" placeholder="Ej:(Cll/Cra)-#57-87" required/>
                        <div className="invalid-feedback">
                          Please enter your shipping address.
                        </div>
                      </div>
          
                              
                      <div className="col-md-5">
                        <label for="country" className="form-label">Pais</label>
                        <select className="form-select" id="country" required>
                          <option value="">Choose...</option>
                          <option>United States</option>
                          <option>Colombia</option>
                          <option>Peru</option>
                          <option>Argentina</option>
                        </select>
                        <div className="invalid-feedback">
                          Please select a valid country.
                        </div>
                      </div>
          
                      <div className="col-md-4">
                        <label for="state" className="form-label">State/Departamento</label>
                        <select className="form-select" id="state" required>
                          <option value="">Choose...</option>
                          <option>Cundinamarca</option>
                          <option>Magdalena</option>
                          <option>Atlantico</option>
                          <option>Bolivar</option>
                        </select>
                        <div className="invalid-feedback">
                          Please provide a valid state.
                        </div>
                      </div>
          
                      <div className="col-md-3">
                        <label for="zip" className="form-label">Municipio</label>
                        <input type="text" className="form-control" id="zip" placeholder="" required/>
                        <div className="invalid-feedback">
                          Municipio code required.
                        </div>
                      </div>
                    </div>
          
                    <hr className="my-4"/>
          
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="same-address"/>
                      <label className="form-check-label" for="same-address">La dirección de envío es la misma que mi dirección de facturación</label>
                    </div>
          
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="save-info"/>
                      <label className="form-check-label" for="save-info">Guarde esta información para la próxima vez</label>
                    </div>
          
                    <hr className="my-4"/>
          
                    <h4 className="mb-3">Pago</h4>
          
                    <div className="my-3">
                      <div className="form-check">
                        <input id="credit" name="paymentMethod" type="radio" className="form-check-input" checked required/>
                        <label className="form-check-label" for="credit">Credit card</label>
                      </div>
                      <div className="form-check">
                        <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required/>
                        <label className="form-check-label" for="debit">Debit card</label>
                      </div>
                      <div className="form-check">
                        <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required/>
                        <label className="form-check-label" for="paypal">PayPal</label>
                      </div>
                    </div>
          
                    <div className="row gy-3">
                      <div className="col-md-6">
                        <label for="cc-name" className="form-label">Name on card</label>
                        <input type="text" className="form-control" id="cc-name" placeholder="" required/>
                        <small className="text-muted">Full name as displayed on card</small>
                        <div className="invalid-feedback">
                          Name on card is required
                        </div>
                      </div>
          
                      <div className="col-md-6">
                        <label for="cc-number" className="form-label">Credit card number</label>
                        <input type="text" className="form-control" id="cc-number" placeholder="" required/>
                        <div className="invalid-feedback">
                          Credit card number is required
                        </div>
                      </div>
          
                      <div className="col-md-3">
                        <label for="cc-expiration" className="form-label">Expiration</label>
                        <input type="text" className="form-control" id="cc-expiration" placeholder="" required/>
                        <div className="invalid-feedback">
                          Expiration date required
                        </div>
                      </div>
          
                      <div className="col-md-3">
                        <label for="cc-cvv" className="form-label">CVV</label>
                        <input type="text" className="form-control" id="cc-cvv" placeholder="" required/>
                        <div className="invalid-feedback">
                          Security code required
                        </div>
                      </div>
                    </div>
          
                    * <hr class="my-4"/> 
          
                    <button class="w-100 btn btn-primary btn-lg" type="submit">Registrarse</button>
                  </form>
                </div>
              </div>
              </div>
          
            <footer class="my-5 pt-5 text-muted text-center text-small">
              <p class="mb-1">&copy; Mision Tic 2021</p>
             
            </footer>
          </div>
        
            
                 )
    };

             export default Register;

            