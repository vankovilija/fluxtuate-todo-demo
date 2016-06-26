import {Command, inject} from "fluxtuate"

export default class Test extends Command {
    @inject
    eventDispatcher;

    execute() {
        this.eventDispatcher.dispatch("SHOW_LOADING");
        setTimeout(()=>{
            this.eventDispatcher.dispatch("HIDE_LOADING");
            this.release();
        }, 1000);
    }
}