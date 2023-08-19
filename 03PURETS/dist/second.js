"use strict";
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
class YouTube {
    constructor(cameraMode, filter, burst, shor) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.shor = shor;
    }
    createStory() {
        console.log('Story created!');
    }
}
