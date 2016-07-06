import {property, PropTypes} from "fluxtuate"
import TodoItem from "./todo-item"
import moment from "moment"

export default class CompletableTodoItem extends TodoItem{
    @property(PropTypes.date)
    completedDate;

    get completedText() {
        return `completed on ${moment(this.completedDate).format("HH:mm:ss DD.MM.YYYY")}`;
    }
}