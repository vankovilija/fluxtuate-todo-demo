import React, {Component} from "react"
import {ReactView, automediate} from "fluxtuate-react"
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Subheader from 'material-ui/Subheader'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors'
import DurationText from "./duration-text"
import moment from "moment"
import utils from "../../utils"
import {autobind} from "core-decorators"
import RaisedButton from 'material-ui/RaisedButton'
import IconButton from 'material-ui/IconButton'
import ArrowBack from "material-ui/svg-icons/navigation/arrow-back"
import {red100, blue100} from "material-ui/styles/colors"

const iconButtonElement = (
    <IconButton
        touch={true}
        tooltip="more"
        tooltipPosition="bottom-left"
    >
        <MoreVertIcon color={grey400} />
    </IconButton>
);

const completedTextStyle = {
    position: "absolute",
    top: 40,
    right: -25,
    textAlign: "center"
};

@ReactView
@autobind
export default class ToDoList extends Component {
    static defaultProps = {
        items: []
    };
    
    @automediate
    completeItem;

    @automediate
    editItem;
    
    @automediate
    deleteItem;

    getListItem(listData) {
        let editFunction = this.editItem.bind(this, listData.id);
        let rightIconMenu = (
            <div style={{textAlign: "center"}}>
                <IconMenu iconButtonElement={iconButtonElement}>
                    {listData.completedDate?undefined:
                    <div>
                        <MenuItem onTouchTap={this.completeItem.bind(this, listData.id)}>Complete</MenuItem>
                        <Divider />
                    </div>}
                    <MenuItem onTouchTap={editFunction}>Edit</MenuItem>
                    <MenuItem onTouchTap={this.deleteItem.bind(this, listData.id)}>Delete</MenuItem>
                </IconMenu>
                {listData.completedDate?
                    <div style={completedTextStyle}>
                        <div style={{fontSize: 12, marginBottom: 4}}>completed</div>
                        <DurationText style={{position: "relative", top: undefined, left: undefined}} date={listData.completedDate} />
                    </div>:undefined}
            </div>
        );
        let itemStyle;
        if(listData.completedDate) {
            itemStyle = {height: 100}
        }

        return (
            <div key={listData.id}>
                <ListItem onTouchTap={editFunction}
                        style={itemStyle}
                        leftAvatar={<DurationText
                        style={{
                            position: "absolute",
                            top: 18,
                            left: -25
                        }}
                        date={listData.dueDate} />}
                        rightIconButton={rightIconMenu}
                        primaryText={listData.title}
                        secondaryText={
                                <p>
                                  {listData.description}
                                </p>
                              }
                        secondaryTextLines={1}
                        nestedLevel={1}
                    />
                <Divider />
            </div>
        );
    }
    
    getListSectionTitle(dueDate) {
        if(utils.isToday(dueDate)){
            return "Today";
        }else if(utils.isTomorrow(dueDate)){
            return "Tomorrow";
        }else if(utils.isYesterday(dueDate)) {
            return "Yesterday";
        }else if(utils.isSameMonth(dueDate)){
            return "on the " + dueDate.format("Do");
        }else if(utils.isSameYear(dueDate)) {
            return dueDate.format("Do of MMMM");
        }else{
            return dueDate.format("DD.MM.YYYY");
        }
    }
    
    getListSections(listItems) {
        let sections = [];
        let prevSection;
        let sectionItems = [];
        for(let i = 0; i <= listItems.length; i++) {
            if(i === listItems.length || prevSection && !prevSection.isSame(listItems[i].dueDate, "day")){
                if(sectionItems.length > 0) {
                    sections.push(<div key={sections.length + 1}>
                        <Subheader>{this.getListSectionTitle(prevSection)}</Subheader>
                        {sectionItems}
                    </div>);
                }
                sectionItems = [];
                if(i === listItems.length) break;
            }

            prevSection = moment(listItems[i].dueDate);

            sectionItems.push(this.getListItem(listItems[i]));
        }

        return sections;
    }
    
    render () {
        let sortedItems = this.props.items.slice().sort((itemA, itemB)=>{
            if(!itemA.completedDate && itemB.completedDate){
                return -1;
            }else if(itemA.completedDate && !itemB.completedDate){
                return 1;
            }
            let mA = moment(itemA.dueDate);
            let mB = moment(itemB.dueDate);
            if(mA.isBefore(mB)) return -1;
            else if(mB.isBefore(mA)) return 1;
            else return 0;
        });

        let expiredItems = sortedItems.filter((item)=>!item.completedDate && moment(item.dueDate).isBefore(moment()));
        let activeItems = sortedItems.filter((item)=>!item.completedDate &&
        (moment(item.dueDate).isAfter(moment()) || moment(item.dueDate).isSame(moment())));
        let completedItem = sortedItems.filter((item)=>Boolean(item.completedDate));

        return (
            <div style={{display: "inline-block", width: 300, textAlign: "left"}}>
                <div style={{textAlign: "center"}}>
                    <IconButton
                        style={{marginTop: 5}}
                        tooltip="go back"
                        tooltipPosition="bottom-left"
                        onTouchTap={()=>this.mediate("goBack")}
                    >
                        <ArrowBack />
                    </IconButton>
                    <RaisedButton label="New Item" secondary={true} onTouchTap={()=>this.mediate("gotoNewItem")} />
                </div>

                <List>
                    {sortedItems.length === 0?<div style={{textAlign: "center"}}>You don't have any items in your ToDo list</div>:undefined}
                    {expiredItems.length > 0?
                        <div>
                            <Subheader style={{color: red100, fontSize: 16}}>Expired</Subheader>
                            <Divider style={{height: 2}} />
                            {this.getListSections(expiredItems)}
                        </div>:undefined}
                    {activeItems.length > 0?
                        <div>
                            <Subheader style={{color: blue100, fontSize: 16}}>ToDo</Subheader>
                            <Divider style={{height: 2}} />
                            {this.getListSections(activeItems)}
                        </div>:undefined}
                    {completedItem.length > 0?
                        <div>
                            <Subheader style={{fontSize: 16}}>Complete</Subheader>
                            <Divider style={{height: 2}} />
                            {this.getListSections(completedItem)}
                        </div>:undefined}
                </List>
            </div>
        );
    }
}