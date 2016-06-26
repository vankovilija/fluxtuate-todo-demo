import React from "react"
import {Mediator, inject} from "fluxtuate"

export default class AppRouteMediator extends Mediator {
    @inject
    router;
    
    @inject
    eventDispatcher;

    init() {
        this.eventDispatcher.addListener("SHOW_LOADING", ()=>{
            this.setProps({
                page: <div>loading... <br />(example loading with timer, check out the DelayRouteChange command)</div>
            });
        });
    }
    //when the route history changes, this utility function is called in all mediators by the router plugin
    onNavStackChange() {
        this.setProps({
            page: this.router.page
        });
        
        document.title = this.router.routeDefaults.title;
    }
}