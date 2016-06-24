import React, {Component} from "react"
import {ReactView} from "fluxtuate-react"
import Index from "./pages/index"
import About from "./pages/about"
import Todo from "./pages/todo-list"
import TodoItem from "./pages/todo-item"

const pageMap = {
    startingPage: <Index />,
    aboutPage: <About />,
    todoList: <Todo />,
    newTodoItem: <TodoItem />,
    editTodoItem: <TodoItem />
};

@ReactView
export default class AppRouteView extends Component {
    static defaultProps = {
        page: "loading...."
    };
    
    render() {
        let content = pageMap[this.props.page];
        if(!content)
            content = <div>{this.props.page}</div>;

        return <div style={{textAlign: "center"}}>
            <img src="assets/logo.png" width="300px" height="120px" style={{display: "inline-block", marginBottom: 5}} />
            <div>
                {content}
            </div>
        </div>
    }
}
