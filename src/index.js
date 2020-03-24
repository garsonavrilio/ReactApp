import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import createRoutes from "./routes";

const routes = createRoutes();

ReactDOM.render(
    routes,
    document.getElementById('root')
);