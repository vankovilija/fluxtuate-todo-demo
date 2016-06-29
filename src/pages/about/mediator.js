import {Mediator, inject} from "fluxtuate"

export default class AboutMediator extends Mediator {
    goBack() {
        this.redirect("startingPage");
    }
}