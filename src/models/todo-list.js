import {Model, property, PropTypes} from "fluxtuate"
import TodoItem from "./todo-item"

export default class TodoList extends Model{
    @property(PropTypes.arrayOf(TodoItem))
    items = [];

    @property(PropTypes.number)
    lastItemID = 0;
}