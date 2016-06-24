import {Command, inject} from "fluxtuate"

export default class CompleteItem extends Command {
    @inject
    payload;

    @inject
    todoList;
    
    execute() {
        this.todoList.update({items: [{
            id: this.payload,
            completedDate: new Date()
        }]});
    }
}