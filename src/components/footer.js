import React from "react";

const Footer = () => {
    return <footer className="bg-dark py-4 mt-auto">
            <div className="container px-5">
                <div className="row align-items-center justify-content-between flex-column flex-sm-row">
                    <div className="col-auto"><div className="small m-0 text-white">
                        Mision tic 2021 &copy; 1244 - Equipo 2</div></div>
                    <div className="col-auto">
                        <a className="link-light small" href="#!">Privacidad</a>
                        <span className="text-white mx-1">&middot;</span>
                        <a className="link-light small" href="#!">Terminos</a>
                        <span className="text-white mx-1">&middot;</span>
                        <a className="link-light small" href="#!">Contactanos</a>
                    </div>
                </div>
            </div>
        </footer>;
} ;
export default Footer;