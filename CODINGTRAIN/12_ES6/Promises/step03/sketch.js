// Promises Part2 : step02

function setup() {
    noCanvas();
    delayES8(1000)
        .then(() => createP('fuck off'))
        .catch(err => console.log(err));
}

async function delayES8(time) {
    await delay(time);
    return;
}

function delay(time) {
    return new Promise((resolve, reject) => {
        if(isNaN(time)) {
            reject(new Error('requires a valid number'));
        } else {
            setTimeout(resolve, time);
        }
    });
}
