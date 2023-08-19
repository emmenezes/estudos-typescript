type User = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    gender?: string;
}

function createUser(user: User): User { 
    // user._id = "213123";
    return user
}

createUser({_id: "21321", name: "Amanda", email: "a.email@dom.com", isActive: false})


function createCourse():{name: string, prince:number} {
    return {name: 'reactjs', prince: 399}
}

type address = {
    city: string;
    countery: string;
}

type contact = {
    email: string;
    phone: string;
}

type additionalInfo = address & contact;