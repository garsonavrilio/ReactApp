import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App10 from "./App10";
import App11 from "./App11";
import App from "./App";
import App12 from "./App12";

const createRoutes = () => (
    <Router >
      <Route exact path="/todo" component={App}/>
        <Route exact path="/login" component={App10}/>
        <Route exact path="/register" component={App11}/>
        <Route exact path="/home" component={App12}/>
    </Router>
);

export default createRoutes