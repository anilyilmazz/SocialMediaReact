import React, { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../../contexts/AuthContext';
import { sha256 } from 'js-sha256';
import { useHistory } from "react-router"

function Login() {

    const { login, state } = useContext(AuthContext);
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [error, seterror] = useState(false);
    const [isSucces, setisSucces] = useState(false)
    let history = useHistory()

    useEffect(() => {
        if(state.isAuthenticated){
                history.push('/')
        }
    },)

    const handleLogin = (e) => {
        e.preventDefault();
        seterror(false);
        setisSucces(false);
        
        let userObject = {
            Email: email,
            Password: sha256(password)
        }

        fetch(`https://api.backendless.com/${process.env.REACT_APP_API_KEY}/data/Accounts`)
            .then(response => response.json())
            .then(function (data) {
                var filterUserList = data.filter(user => user.Email === userObject.Email);
                if (filterUserList.length > 0){
                    if (filterUserList[0].Password === userObject.Password) {
                        setisSucces(true)                      
                        login(filterUserList[0].objectId);
                    }else {
                        seterror(true);
                    }
                }
            });
    }

    return (
        <div className="w-50 mx-auto mt-3">
            {isSucces ? <div className="alert alert-success">
                Basariyla Giris Yaptiniz.
                </div> :
                <div></div>
            }
            {error ? <div className="alert alert-danger">
                Kullanici Adi ve ya parola hatali.
                </div> :
                <div></div>
            }
            <form onSubmit={handleLogin} autoComplete="on">
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" value={email} onChange={(e) => setemail(e.target.value)}></input>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setpassword(e.target.value)}></input>
                </div>
                <button type="submit" className="btn btn-primary w-100">Login</button>
            </form>
        </div>
    )
}

export default Login
