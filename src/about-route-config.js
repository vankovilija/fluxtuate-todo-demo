import {inject} from "fluxtuate"

//Commands
import DelayRouteChange from "./commands/delay-route-change"

export default class Config {
    @inject
    commandMap;
    
    configure() {
        //map commands
        this.commandMap.mapEvent("DELAY_ROUTE_CHANGE").toCommand(DelayRouteChange);
    }
}