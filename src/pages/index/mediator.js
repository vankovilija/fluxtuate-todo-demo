import {Mediator, inject} from "fluxtuate"

export default class IndexMediator extends Mediator {
    @inject
    eventDispatcher;

    gotoTodoList() {
        this.eventDispatcher.dispatch("REDIRECT", {name: "todoList"});
    }

    gotoAbout() {
        this.eventDispatcher.dispatch("REDIRECT", {name: "aboutPage"});
    }

    gotoNewItem() {
        this.eventDispatcher.dispatch("REDIRECT", {name: "newTodoItem"});
    }
}