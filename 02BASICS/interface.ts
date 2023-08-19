interface User {
    email: string,
    userId: number,
    startTrail: () => string,
    getCode(code: string): number,
}

const linn: User = {
    email: 'lin@email.com',
    userId: 2,
    startTrail: () => {
        return ""
    },
    getCode: (code:string) => {
        return code.length
    }
}