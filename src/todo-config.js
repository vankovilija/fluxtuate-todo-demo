import {inject} from "fluxtuate"

import AboutRouteConfig from "./about-route-config"

//Views

import AboutPage from "./pages/about/about"
import AboutMediator from "./pages/about/mediator"

import TodoListView from "./pages/todo-list"
import TodoListMediator from "./pages/todo-list/todo-list-mediator"

import TodoItem from "./pages/todo-item"
import TodoItemMediator from "./pages/todo-item/todo-item-mediator"

//Commands
import SaveItem from "./commands/save-item"
import CompleteItem from "./commands/complete-item"
import WarnFuture from "./commands/warn-future"
import DeleteItem from "./commands/delete-item"

import TestGuard from "./test-guard"

//Models
import TodoList from "./models/todo-list"

export default class Config {
    @inject
    mediatorMap;

    @inject
    commandMap;

    @inject
    store;
    
    configure() {
        //store models in context
        this.store.addModel(TodoList, "todoList");

        //map commands
        this.commandMap.mapEvent("SAVE_ITEM").toCommand(SaveItem, this.store.getModel("todoList"));
        this.commandMap.mapEvent("COMPLETE_TODO").toCommand(CompleteItem).withGuard(TestGuard);
        this.commandMap.mapEvent("COMPLETE_TODO").toCommand(WarnFuture).withoutGuard(TestGuard);
        this.commandMap.mapEvent("DELETE_TODO").toCommand(DeleteItem);

        //map mediators

        this.mediatorMap.mapView(AboutPage, AboutMediator);

        this.mediatorMap.mapView(TodoListView, TodoListMediator);

        this.mediatorMap.mapView(TodoItem, TodoItemMediator);
    }
}