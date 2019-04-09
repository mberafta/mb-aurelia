import { UserService } from './../../services/user-service';
import { inject } from 'aurelia-framework';

@inject(UserService)
export class UserDetail{

    currentUser:any;
    routeConfig;

    constructor(private userService:UserService){

    }

    activate(params, routeConfig){
        let id = +params.id;
        this.routeConfig = routeConfig;

        this.userService.getUsers(id).then(
            (resolved) => {
                this.currentUser = resolved[0];
            }
        )
    }

}