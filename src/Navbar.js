import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <span className="navbar-brand">CRM</span>

                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/orders">Orders</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/clients">Clients</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/services">Services</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/results">Results</Link>
                        </li>

                        {/*<Link to="/product/123">Product 123</Link>*/}

                    </ul>
                    <span className="navbar-text">
        Clients & Orders App
      </span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;