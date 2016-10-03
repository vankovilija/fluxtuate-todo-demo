import {Command} from "fluxtuate"

export default class WarnFuture extends Command {
    execute() {
        alert("You can only complete events that have expired!");
    }
}