import React, {Component} from "react"
import {ReactContext} from "fluxtuate-react"
import Config from "./todo-config"
import TodoRoot from "./todo-route-view"

@ReactContext
export default class TodoContext extends Component {
    componentWillMount() {
        //configure the context and attach the router plugin to the context (will be attached to all child contexts by default)
        this.props.context.config(Config).start();
    }

    render() {
        return <TodoRoot />;
    }
}