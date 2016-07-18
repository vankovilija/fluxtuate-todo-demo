import {Command, inject, dependencies} from "fluxtuate"

@dependencies("model")
export default class SaveItem extends Command {
    @inject
    payload;
    
    @inject
    model;
    
    execute() {
        if(this.payload.id === undefined){
            this.payload.id = ++this.model.lastItemID;
        }
        this.payload.completedDate = undefined;
        this.model.update({items: [this.payload]});
    }
}