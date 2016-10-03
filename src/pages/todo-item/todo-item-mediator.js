import {Mediator, inject, autoDispatch} from "fluxtuate"

export default class TodoItemMediator extends Mediator {
    @inject
    todoList;

    currentItem = null;

    onNavStackChange(routeProperties) {
        let props = routeProperties.params;
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

    @autoDispatch("SAVE_ITEM")
    saveItem(itemData) {
        this.goBack();
        return itemData;
    }
    
    goBack() {
        this.redirect("todoList");
    }
}