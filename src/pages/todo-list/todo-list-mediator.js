import {Mediator, inject} from "fluxtuate"

export default class TodoListMediator extends Mediator {
    @inject
    todoList;

    @inject
    eventDispatcher;

    init() {
        this.linkModel(this.todoList);
    }

    completeItem(id) {
        this.eventDispatcher.dispatch("COMPLETE_TODO", id);
    }

    deleteItem(id) {
        this.eventDispatcher.dispatch("DELETE_TODO", id);
    }

    editItem(id) {
        this.eventDispatcher.dispatch("REDIRECT", {name: "editTodoItem", params: {id}});
    }

    goBack() {
        this.eventDispatcher.dispatch("REDIRECT", {name: "startingPage"});
    }
}