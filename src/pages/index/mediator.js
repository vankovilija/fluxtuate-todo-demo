import {Mediator, inject} from "fluxtuate"

export default class IndexMediator extends Mediator {
    @inject
    router;

    gotoTodoList() {
        this.router.goToPage("todoList");
    }

    gotoAbout() {
        this.router.goToPage("aboutPage");
    }

    gotoNewItem() {
        this.router.goToPage("newTodoItem");
    }
}