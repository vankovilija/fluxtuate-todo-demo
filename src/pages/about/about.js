import React, {Component} from "react"
import {ReactView} from "fluxtuate-react"
import IconButton from 'material-ui/IconButton'
import ArrowBack from "material-ui/svg-icons/navigation/arrow-back"
import FlatButton from 'material-ui/FlatButton'

@ReactView
export default class About extends Component {
    render() {
        return (
            <div style={{display: "inline-block", width: 300, textAlign: "left"}}>
                <div>
                    <IconButton
                        tooltip="go back"
                        tooltipPosition="bottom-left"
                        onTouchTap={()=>this.mediate("goBack")}
                    >
                        <ArrowBack />
                    </IconButton>
                </div>
                <div>
                    Author: <FlatButton label="Ilija Vankov" primary={true} onTouchTap={()=>{window.location="mailto:vankov.ilija@gmail.com";}} /><br />
                    <FlatButton label="GitHub profile" onTouchTap={()=>{window.open("https://github.com/vankovilija", "_blank");}} />
                </div>
            </div>
        );
    }
}