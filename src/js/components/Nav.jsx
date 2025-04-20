import React from "react";


export const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg nav-color">
            <div className="container-fluid">
                <a className="navbar-brand text-light ms-5 my-2 fs-3" href="#">Ofertas Wom</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto gap-5 mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link text-light text-nav-dec" aria-current="page" href="#">Planes Empresas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light text-nav-dec" aria-current="page" href="#">Equipos</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                    </form>
                    </div>
                </div>
                </nav>
            );
};