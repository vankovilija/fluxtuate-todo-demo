import React, {Component} from "react"
import {ReactView} from "fluxtuate-react"
import RaisedButton from 'material-ui/RaisedButton'

@ReactView
export default class Index extends Component {
    render() {
        return (
            <div style={{display: "inline-block", width: 300}}>
                <h3>Welcome to the TODO list example for Fluxtuate JS</h3>
                <div>
                    <RaisedButton label="Todo List" primary={true} onTouchTap={()=>this.mediate("gotoTodoList")} />
                    <RaisedButton label="New Item" secondary={true} onTouchTap={()=>this.mediate("gotoNewItem")} />
                    <RaisedButton label="About" onTouchTap={()=>this.mediate("gotoAbout")} />
                </div>
            </div>
        );
    }
}