import React, { Component, createContext } from 'react';
export const AuthContext = createContext();

class AuthContextProvider extends Component {
    state = {
        id : '',
        isAuthenticated : false
    }
    
    login = (id) => {
        this.setState({
            id : id,
            isAuthenticated : true
        })
        console.log(this.state);
    }

    register = (id) => {
        this.setState({
            id : id,
            isAuthenticated : true
        })
    }

    render() {
        return (
            <AuthContext.Provider value={{ ...this.state, login: this.login, register: this.register,state : this.state }}>
                {this.props.children}
            </AuthContext.Provider>
        );
    }
}

export default AuthContextProvider;