import {inject} from "fluxtuate"

import AboutRouteConfig from "./about-route-config"

//Views
import AppRouteView from "./app-route-view"
import AppRouteMediator from "./app-route-mediator"

export default class Config {
    @inject
    mediatorMap;

    @inject
    router;
    
    configure() {
        //map mediators
        this.mediatorMap.mapView(AppRouteView, AppRouteMediator);

        //map routes
        let todoContext = this.router.createContext("todo");
        todoContext.mapRoute("/", {title: "ToDo List Example"}).toPage("startingPage");
        todoContext.mapRoute("/about", {title: "ToDo About"}).toPage("aboutPage");
        todoContext.mapRoute("/list", {title: "ToDo List Items"}).toPage("todoList");
        todoContext.mapRoute("/new", {title: "ToDo List New"}).toPage("newTodoItem");
        todoContext.mapRoute("/item/{id}", {title: "ToDo List Edit"}).toPage("editTodoItem");
        this.router.mapRoute("/compare/<todo>/with/<t1:todo>").toPage("splitView");
        this.router.mapRoute("/todo/<todo>").toPage("normal");

        todoContext.mapConfig(AboutRouteConfig).toPage("aboutPage").withEvent("DELAY_ROUTE_CHANGE");
    }
}