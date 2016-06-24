import {Mediator, inject} from "fluxtuate"

export default class AppRouteMediator extends Mediator {
    @inject
    router;

    //when the route history changes, this utility function is called in all mediators by the router plugin
    onNavStackChange() {
        this.setProps({
            page: this.router.page
        });
        
        document.title = this.router.routeDefaults.title;
    }
}