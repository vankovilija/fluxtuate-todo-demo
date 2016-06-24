import {Mediator, inject} from "fluxtuate"

export default class TodoListMediator extends Mediator {
    @inject
    router;

    @inject
    todoList;
    
    @inject
    eventDispatcher;

    currentItem;

    onNavStackChange(props) {
        if(this.currentItem === props.id){
            return;
        }

        this.linkModel(this.todoList, ()=>{
            let todoItem = this.todoList.items.find(props.id);
            if(todoItem) {
                return todoItem.modelData;
            }else{
                return {title: undefined, description: undefined, dueDate: new Date()};
            }
        });
    }

    saveItem(itemData) {
        this.eventDispatcher.dispatch("SAVE_ITEM", itemData);
        this.router.goToPage("todoList");
    }
}