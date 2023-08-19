function provideId (id: string | null) {
    if (!id) {
        console.log("Please provid ID")
        return
    }
    id.toLocaleLowerCase();
}

interface Bird {
    specie: string,
    fly: () => {}
}

interface Fish {
    specie: string,
    swin: () => {}
}

function doSomething(animal: Bird | Fish) {
    if ('swin' in animal) {
        animal.swin()
        return
    }
    animal.fly()
}

function isFish(animal: Bird | Fish): animal is Fish {
    return (animal as Fish).swin !== undefined;
}

function getFood(animal: Fish | Bird) {
    if (isFish(animal)) {
        animal.swin
    }
}

interface Circle {
    kind: 'circle',
    radius: number,
}

interface Square {
    kind: 'square',
    side: number
}

interface Rectangle {
    kind: 'rectangle',
    length: number,
    width: number
}

type Shape = Circle | Square | Rectangle

function getTrueShape(shape: Shape) {
    if (shape.kind === 'circle') {
        return Math.PI * shape.radius ** 2
    }
    // return shape.side ** 2
}

function getArea(shape: Shape) {
    switch(shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2
        case 'square':
            return shape.side ** 2
        case 'rectangle':
            return shape.width * shape.length
        default:
            const _defaultforshape: never = shape
            return _defaultforshape
    }
}