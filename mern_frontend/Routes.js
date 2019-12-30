import React from "react"
import {Route, Switch} from "react-router-dom"
import Home from "./pages/home"
import Users from "./pages/add"
import Update from "./pages/update"
//import update from "./pages/update"
export default function(){
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
         
            <Route exact path="/add" component={Users}/>
            <Route exact path="/update/:id" component={Update}/>
        </Switch>
    )
}