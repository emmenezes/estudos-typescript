let score: number | string = 33;

score = "33";
// score = undefined;

function detDbId(id: number | string) {
    if (typeof id === "string") {
        id.toUpperCase();
    }
    console.log(id);
}

const data: number[] = [1,2,3]
const data2: string[] = ['1','2','3']
const data3: (string | number)[] = [1,'2','3']

let seatAllotment: "aisle" | 'middle' | 'window';

seatAllotment = 'aisle'
// seatAllotment = 'crew'