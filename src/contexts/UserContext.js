import React, { Component, createContext } from 'react';
export const UserContext = createContext();

class UserContextProvider extends Component {
    state = {
        users : []
    }
    
    setUsers = (userList) =>{
        this.setState({
            users : userList
        });
    }


    render() {
        return (
            <UserContext.Provider value={{ ...this.state,userstate : this.state,setUsers : this.setUsers }}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

export default UserContextProvider;