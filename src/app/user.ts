export class User {
    constructor(public avatarUrl:string, public joined:Date, public login:string, public location:string, public repos:number,
        public followers:number, public following:number, public htmlUrl:string){}
}
