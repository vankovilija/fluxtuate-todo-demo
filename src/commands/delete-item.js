import {Command, inject} from "fluxtuate"

export default class DeleteItem extends Command {
    @inject
    payload;

    @inject
    todoList;
    
    execute() {
        this.todoList.items = this.todoList.items.remove(this.payload);
    }
}