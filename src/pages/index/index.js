import React, {Component} from "react"
import {ReactView} from "fluxtuate-react"
import {Link} from "fluxtuate-react-router"
import RaisedButton from 'material-ui/RaisedButton'

@ReactView
export default class Index extends Component {
    render() {
        return (
            <div style={{display: "inline-block", width: 300}}>
                <h3>Welcome to the TODO list example for Fluxtuate JS</h3>
                <div>
                    <RaisedButton containerElement={<Link page="todoList" type={Link.BUTTON}/>} label="Todo List" primary={true} />
                    <RaisedButton containerElement={<Link page="newTodoItem" type={Link.BUTTON}/>} label="New Item" secondary={true} />
                    <RaisedButton containerElement={<Link page="aboutPage" type={Link.BUTTON}/>} label="About" />
                </div>
            </div>
        );
    }
}