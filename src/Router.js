import React from 'react'; 
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "./LoginPage";
import App from "./App";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route path="/app" component={App} />
        </Switch>
    </BrowserRouter>
);

export default Router   ;