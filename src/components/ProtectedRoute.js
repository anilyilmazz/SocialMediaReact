import React, { useContext, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext';

function ProtectedRoute(props) {
    const Component = props.component;
    const { state } = useContext(AuthContext)
    useEffect(() => {
        console.log("GIRDI")
    })
    return (
        <div>
            {state.isAuthenticated ? (
                <div>
                    <Component />
                </div>
            ):(
                <div>
                    <Redirect to={{ pathname: '/login' }} />
                </div>
            )}
        </div>
    )
}

export default ProtectedRoute;