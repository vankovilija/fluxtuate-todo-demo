import React from "react"
import {Mediator, inject} from "fluxtuate"

export default class AppRouteMediator extends Mediator {
    @inject
    eventDispatcher;

    @inject
    location;

    init() {
        this.eventDispatcher.addListener("SHOW_LOADING", ()=>{
            this.setProps({
                showLoading: true
            });
        });

        this.eventDispatcher.addListener("HIDE_LOADING", ()=>{
            this.setProps({
                showLoading: false
            });
        });

        this.setProps({
            location: this.location
        });
    }
    //when the route history changes, this utility function is called in all mediators by the router plugin
    onNavStackChange(routeProperties) {
        document.title = routeProperties.routeDefaults ? routeProperties.routeDefaults.title : "TODO";
    }
}