import React, {Component} from "react"
import {ReactView} from "fluxtuate-react"
import {Match, Miss} from "fluxtuate-react-router"
import Index from "./pages/index"
import About from "./pages/about"
import Todo from "./pages/todo-list"
import TodoItem from "./pages/todo-item"

@ReactView
export default class TodoRouteView extends Component {
    render() {
        return (
            <div style={{textAlign: "center"}}>
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
