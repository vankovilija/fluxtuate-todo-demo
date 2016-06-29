import React, {Component} from "react"
import {ReactView, automediate} from "fluxtuate-react"
import TextField from 'material-ui/TextField'
import DatePicker from 'material-ui/DatePicker'
import RaisedButton from 'material-ui/RaisedButton'
import TimePicker from 'material-ui/TimePicker'
import {autobind} from "core-decorators"

@ReactView
@autobind
export default class TodoItem extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            title: "",
            description: "",
            dueDate: new Date()
        };
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            title: newProps.title,
            description: newProps.description,
            dueDate: newProps.dueDate
        });
    }

    handleChangeTitle(event) {
        this.setState({
            title: event.target.value
        });
    }

    handleChangeDescription(event) {
        this.setState({
            description: event.target.value
        });
    }

    handleChangeDate(event, date) {
        let newDate = new Date(this.state.dueDate.getTime());
        newDate.setDate(date.getDate());
        newDate.setMonth(date.getMonth());
        newDate.setYear(date.getFullYear());
        this.setState({
            dueDate: newDate
        });
    }

    handleChangeTime(event, date) {
        let newDate = new Date(this.state.dueDate.getTime());
        newDate.setHours(date.getHours());
        newDate.setMinutes(date.getMinutes());
        newDate.setSeconds(date.getSeconds());
        this.setState({
            dueDate: newDate
        });
    }

    @automediate
    saveItem() {
        return {
            id: this.props.id,
            title: this.state.title,
            description: this.state.description,
            dueDate: new Date(this.state.dueDate.getTime())
        };
    }

    render() {
        return <div style={{display: "inline-block", width: 300, textAlign: "left"}}>
            <TextField
                hintText="The title of the task"
                floatingLabelText="Title"
                onChange={this.handleChangeTitle}
                value={this.state.title}
            /><br />
            <TextField
                hintText="The description of the task"
                floatingLabelText="Description"
                onChange={this.handleChangeDescription}
                multiLine={true}
                rows={2}
                value={this.state.description}
            /><br />
            <DatePicker
                onChange={this.handleChangeDate}
                autoOk={true}
                floatingLabelText="Due Date"
                value={this.state.dueDate}
                container="inline"
            />
            <TimePicker
                format="ampm"
                hintText="12hr Format"
                value={this.state.dueDate}
                onChange={this.handleChangeTime}
            />
            <div style={{textAlign: "center"}}>
                <RaisedButton label="Save" primary={true} onTouchTap={this.saveItem} />
                <RaisedButton label="Cancel" secondary={true} onTouchTap={()=>this.mediate("goBack")} />
            </div>
        </div>
    }
}