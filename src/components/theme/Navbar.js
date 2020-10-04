import React, { useContext } from 'react';
import {
    Link,
    useHistory
} from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const NavbarComp = () => {
    const { state, logout } = useContext(AuthContext)
    const history = useHistory();

    const logoutAndRedirect = () => {
        logout();
        history.push('/');
    }
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        {/* <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li> */}
                    </ul>

                    {state.isAuthenticated ?
                        <div>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <button className="btn btn-link shadow-none" onClick={() => logoutAndRedirect()}>Log Out</button>
                                </li>
                            </ul>
                        </div> :
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <button className="btn btn-link nav-link shadow-none" onClick={() => history.push('/login')}>Login</button>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-link nav-link shadow-none" onClick={() => history.push('/register')}>Register</button>
                            </li>
                        </ul>}
                </div>
            </nav>
        </div>
    );
}

export default NavbarComp;