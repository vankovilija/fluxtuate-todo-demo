import {Model, property, PropTypes} from "fluxtuate"

export default class TodoItem extends Model{
    @property(PropTypes.number, true)
    id;

    @property(PropTypes.string)
    title = "A todo item";

    @property(PropTypes.string)
    description = "You have something to do!";

    @property(PropTypes.date)
    dueDate;

    @property(PropTypes.date)
    completedDate;
}