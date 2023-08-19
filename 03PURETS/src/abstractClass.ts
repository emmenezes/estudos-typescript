abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getSepia(): void

    getReelTime(): number {
        return 9;
    }
}

class Instagram2 extends TakePhoto {
    constructor(
        public cameraMode: string, 
        public filter: string, 
        public burst: number) {
            super(cameraMode, filter)
        }
    
        getSepia(): void {
            console.log('get it!')
        }

}

const photo = new Instagram2("test", "test", 2)
photo.getReelTime()
