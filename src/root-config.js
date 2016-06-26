import {inject} from "fluxtuate"

import AboutRouteConfig from "./about-route-config"

//Views
import AppRouteView from "./app-route-view"
import AppRouteMediator from "./app-route-mediator"

import IndexPage from "./pages/index"
import IndexMediator from "./pages/index/mediator"

import AboutPage from "./pages/about/about"
import AboutMediator from "./pages/about/mediator"

import TodoListView from "./pages/todo-list"
import TodoListMediator from "./pages/todo-list/todo-list-mediator"

import TodoItem from "./pages/todo-item"
import TodoItemMediator from "./pages/todo-item/todo-item-mediator"

//Commands
import SaveItem from "./commands/save-item"
import CompleteItem from "./commands/complete-item"
import DeleteItem from "./commands/delete-item"

//Models
import TodoList from "./models/todo-list"

export default class Config {
    @inject
    mediatorMap;

    @inject
    commandMap;

    @inject
    store;

    @inject
    router;
    
    configure() {
        //map commands
        this.commandMap.mapEvent("SAVE_ITEM").toCommand(SaveItem);
        this.commandMap.mapEvent("COMPLETE_TODO").toCommand(CompleteItem);
        this.commandMap.mapEvent("DELETE_TODO").toCommand(DeleteItem);

        //map mediators
        this.mediatorMap.mapView(AppRouteView, AppRouteMediator);

        this.mediatorMap.mapView(IndexPage, IndexMediator);

        this.mediatorMap.mapView(AboutPage, AboutMediator);

        this.mediatorMap.mapView(TodoListView, TodoListMediator);
        this.mediatorMap.mapView(TodoListView, IndexMediator);

        this.mediatorMap.mapView(TodoItem, TodoItemMediator);

        //store models in context
        this.store(TodoList, "todoList");

        //map routes
        this.router.mapRoute("/", {title: "ToDo List Example"}).toPage("startingPage");
        this.router.mapRoute("/about", {title: "ToDo About"}).toPage("aboutPage");
        this.router.mapRoute("/list", {title: "ToDo List Items"}).toPage("todoList");
        this.router.mapRoute("/new", {title: "ToDo List New"}).toPage("newTodoItem");
        this.router.mapRoute("/item/{id}", {title: "ToDo List Edit"}).toPage("editTodoItem");
        
        this.router.mapConfig(AboutRouteConfig).toPage("aboutPage").withEvent("DELAY_ROUTE_CHANGE");
    }
}