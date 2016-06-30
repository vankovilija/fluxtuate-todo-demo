import React, {Component} from "react"
import {ReactContext} from "fluxtuate-react"
import Router from "fluxtuate-router"
import Config from "./root-config"
import AppRouter from "./app-route-view"
import FluxtuateReactTools from "fluxtuate-react-tools"

@ReactContext
export default class AppContext extends Component {
    componentWillMount() {
        //configure the context and attach the router plugin to the context (will be attached to all child contexts by default)
        this.props.context.config(Config).plugin(Router).start();
    }

    render() {
        return <FluxtuateReactTools open={true}><AppRouter /></FluxtuateReactTools>;
    }
}