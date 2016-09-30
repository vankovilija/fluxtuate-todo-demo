import React, {Component} from "react"
import {ReactView} from "fluxtuate-react"
import {Route, Match, Miss, RoutePart, Link} from "fluxtuate-react-router"
import TodoContext from "./todo-context"

@ReactView
export default class AppRouteView extends Component {
    static defaultProps = {
        showLoading: false
    };
    
    render() {
        return (
            <div style={{textAlign: "center"}}>
                {this.props.showLoading ?
                    <div>loading... <br />(example loading with timer, check out the DelayRouteChange command)</div> : undefined }
                <Route location={this.props.location} visible={!this.props.showLoading}>
                        <Match page="normal">
                            <RoutePart partName="todo"><TodoContext /></RoutePart>
                            <Link page="splitView" >Go To Split View</Link>
                        </Match>
                        <Match page="splitView">
                            <RoutePart partName="todo"><TodoContext /></RoutePart>
                            <RoutePart partName="t1"><TodoContext /></RoutePart>
                            <Link page="normal" >Go To Normal View</Link>
                        </Match>
                        <Miss>loading...</Miss>
                </Route>
            </div>
        );
    }
}
