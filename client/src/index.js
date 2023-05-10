import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import 'antd/dist/reset.css';
import './index.css';

// const token = localStorage.getItem('auth_jwt_token');
const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <App/>
root.render(  element  );
  