// Promises Part2 : step02

function setup() {
    noCanvas();
    delay('fuck')
        .then(() => createP('hello'))
        .catch(err => console.log(err));
}

function delay(time) {
    return new Promise((resolve, reject) => {
        if(isNaN(time)) {
            reject(new Error('delay requires a valid number'));
        }
        setTimeout(resolve, time);
    });
}
