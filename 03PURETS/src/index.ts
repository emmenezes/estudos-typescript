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
    protected _courseCount = 1;

    readonly isActive: boolean = false;
    constructor(
        public email: string,
        public name: string,
    ) {}

    get getEmail(): string {
        return `"${this.email}"`
    }

    get courseCount(): number {
        return this._courseCount;
    }

    set newCourse(courseNum:number) {
        this._courseCount += courseNum;
    }

    private deleteCourse() {
        this._courseCount--;
    }
}

class SubUser extends User {
    isFamily: boolean = true;
    changeCourseCount() {
        this._courseCount += 1;
    }
}

const cassio = new User("cassio@org.br", "Cassio")
cassio.courseCount;