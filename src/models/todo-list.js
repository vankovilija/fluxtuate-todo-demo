import {Model, property, PropTypes} from "fluxtuate"
import CompletableTodoItem from "./completable-todo-item"

export default class TodoList extends Model{
    @property(PropTypes.arrayOf(CompletableTodoItem))
    items = [{id: 0, title: "test", description: "test", dueDate: new Date()}];

    @property(PropTypes.number)
    lastItemID = 0;
}