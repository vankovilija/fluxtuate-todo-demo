import {Command, inject} from "fluxtuate"

export default class SaveItem extends Command {
    @inject
    payload;

    @inject
    todoList;
    
    execute() {
        if(this.payload.id === undefined){
            this.payload.id = ++this.todoList.lastItemID;
        }
        this.payload.completedDate = undefined;
        this.todoList.update({items: [this.payload]});
    }
}