import React from 'react'
import './App.css'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import MainPage from "./pages/MainPage";

export default () => {

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <MainPage/>
                </Route>
                <Route path="/search">
                    <SearchPage/>
                </Route>
            </Switch>
        </Router>
    )
}
