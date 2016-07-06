import {Command, inject} from "fluxtuate"

export default class CompleteItem extends Command {
    @inject
    payload;

    @inject
    todoList;
    
    execute() {
        this.todoList.items.find(this.payload).completedDate = new Date();
    }
}