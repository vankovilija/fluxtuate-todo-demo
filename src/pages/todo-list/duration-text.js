import React from "react"
import utils from "../../utils"
import moment from "moment"

const durationStyleBase = {
    width: 100,
    height: 50,
    textAlign: "center"
};

const titleStyle = {
    margin: 0
};

export default (props) => {
    let dueDate = moment(props.date);

    let durationStyle = Object.assign({}, durationStyleBase, props.style);

    if (utils.isToday(dueDate)) {
        return (
            <div style={durationStyle}>
                <h3 style={titleStyle}>{dueDate.format("HH:mm")}</h3>
            </div>
        );
    }else if(utils.isTomorrow(dueDate)){ //is tomorrow
        return (
            <div style={durationStyle}>
                <h5 style={titleStyle}>Tomorrow</h5>
                <h4 style={titleStyle}>{dueDate.format("HH:mm")}</h4>
            </div>
        );
    }else if(utils.isYesterday(dueDate)){ //is yesterday
        return (
            <div style={durationStyle}>
                <h5 style={titleStyle}>Yesterday</h5>
                <h4 style={titleStyle}>{dueDate.format("HH:mm")}</h4>
            </div>
        );
    }else { //is other day
        return (
            <div style={durationStyle}>
                <h5 style={titleStyle}>{dueDate.format("DD.MM.YYYY")}</h5>
                <h4 style={titleStyle}>{dueDate.format("HH:mm")}</h4>
            </div>
        );
    }
};