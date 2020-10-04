import React  from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import AuthContextProvider from './contexts/AuthContext';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Home from './components/theme/Home';
import ProtectedRoute from './components/ProtectedRoute';
import NavbarComp from './components/theme/Navbar';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Router>
          <NavbarComp />
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <ProtectedRoute exact={true} path="/" component={Home} />
          </Switch>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
