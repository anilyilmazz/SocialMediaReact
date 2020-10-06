import React, { Component, createContext } from 'react';
export const AuthContext = createContext();

class AuthContextProvider extends Component {
    state = {
        email : '',
        isAuthenticated : false
    }
    
    login = (email) => {
        this.setState({
            email : email,
            isAuthenticated : true
        })
    }

    register = (email) => {
        this.setState({
            email : email,
            isAuthenticated : true
        })
    }

    logout = () => {
        this.setState({
            email : '',
            isAuthenticated : false
        })
    }

    render() {
        return (
            <AuthContext.Provider value={{ ...this.state, login: this.login, register: this.register,state : this.state,logout : this.logout }}>
                {this.props.children}
            </AuthContext.Provider>
        );
    }
}

export default AuthContextProvider;