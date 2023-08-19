const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
    return val;
}

function identityTwo(val: any): any {
    return val;
}

function identityThree<Type>(val: Type): Type {
    return val;
}

function identityFour<T>(val: T): T {
    return val;
}

interface Bootle{
    brand: string,
    type: number
}

function getSeatchProducts<T>(produtcs: T[]): T {
    const index = 0;
    return produtcs[index];
}

const getMoreSearchProducts = <T>(produtcs: T[]): T => {
    const index = 0;
    return produtcs[index]; 
}

interface Quiz {
    name: string,
    type: string
}

interface Course {
    name: string,
    author: string,
    subject: string,
}

class Sellable<T> {
    public cart: T[] = []
}

