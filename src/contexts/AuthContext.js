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
    }

    register = (id) => {
        this.setState({
            id : id,
            isAuthenticated : true
        })
    }

    logout = () => {
        this.setState({
            id : '',
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