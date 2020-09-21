import React from 'react';
import {
    Link
  } from 'react-router-dom';

const NavbarComp = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <a className="navbar-brand" href="/">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to='/login' >Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/register' >Register</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default NavbarComp;