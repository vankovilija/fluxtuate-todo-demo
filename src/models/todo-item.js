import {Model, property, PropTypes} from "fluxtuate"
import moment from "moment"

export default class TodoItem extends Model{
    @property(PropTypes.number, true)
    id;

    @property(PropTypes.string)
    title = "A todo item";

    @property(PropTypes.string)
    description = "You have something to do!";

    @property(PropTypes.date)
    dueDate;
    
    get dueText() {
        return moment(this.dueDate).format("HH:mm:ss DD.MM.YYYY");
    }
}