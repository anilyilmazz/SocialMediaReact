import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthContextProvider from './contexts/AuthContext';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
ReactDOM.render((
  <AuthContextProvider>
    <Router>
      <Route path="/" component={App} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Router>
  </AuthContextProvider>),
  document.getElementById('root')
);


serviceWorker.unregister();
