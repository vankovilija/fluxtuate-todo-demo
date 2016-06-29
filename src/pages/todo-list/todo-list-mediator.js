import {Mediator, inject, bindModel, autoDispatch} from "fluxtuate"

export default class TodoListMediator extends Mediator {
    @bindModel
    @inject
    todoList;

    @autoDispatch("COMPLETE_TODO")
    completeItem;

    @autoDispatch("DELETE_TODO")
    deleteItem;

    editItem(id) {
        this.redirect("editTodoItem", {id});
    }

    goBack() {
        this.redirect("startingPage");
    }
}