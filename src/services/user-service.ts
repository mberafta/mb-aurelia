export class UserService {

    initialUsers: any[] = [
        { name: "Jose", id: 1 },
        { name: "Joselito", id: 2 },
        { name: "Joselita", id: 3 },
        { name: "Jose Jr", id: 4 },
        { name: "Jose II", id: 5 }
    ];

    constructor() {

    }

    getUsers(id?: number): Promise<any> {
        return new Promise((resolve, reject) => {
            if (!id)
                resolve(this.initialUsers);
            else
                resolve(this.initialUsers.filter(u => u.id === id));
        });
    }

    add(user: any) {
        this.initialUsers.push(user);
    }

    delete(index: number) {
        return new Promise((resolve, reject) => {
            if (this.initialUsers[index]){
                this.initialUsers.splice(index, 1);
                resolve(true);
            }
            else{
                reject({
                    message:"Aucun élément n'existe pour l'index transmis."
                });
            }
        });

    }

}