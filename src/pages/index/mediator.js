import {Mediator, inject} from "fluxtuate"

export default class IndexMediator extends Mediator {
    gotoTodoList() {
        this.redirect("todoList");
    }

    gotoAbout() {
        this.redirect("aboutPage");
    }

    gotoNewItem() {
        this.redirect("newTodoItem");
    }
}