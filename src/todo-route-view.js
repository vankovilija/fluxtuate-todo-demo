import React, {Component} from "react"
import {hasLocation} from "fluxtuate-react-router"
import {Match, Miss} from "fluxtuate-react-router"
import Index from "./pages/index"
import About from "./pages/about"
import Todo from "./pages/todo-list"
import TodoItem from "./pages/todo-item"

@hasLocation
export default class TodoRouteView extends Component {
    render() {
        return (
            <div style={{textAlign: "center"}}>
                <h2>Context: {this.props.location.locationName}</h2>
                <Match page="startingPage"><Index /></Match>
                <Match page="aboutPage"><About /></Match>
                <Match page="todoList"><Todo /></Match>
                <Match page="newTodoItem"><TodoItem /></Match>
                <Match page="editTodoItem"><TodoItem /></Match>
                <Miss>loading...</Miss>
            </div>
        );
    }
}
