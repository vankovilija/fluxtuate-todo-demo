import {Mediator, inject} from "fluxtuate"

export default class AboutMediator extends Mediator {
    @inject
    router;

    goBack() {
        this.router.goBack();
    }
}