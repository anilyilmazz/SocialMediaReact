import React, { useContext, useState } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { sha256 } from 'js-sha256';

function Register() {
    const { register } = useContext(AuthContext);
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [retrypassword, setretrypassword] = useState('');
    const [isunique, setisunique] = useState(true);
    const [passwordSame, setpasswordSame] = useState(false);
    const [success, setsuccess] = useState(false)

    const handleRegister = (e) => {
        e.preventDefault();
        if (password != null && retrypassword != null && retrypassword === password) {
            setpasswordSame(false);
            let userObject = {
                Email: email,
                Password: sha256(password),
                CreatedDate: new Date()
            }

            fetch(`https://api.backendless.com/${process.env.REACT_APP_API_KEY}/data/Accounts`)
                .then(response => response.json())
                .then(function (data) {
                    var controlEmail = data.filter(user => user.Email === userObject.Email);
                    if (controlEmail.length === 0) {
                        const requestOptions = {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'cache-control': 'no-cache',
                                'Access-Control-Allow-Origin': '*'
                            },
                            body: JSON.stringify(userObject)
                        };
                        fetch(`https://api.backendless.com/${process.env.REACT_APP_API_KEY}/data/Accounts`, requestOptions)
                            .then(response => response.json())
                            .then((data) => {
                                register(data.objectId,data.Password);
                                setisunique(true);
                                setpasswordSame(false);
                                setsuccess(true);
                                setemail('');
                                setpassword('')
                                setretrypassword('');
                            });
                    } else {
                        setisunique(false);
                        setpasswordSame(false);
                        setsuccess(false);
                    }
                });
        } else {
            setpasswordSame(true);
            setisunique(true);
            setsuccess(false);
        }
    }
    return (
        <div className="w-50 mx-auto mt-3">
            {isunique ? <div></div> :
                <div className="alert alert-danger" >
                    E-mail kullaniliyor.
                </div>}
            {passwordSame ? <div className="alert alert-danger" >
                Parolalar Ayni Degil.
                </div> :
                <div></div>
            }
             {success ? <div className="alert alert-success" >
                Kullanici basari ile olusturuldu.
                </div> :
                <div></div>
            }
            <form onSubmit={handleRegister}>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" value={email} onChange={(e) => setemail(e.target.value)} required></input>
                </div>
                <div className="form-group">
                    <label >Password</label>
                    <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setpassword(e.target.value)} required></input>
                </div>
                <div className="form-group">
                    <label >Retry Password</label>
                    <input type="password" className="form-control" placeholder="Retry Password" value={retrypassword} onChange={(e) => setretrypassword(e.target.value)} required></input>
                </div>
                <button type="submit" className="btn btn-primary w-100">Register</button>
            </form>
        </div>
    )
}

export default Register
