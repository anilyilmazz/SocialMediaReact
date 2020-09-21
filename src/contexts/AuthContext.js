import React, { Component, createContext } from 'react';
export const AuthContext = createContext();

class AuthContextProvider extends Component {
    state = {
        id : '',
        password : '',
        isAuthenticated : false
    }
    
    login = () => {
        fetch(`https://api.backendless.com/${process.env.REACT_APP_API_KEY}/data/Accounts`)
            .then(response => response.json())
            .then(data => console.log(data));
    }

    register = (id,password) => {
        this.setState({
            id : id,
            password : password,
            isAuthenticated : true
        })
        console.log(this.state);
    }

    render() {
        return (
            <AuthContext.Provider value={{ ...this.state, login: this.login, register: this.register, newRegister: this.newRegister }}>
                {this.props.children}
            </AuthContext.Provider>
        );
    }
}

export default AuthContextProvider;