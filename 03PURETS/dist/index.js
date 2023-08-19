"use strict";
// class User {
//     email: string;
//     private name: string;
//     readonly isActive: boolean = false;
//     constructor(email:string, name:string) {
//         this.email = email;
//         this.name = name;
//     }
// }
// const cassio = new User("cassio@org.br", "Cassio")
// console.log(cassio.name)
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.isActive = false;
    }
    get getEmail() {
        return `"${this.email}"`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set newCourse(courseNum) {
        this._courseCount += courseNum;
    }
    deleteCourse() {
        this._courseCount--;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount += 1;
    }
}
const cassio = new User("cassio@org.br", "Cassio");
cassio.courseCount;
