import {Mediator, inject} from "fluxtuate"

export default class AboutMediator extends Mediator {
    @inject
    eventDispatcher;

    goBack() {
        this.eventDispatcher.dispatch("REDIRECT", {name: "startingPage"});
    }
}