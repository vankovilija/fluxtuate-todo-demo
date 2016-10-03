import {Guard, inject} from "fluxtuate"

export default class TestGuard extends Guard {
    @inject
    payload;

    @inject
    todoList;

    approve() {
        return this.todoList.items.find(this.payload).dueDate < new Date();
    }
}