import React, { useContext } from 'react';
import {
     useHistory
} from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';


const NavbarComp = () => {
    const { state, logout } = useContext(AuthContext)
    const history = useHistory();

    const logoutAndRedirect = () =>{
        logout();
        history.push('/');
    }
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
                    {state.isAuthenticated ?
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <button className="btn btn-link shadow-none" onClick = {() => logoutAndRedirect()}>Log Out</button>
                            </li>
                        </ul> :
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <button className="btn btn-link nav-link shadow-none"  onClick = {() => history.push('/login')}>Login</button>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-link nav-link shadow-none" onClick = {() => history.push('/register')}>Register</button>
                            </li>
                        </ul>}
                </div>
            </nav>
        </div>
    );
}

export default NavbarComp;