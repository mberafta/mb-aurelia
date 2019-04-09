import { UserService } from './../../services/user-service';
import { inject } from 'aurelia-framework';

@inject(UserService)
export class UserList {

    users: any[] = [

    ];

    constructor(private userService: UserService) {

    }

    created() {
        this.seedData();
    }

    seedData(): void {
        this.userService.getUsers().then(
            (resolved) => {
                this.users = resolved;
            }
        )
    }

    delete(user: any): void {
        this.userService.delete(this.users.indexOf(user)).then(
            (resolved) =>{
                this.seedData();
            },
            (rejected) => {
                console.log(rejected);
            }
        );
    }

}