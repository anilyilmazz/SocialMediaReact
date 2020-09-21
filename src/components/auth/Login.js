import React, {useContext} from 'react'
import { AuthContext } from '../../contexts/AuthContext';

function Login() {

    const {login} = useContext(AuthContext);
    const handleForm = (e) => {
        e.preventDefault();
        login();
        
    }
    return (
        <div className="w-50 mx-auto mt-3">
            <form onSubmit = {handleForm} >
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className ="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                </div>
                <div className ="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                </div>
                <button type="submit" className="btn btn-primary w-100">Login</button>
            </form>
        </div>
    )
}

export default Login
