    import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
    import "./App.css";
    import LoginForm from "./components/validation";
    import React from "react";

    const AppRoutes = () => {
    return (
        <Router>
        <Switch>
            <main>
            <Route exact path="/" component={LoginForm} />
            </main>
        </Switch>
        </Router>
    );
    };

    export default AppRoutes;
